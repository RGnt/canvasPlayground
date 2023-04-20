import React, {useEffect, useRef} from 'react'

const useCanvas = (draw, options = {}) => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext(options.context || "2d");
        let frameCount = 0;
        let animationFrameId;
        const {border} = options || 0;

        const render = () => {
            frameCount++;
            draw(context, border, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw])

    return canvasRef;
}
export default useCanvas
