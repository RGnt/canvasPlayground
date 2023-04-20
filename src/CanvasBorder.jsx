import React, {useEffect, useRef} from 'react'
import './App.css';

const CanvasBorder = () => {
    const imgRef = useRef(null);
    const imgEffectRef = useRef(null);
    let imgUrl = "https://us.coca-cola.com/store/media/catalog/product/1/6/16181_squeeze-ko-can-maria-2.png";
    let img = new Image();

    // let effectCtx = document.getElementById("testy").getContext("2d");
    img.src = imgUrl;
    let border = 10;
    let imageDimensions = [0,0]

    useEffect(() => {
        const imgCanvas = imgRef.current;
        let ctx = imgCanvas.current.getContext("2d");
        // ctx.drawImage(img, 0, 0);
    }, [])


    console.log(imgRef.current.getContext("2d"), imgEffectRef.current.getContext("2d"))
    return (
        <div className="flex-1">
            <div>
                <canvas id="imgCtx" className="canvasPosition" ref={imgRef}></canvas>
                <canvas id="testy" className="canvasPosition" ref={imgEffectRef}></canvas>
            </div>
            <div>
                <input type="number"/>
            </div>
        </div>
    )
}
export default CanvasBorder
