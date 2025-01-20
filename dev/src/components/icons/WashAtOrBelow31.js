import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgWashAtOrBelow31 = (props) =>{const {layerProps}=useLayerContext
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
      d="m54.133 67.117-1.177-11.882c-.117-1.176.707-2.235 1.883-2.353 1.06-.117 2.117.706 2.235 1.882l.941 8.942 1.06-.588c6.823-3.412 14.94-3.412 21.881 0l4.118 2.117c3.059 1.53 6.706 1.53 9.883 0l7.294-3.648.706-6.823c.117-1.176 1.059-2 2.235-1.882 1.177.118 2 1.177 1.882 2.353l-5.058 50c0 1.059-.942 1.882-2.001 1.882h-40c-1.059 0-2-.823-2.117-1.882zm47.647-.705-4.941 2.47c-4.353 2.117-9.412 2.117-13.647 0l-4.118-2c-5.764-2.942-12.47-2.942-18.118 0l-2.587 1.176 3.53 34.824h36.235zM64.133 87.47c0-1.177.94-2.117 2.117-2.117a2.11 2.11 0 0 1 2.119 2.117v.118c0 1.53 1.176 2.823 2.823 2.823h.118c1.647 0 2.823-1.293 2.823-2.823v-.235c0-1.53-1.176-2.824-2.823-2.824h-.118c-.824 0-1.53-.47-1.882-1.294-.353-.706-.118-1.647.47-2.236l1.412-1.41H66.25a2.11 2.11 0 0 1-2.117-2.12c0-1.176.94-2.116 2.117-2.116h10c.824 0 1.648.588 1.883 1.294.353.824.236 1.765-.352 2.353l-2.589 2.47c1.883 1.294 3.177 3.412 3.177 5.883v.235c0 3.883-3.177 6.94-7.059 6.94h-.118c-3.882 0-7.059-3.057-7.059-6.94zm24.589-12.117c1.882 0 3.764.823 5.058 2.117s2 3.177 2 5.06v4.94c0 1.882-.706 3.648-2 5.06-1.294 1.294-3.176 1.999-5.058 1.999-1.883 0-3.648-.705-4.942-2-1.412-1.411-2.117-3.177-2.117-5.06v-4.94c0-1.882.706-3.765 2.117-5.06 1.294-1.293 3.06-2.116 4.942-2.116m0 4.235c-.706 0-1.53.235-2 .823-.589.588-.941 1.295-.941 2.119v4.94c0 .823.352 1.53.94 2.118.471.471 1.295.823 2 .823.824 0 1.53-.352 2.118-.823.47-.588.824-1.295.824-2.118v-4.94c0-.824-.353-1.53-.824-2.119-.588-.588-1.294-.823-2.117-.823"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgWashAtOrBelow31;
