import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgCard = (props) =>{
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
      d="M129.646 42.846a7.064 7.064 0 0 1 7.062 7.061v59.816a7.06 7.06 0 0 1-7.062 7.061H29.954a7.063 7.063 0 0 1-7.061-7.061V49.907a7.06 7.06 0 0 1 7.061-7.061zm0 4.154H29.954a2.91 2.91 0 0 0-2.908 2.907v59.816a2.91 2.91 0 0 0 2.908 2.907h99.692a2.906 2.906 0 0 0 2.908-2.907V49.907A2.905 2.905 0 0 0 129.646 47m-74.769 54.83a2.077 2.077 0 0 1 0-4.153h12.96a2.077 2.077 0 0 1 0 4.153zm-4.984-31.569a7.06 7.06 0 0 1 7.061 7.062v4.984a7.06 7.06 0 0 1-7.061 7.062h-9.97a7.06 7.06 0 0 1-7.061-7.062v-4.984a7.06 7.06 0 0 1 7.061-7.062zm0 4.154h-9.97a2.91 2.91 0 0 0-2.907 2.908v4.984a2.91 2.91 0 0 0 2.907 2.908h9.97a2.91 2.91 0 0 0 2.907-2.908v-4.984a2.91 2.91 0 0 0-2.907-2.908m24.923 27.415a2.077 2.077 0 0 1 0-4.153h12.96a2.077 2.077 0 0 1 0 4.153zm19.938 0a2.077 2.077 0 0 1 0-4.153h12.96a2.078 2.078 0 0 1 0 4.153zm-59.815 0a2.077 2.077 0 0 1 0-4.153h12.96a2.077 2.077 0 0 1 0 4.153z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgCard;
