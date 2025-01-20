import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgRuller = (props) =>{const {layerProps}=useLayerContext
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
      d="m38.409 135.339-14.1-14.098a2.08 2.08 0 0 1 0-2.938l93.853-93.852a2.077 2.077 0 0 1 2.937 0l14.099 14.099a2.077 2.077 0 0 1 0 2.937l-93.853 93.852a2.076 2.076 0 0 1-2.936 0m86.803-100.901-5.581-5.581-90.915 90.915 5.58 5.581 5.58 5.581 4.885-4.884-2.056-2.056a2.078 2.078 0 0 1 2.937-2.937l2.056 2.056 4.883-4.884-5.58-5.581a2.078 2.078 0 0 1 2.937-2.937l5.58 5.581 4.885-4.885-2.056-2.056a2.077 2.077 0 0 1 2.937-2.937l2.056 2.056 4.884-4.884-5.581-5.58a2.077 2.077 0 0 1 2.937-2.937l5.581 5.58 4.884-4.883-2.056-2.056a2.078 2.078 0 0 1 2.937-2.938l2.056 2.056 4.884-4.883-5.58-5.581a2.077 2.077 0 0 1 2.936-2.937l5.581 5.58 4.884-4.883-2.056-2.056a2.078 2.078 0 0 1 2.937-2.937l2.056 2.055 4.884-4.883-5.58-5.581a2.08 2.08 0 0 1 0-2.937c.81-.81 2.126-.81 2.937 0l5.58 5.58 4.884-4.884-2.056-2.056a2.078 2.078 0 0 1 2.937-2.937l2.056 2.056 4.884-4.884-5.581-5.58a2.077 2.077 0 0 1 2.937-2.937l5.581 5.58 4.884-4.884-2.056-2.056a2.078 2.078 0 0 1 2.937-2.937l2.056 2.056 4.884-4.883z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgRuller;
