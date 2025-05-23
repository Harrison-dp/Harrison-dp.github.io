import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgClearBreifToColleages = (props) =>{
const {layerProps}=useLayerContext()
;return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    viewBox="0 0 160 160"
    fill="none"
    {...props}
  >
    <path
      fill={layerProps?props.Inactive?layerProps.Accent:layerProps.Title:'#494444'}
      fillRule="evenodd"
      d="M115.05 127.079h-75c-1.9 0-3.7-.74-5.1-2.07-1.3-1.33-2-3.13-2-5.01v-80c0-1.88.7-3.68 2-5.01 1.4-1.33 3.2-2.07 5.1-2.07h57.9V30c0-3.91 3.1-7.08 7.1-7.08 4.2 0 7 3.16 7 7.08v2.92h1.5c4.7 0 8.5 3.84 8.5 8.57V120c0 3.91-3.1 7.08-7 7.08m-71.5-90h-3.5c-.8 0-1.6.31-2.1.86-.6.55-.9 1.29-.9 2.06v80c0 .77.3 1.52.9 2.06.5.55 1.3.86 2.1.86h3.5c-.4-.89-.6-1.88-.6-2.92v-80c0-1.04.2-2.03.6-2.92m10 0h-3.5c-1.7 0-3 1.31-3 2.92v80c0 1.61 1.3 2.92 3 2.92h3.5c-.4-.89-.6-1.88-.6-2.92v-80c0-1.04.2-2.03.6-2.92m54.4 0h-47.9c-1.7 0-3 1.31-3 2.92v80c0 1.61 1.3 2.92 3 2.92h55c1.6 0 2.9-1.31 2.9-2.92v-78.51c0-2.43-2-4.41-4.4-4.41h-1.5V45c0 1.83-.699 3.52-1.899 4.9-1.3 1.42-3.201 2.18-5.201 2.18-1.8 0-3.6-.74-5-2.07-1.3-1.33-2-3.13-2-5.01 0-1.15.9-2.08 2.1-2.08 1.1 0 2 .93 2 2.08 0 .78.3 1.52.9 2.06.5.55 1.3.86 2 .86.8 0 1.5-.21 2-.75.6-.62 1-1.35 1-2.17zm0-4.16V30c0-1.61-1.2-2.92-2.9-2.92s-3 1.31-3 2.92v2.92zm-42.9 24.16c-1.2 0-2.1-.93-2.1-2.08s.9-2.08 2.1-2.08h20c1.1 0 2 .93 2 2.08s-.9 2.08-2 2.08zm0 10c-1.2 0-2.1-.93-2.1-2.08s.9-2.08 2.1-2.08h45c1.1 0 2 .93 2 2.08s-.9 2.08-2 2.08zm0 10c-1.2 0-2.1-.93-2.1-2.08s.9-2.08 2.1-2.08h45c1.1 0 2 .93 2 2.08s-.9 2.08-2 2.08zm0 20c-1.2 0-2.1-.93-2.1-2.08s.9-2.08 2.1-2.08h45c1.1 0 2 .93 2 2.08s-.9 2.08-2 2.08zm0-10c-1.2 0-2.1-.93-2.1-2.08s.9-2.08 2.1-2.08h45c1.1 0 2 .93 2 2.08s-.9 2.08-2 2.08zm0 20c-1.2 0-2.1-.93-2.1-2.08s.9-2.08 2.1-2.08h45c1.1 0 2 .93 2 2.08s-.9 2.08-2 2.08z"
      clipRule="evenodd"
    />
  </svg>
)};
export default SvgClearBreifToColleages;
