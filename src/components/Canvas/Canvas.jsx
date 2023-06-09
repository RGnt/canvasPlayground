import useCanvas from "./useCanvas.jsx";

const Canvas = (props) => {
    const {draw, options, ...rest} = props;
    const {context, ...moreConfig} = options || {};
    const canvasRef = useCanvas(draw, {context});

    return (
        <canvas ref={canvasRef} {...rest} />
    )
}
export default Canvas
