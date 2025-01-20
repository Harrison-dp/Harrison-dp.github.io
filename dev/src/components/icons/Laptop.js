import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgLaptop = (props) =>{const {layerProps}=useLayerContext
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
      d="M129.547 107.935h5.442a2.09 2.09 0 0 1 2.073 2.083v4.996c0 1.881-.778 3.684-2.073 5.014-1.295 1.321-3.11 2.073-5.01 2.073H29.971c-1.9 0-3.628-.752-5.01-2.073-1.295-1.33-2.072-3.133-2.072-5.014v-4.996a2.09 2.09 0 0 1 2.073-2.083h5.441v-62.92c0-1.882.778-3.676 2.073-5.006 1.296-1.33 3.108-2.074 5.008-2.074h84.982c1.9 0 3.715.744 5.01 2.074 1.382 1.33 2.071 3.124 2.071 5.005zm-97.07 4.165h-5.442v2.914c0 .779.345 1.514.863 2.065.605.543 1.296.849 2.073.849H129.98c.778 0 1.555-.306 2.073-.849.519-.551.864-1.286.864-2.065V112.1zm92.926-4.165v-62.92c0-.77-.345-1.515-.864-2.066-.518-.543-1.295-.849-2.073-.849H37.484c-.777 0-1.468.306-2.073.849-.518.551-.863 1.295-.863 2.065v62.921zM79.976 43.772c1.21 0 2.072.945 2.072 2.1s-.863 2.1-2.072 2.1c-1.123 0-2.073-.945-2.073-2.1s.95-2.1 2.073-2.1"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgLaptop;
