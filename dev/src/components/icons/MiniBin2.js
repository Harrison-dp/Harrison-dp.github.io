import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgMiniBin2 = (props) =>{const {layerProps}=useLayerContext
();return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    viewBox="0 0 160 160"
    fill="none"
    {...props}
  >
    <path
      fill={layerProps?layerProps.Title:'#1a1a1a'}
      fillRule="evenodd"
      d="m62.918 70.145-7.277-5.178c-1.68-1.12-2.659-3.079-2.659-5.318 0-1.68.7-3.5 1.959-4.759a6.67 6.67 0 0 1 4.759-1.958h27.709c2.239 0 4.478 1.119 5.737 2.938l2.94 4.059h5.737a5.315 5.315 0 0 1 5.318 5.318v.559q0 2.1-1.678 3.779c-.98.98-2.24 1.54-3.64 1.54l-2.38 29.389c-.28 3.778-3.358 6.576-6.997 6.576H65.017c-5.318 0-9.657-4.337-9.657-9.656 0-4.478 3.22-8.397 7.558-9.237zm27.99-10.216-1.12-1.68c-.56-.7-1.4-1.119-2.38-1.119H67.118v2.799zm-27.99-2.799H59.7c-.7 0-1.4.28-1.82.7-.56.56-.84 1.12-.84 1.819 0 .84.42 1.538.98 1.958l4.898 3.36zm36.947 9.796h1.958c.28 0 .56-.14.7-.28q.42-.42.419-.84v-.56c0-.699-.559-1.119-1.119-1.119H67.117v2.8zm-27.011 35.966h19.592c1.4 0 2.66-1.119 2.8-2.659l2.379-29.108H67.117v17.072c4.198.84 7.416 4.76 7.416 9.237q0 3.149-1.68 5.458m-7.837-10.775c-2.939 0-5.458 2.379-5.458 5.317 0 3.079 2.52 5.458 5.458 5.458 2.94 0 5.459-2.379 5.459-5.457 0-2.94-2.52-5.318-5.459-5.318"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniBin2;
