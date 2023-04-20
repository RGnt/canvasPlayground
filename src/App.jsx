import { useState } from 'react'
import './App.css'
import Canvas from "./components/Canvas/Canvas";
import {resizeCanvas} from "./components/Canvas/index.js";


function App() {
  const [count, setCount] = useState(0)
    const [canvasWidth, setCanvasWidth] = useState(120);
    const [canvasHeight, setCanvasHeight] = useState(120);
    const [safeArea, setSafeArea] = useState(10);

    const [bgImageUrl, setBgImgUrl] = useState("");
    const [fgImageUrl, setFgImgUrl] = useState("");

    const bgImg = new Image();
    const fgImg = new Image();

    const draw = (ctx, borderWidth, frameCount) => {
        ctx.save();
        if(bgImageUrl.length > 0) {
            bgImg.src = bgImageUrl;
            bgImg.onload = () => {
                ctx.drawImage(bgImg, 0, 0, canvasWidth, canvasHeight);
            }
        }
        if(fgImageUrl.length > 0) {
            fgImg.src = fgImageUrl;
            fgImg.onload = () => {
                ctx.drawImage(fgImg, canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2);
            }
        }
        resizeCanvas(ctx.canvas, canvasWidth, canvasHeight);
        let border = safeArea;
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.fillRect(0, 0, ctx.canvas.width - border, border);
        ctx.fillRect(border, ctx.canvas.height - border, ctx.canvas.width, border);
        ctx.fillRect(ctx.canvas.width - border, 0, ctx.canvas.width - border, ctx.canvas.width - border);
        ctx.fillRect(0, border, border, ctx.canvas.height - border)
        ctx.restore()
    }

  return (
    <div className="App">
        <div>
            <Canvas draw={draw} options={{frameCount: 1}}/>
        </div>
        <div>
            <label htmlFor="height">Height</label>
            <input id="height" type="text" value={canvasHeight} onChange={(e) => setCanvasHeight(Number(e.target.value))}/>
            <br/>
            <label htmlFor="width" >Width</label>
            <input id="width" type="text" value={canvasWidth} onChange={(e) => setCanvasWidth(Number(e.target.value))}/>
            <br/>
            <label htmlFor="border" >Safe Area</label>
            <input id="border" type="text" value={safeArea} onChange={(e) => setSafeArea(Number(e.target.value))}/>
            <br/>
            <label htmlFor="imgUrl" >imgURL</label>
            <input id="imgUrl" type="text" value={bgImageUrl} onChange={(e) => setBgImgUrl(e.target.value)}/><br/>
            <label htmlFor="embedURL" >Embedded image</label>
            <input id="embedURL" type="text" value={fgImageUrl} onChange={(e) => setFgImgUrl(e.target.value)}/>
            <div>
                <div><h3>Test URLs, for if you are lazy</h3></div>
                <div>https://us.coca-cola.com/store/media/catalog/product/1/6/16181_squeeze-ko-can-maria-2.png</div>
                <div>https://ueeshop.ly200-cdn.com/u_file/UPAL/UPAL712/2203/photo/c4616b231f.jpg</div>
            </div>
        </div>
    </div>
  )
}

export default App
