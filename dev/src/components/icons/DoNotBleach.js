import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgDoNotBleach = (props) =>{const {layerProps}=useLayerContext
();return(
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
      d="M67.782 70.645 53.571 56.528a2.197 2.197 0 0 1 0-2.942c.847-.823 2.164-.823 2.917 0l13.553 13.53 4.047-6.47c1.224-2 3.482-3.295 5.93-3.295 2.446 0 4.8 1.294 6.023 3.294L89.994 67l13.553-13.53c.753-.823 2.071-.823 2.918 0a2.02 2.02 0 0 1 0 2.941L92.253 70.645l9.788 15.647c1.318 2.118 1.412 4.824.189 7.177-.753 1.177-1.695 2.117-2.919 2.823l7.248 7.177a2.197 2.197 0 0 1 0 2.941 2.144 2.144 0 0 1-3.012 0l-9.317-9.294H65.994l-9.411 9.294c-.847.824-2.166.824-2.919 0-.847-.705-.847-2.117 0-2.941l7.154-7.177c-1.13-.706-2.165-1.646-2.918-2.823-1.224-2.353-1.13-5.06.188-7.177zm19.2-.588-4.423-7.176c-.565-.824-1.506-1.412-2.542-1.412-.94 0-1.882.588-2.446 1.412l-4.518 7.176 6.964 6.942zm8.942 22.824h.093c1.036 0 1.977-.588 2.542-1.53.47-.823.47-2-.094-2.94l-9.224-14.706-6.212 6.235zm-25.79 0h19.954l-10.07-10zm.66-19.176-9.13 14.706c-.564.94-.564 2.117-.093 2.94.47.942 1.506 1.53 2.54 1.53h.095L77.1 79.94z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgDoNotBleach;
