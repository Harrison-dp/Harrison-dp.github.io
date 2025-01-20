import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgBlock3 = (props) =>{const {layerProps}=useLayerContext
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
      d="M22.916 80.002c0-31.506 25.578-57.084 57.084-57.084 31.505 0 57.083 25.578 57.083 57.083 0 31.506-25.578 57.084-57.083 57.084-31.506 0-57.084-25.578-57.084-57.084M57.561 91.55a2.088 2.088 0 1 0-1.55-3.87l-4.526 1.875a2.085 2.085 0 0 0-1.127 2.724 2.086 2.086 0 0 0 2.723 1.127zm31.888 9.467a2.09 2.09 0 0 0-1.749 3.016l1.854 4.48a2.086 2.086 0 0 0 2.724 1.129 2.085 2.085 0 0 0 1.127-2.723l-1.87-4.513a2.09 2.09 0 0 0-2.086-1.389m-17.15 3.016a2.089 2.089 0 1 0-3.834-1.627l-1.87 4.513a2.085 2.085 0 0 0 1.126 2.723 2.086 2.086 0 0 0 2.724-1.129zm31.051-16.535a2.088 2.088 0 0 0-.843 4.08l4.411 1.828a2.085 2.085 0 0 0 1.596-3.85l-4.62-1.914a2.1 2.1 0 0 0-.544-.144m29.525-9.581C131.781 49.676 108.508 27.085 80 27.085c-28.509 0-51.782 22.59-52.876 50.833h35.918c1.03-8.448 8.233-15 16.957-15 1.694 0 3.331.248 4.876.707 6.414 1.91 11.253 7.486 12.082 14.293zm-60.517-21.81a2.084 2.084 0 0 1-3.85 1.593l-7.655-18.478a2.083 2.083 0 0 1 3.85-1.594zm48.418 4.747a2.085 2.085 0 0 1 1.596 3.85l-18.478 7.655a2.085 2.085 0 0 1-1.594-3.85zm-29.284-3.154a2.085 2.085 0 0 1-3.85-1.594l7.653-18.478a2.083 2.083 0 0 1 3.85 1.594zM57.699 68.51a2.083 2.083 0 0 1-1.594 3.85l-18.478-7.653a2.085 2.085 0 0 1 1.596-3.85zm35.05 9.409c-.798-4.915-4.374-8.903-9.062-10.298A12.9 12.9 0 0 0 80 67.084c-6.42 0-11.753 4.695-12.75 10.834zM65 82.085h-1.958c1.03 8.446 8.233 15 16.957 15s15.928-6.554 16.958-15h-4.208c-.997 6.14-6.33 10.832-12.75 10.832-6.419 0-11.752-4.693-12.749-10.832z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgBlock3;
