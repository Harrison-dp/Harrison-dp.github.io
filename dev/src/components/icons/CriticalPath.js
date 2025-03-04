import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgCriticalPath = (props) =>{const {layerProps}=useLayerContext
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
      d="M52.876 44.878v-9.97a2.91 2.91 0 0 0-2.907-2.907H25.046a2.078 2.078 0 0 1 0-4.154h24.923a7.06 7.06 0 0 1 7.061 7.061v2.908h7.893c1.147 0 2.076.93 2.076 2.077V59.83c0 1.147-.93 2.077-2.076 2.077h-37.8v15.78l7.853.003-1.429-1.428a2.078 2.078 0 0 1 2.936-2.938l4.91 4.905c.42.38.683.93.683 1.541.001.532-.201 1.065-.607 1.471l-.002.002-4.984 4.98a2.078 2.078 0 0 1-2.936-2.94l1.441-1.44-9.943-.003a2.077 2.077 0 0 1-2.076-2.077V59.831c0-1.147.93-2.077 2.077-2.077h37.8V41.97H57.03v2.907a7.06 7.06 0 0 1-7.061 7.062H25.046a2.078 2.078 0 0 1 0-4.154h24.923a2.91 2.91 0 0 0 2.907-2.907m58.985 36.969v2.904a7.06 7.06 0 0 1-7.061 7.062H54.953a7.06 7.06 0 0 1-7.061-7.062v-9.963a7.06 7.06 0 0 1 7.061-7.062H104.8a7.064 7.064 0 0 1 7.061 7.062v2.905h7.892c1.147 0 2.077.93 2.077 2.077v19.938c0 1.147-.93 2.077-2.077 2.077h-37.8v15.78l7.854.004-1.429-1.428a2.078 2.078 0 0 1 2.935-2.939l4.91 4.905c.42.38.684.93.684 1.541 0 .532-.202 1.065-.607 1.471l-.002.002-4.985 4.98c-.81.81-2.126.809-2.937-.001a2.08 2.08 0 0 1 .002-2.938l1.441-1.44-9.943-.004a2.077 2.077 0 0 1-2.077-2.077V99.708c0-1.147.93-2.077 2.077-2.077h37.8V81.847zm-4.154 2.904v-9.963a2.91 2.91 0 0 0-2.907-2.908H54.953a2.91 2.91 0 0 0-2.907 2.908v9.963a2.907 2.907 0 0 0 2.907 2.908H104.8a2.907 2.907 0 0 0 2.907-2.908m27 42.788a2.077 2.077 0 0 1 0 4.154h-24.923a7.063 7.063 0 0 1-7.061-7.062v-9.969a7.06 7.06 0 0 1 7.061-7.061h24.923a2.077 2.077 0 1 1 0 4.153h-24.923a2.91 2.91 0 0 0-2.908 2.908v9.969a2.91 2.91 0 0 0 2.908 2.908z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgCriticalPath;
