import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgMiniShare = (props) =>{const {layerProps}=useLayerContext
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
      d="M103.267 81.993c0-1.15.901-2.08 2.101-2.08 1.1 0 2 .93 2 2.08v18c0 3.91-3.1 7.08-7 7.08h-40c-4 0-7.1-3.17-7.1-7.08v-40c0-1.88.7-3.68 2-5.01 1.4-1.33 3.2-2.07 5.1-2.07h20c1.1 0 2 .93 2 2.08s-.9 2.08-2 2.08h-20c-.8 0-1.6.31-2.1.86-.6.54-.9 1.29-.9 2.06v40c0 1.61 1.3 2.92 3 2.92h40c1.6 0 2.899-1.31 2.899-2.92zm-16.399-3.88h-.8c-2.8 0-5.4 1.59-7.4 3.54-2.1 2-3.6 4.4-3.9 6.17-.4 2.04-1.7 3.43-3.3 4.03-1.6.61-3.5.43-5.1-.94-1.6-1.34-3.1-4.08-3.1-8.77 0-11.7 9.1-22.35 22.1-22.35.4 0 1 .01 1.5.02l.3-1.31c.4-1.98 1.9-3.57 3.8-4.15s4-.04 5.5 1.39l9.299 9.33a5.47 5.47 0 0 1 0 7.83l-9.3 9.33c-1.5 1.43-3.6 1.97-5.5 1.39s-3.4-2.17-3.8-4.15zm3.7-2.49.6 2.98c.1.49.5.88 1 1.03.5.14 1 .01 1.3-.35l9.4-9.33c.5-.53.5-1.4 0-1.93l-9.4-9.33c-.3-.36-.8-.49-1.3-.35-.5.15-.9.54-1 1.03l-.6 2.98c-.2.97-1.1 1.67-2.1 1.65 0 0-2-.04-3.1-.04-10.6 0-18 8.68-18 18.18 0 1.97.3 3.45.9 4.5.3.68.7 1.14 1.2 1.31.5.22 1.1-.27 1.2-.95.5-2.38 2.3-5.68 5.1-8.34 2.8-2.7 6.4-4.72 10.3-4.72.9 0 2.5.03 2.5.03 1 .02 1.8.71 2 1.65"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniShare;
