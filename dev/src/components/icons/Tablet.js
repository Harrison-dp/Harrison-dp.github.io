import * as React from "react";
const SvgTablet = (props) =>{const {layerProps}=useLayerConstext();return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={160}
    height={160}
    fill="none"
    {...props}
  >
    <path
      fill={layerProps.Title}
      fillRule="evenodd"
      d="M131.217 116.431H30.018c-2 0-3.712-.8-4.96-2.2-1.26-1.3-1.756-3.199-1.55-5.099l6.42-59.36c.197-1.82 1.086-3.57 2.526-4.86 1.34-1.29 3.217-2 5.017-2h84.999c2 0 3.714.79 4.966 2.16s1.753 3.22 1.545 5.15l-3.422 31.63 10.614 26.679c.873 2.1.666 4-.185 5.4-.963 1.5-2.571 2.5-4.771 2.5m-9.765-34.53 3.476-32.13a2.5 2.5 0 0 0-.591-1.92c-.445-.51-1.118-.769-1.818-.769h-85c-.8 0-1.635.34-2.3.93-.663.59-1.148 1.38-1.238 2.21l-6.416 59.309c-.075.7.148 1.4.583 2 .446.5 1.125.7 1.825.7h84.999c.9 0 1.632-.299 2.297-.899s1.151-1.4 1.238-2.2zm.321 30.33h9.5c.5 0 .911-.099 1.143-.399.254-.5.118-1.1-.117-1.7l-7.7-19.4-2.034 18.799c-.108 1-.305 1.9-.792 2.7m-42.337-63.46c1.1 0 2.1.941 2.074 2.101s-.928 2.1-2.128 2.1c-1.1 0-2.099-.94-2.073-2.1.025-1.16.927-2.1 2.127-2.1"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgTablet;
