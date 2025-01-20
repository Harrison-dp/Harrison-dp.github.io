import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgBuilding = (props) =>{const {layerProps}=useLayerContext
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
      d="M93.906 134.608V29.93a2.91 2.91 0 0 0-2.908-2.907H31.183a2.907 2.907 0 0 0-2.908 2.908v104.677a2.08 2.08 0 0 1-2.077 2.077 2.08 2.08 0 0 1-2.077-2.077V29.93a7.06 7.06 0 0 1 7.062-7.06h59.815c3.9-.002 7.062 3.16 7.062 7.06v27.832h30.309c3.9 0 7.062 3.16 7.062 7.061v69.785a2.08 2.08 0 0 1-2.077 2.077 2.08 2.08 0 0 1-2.077-2.077V64.823a2.91 2.91 0 0 0-2.908-2.908h-30.31v5.816h5.387c1.147 0 2.077.93 2.077 2.077v19.938c0 1.147-.93 2.077-2.077 2.077H98.06v5.815h5.386c1.147 0 2.077.93 2.077 2.077v19.939c0 1.146-.93 2.077-2.077 2.077H98.06v12.877a2.08 2.08 0 0 1-2.077 2.077 2.08 2.08 0 0 1-2.077-2.077m4.154-46.939h3.309V71.885l-3.31-.001zm0 29.908h3.309v-15.785h-3.31zM48.213 34.915v19.939c0 1.146-.93 2.077-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077V34.915c0-1.147.93-2.077 2.077-2.077h9.97c1.147 0 2.076.93 2.076 2.077m-4.153 2.077h-5.816v15.785h5.816zm4.153 27.831v19.939c0 1.146-.93 2.076-2.077 2.076h-9.969a2.077 2.077 0 0 1-2.077-2.076V64.822c0-1.147.93-2.077 2.077-2.077h9.97c1.147 0 2.076.93 2.076 2.077M44.06 66.9h-5.816v15.784h5.816zm4.153 27.83v19.939c0 1.147-.93 2.077-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077V94.731c0-1.147.93-2.077 2.077-2.077h9.97c1.147 0 2.076.93 2.076 2.077m-4.153 2.078-5.816-.001v15.785h5.816zm44.03-61.893v19.939c0 1.146-.93 2.077-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077V34.915c0-1.147.93-2.077 2.077-2.077h9.97c1.147 0 2.076.93 2.076 2.077m-4.154 2.077h-5.815v15.785h5.816zm41.525 32.816v19.938a2.077 2.077 0 0 1-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077V69.808c0-1.148.93-2.077 2.077-2.077h9.969c1.148 0 2.077.93 2.077 2.077m-4.153 2.076h-5.816v15.785h5.816zM88.09 64.823v19.939c0 1.146-.93 2.076-2.077 2.076h-9.969a2.077 2.077 0 0 1-2.077-2.076V64.822c0-1.147.93-2.077 2.077-2.077h9.97c1.147 0 2.076.93 2.076 2.077M83.936 66.9h-5.815v15.784h5.816zm41.525 32.815v19.939a2.077 2.077 0 0 1-2.077 2.077h-9.969a2.08 2.08 0 0 1-2.077-2.077V99.715c0-1.147.93-2.077 2.077-2.077h9.969c1.148 0 2.077.93 2.077 2.077m-4.153 2.077h-5.816v15.785h5.816zM88.09 94.731v19.938c0 1.147-.93 2.077-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077V94.731c0-1.147.93-2.077 2.077-2.077h9.97c1.147 0 2.076.93 2.076 2.077m-4.154 2.077-5.815-.001v15.785h5.816zM68.152 34.915v19.939c0 1.146-.93 2.077-2.077 2.077h-9.97a2.077 2.077 0 0 1-2.076-2.077V34.915c0-1.147.93-2.077 2.077-2.077h9.969c1.147 0 2.077.93 2.077 2.077m-4.154 2.077h-5.815v15.785h5.815zm4.154 27.831v19.939c0 1.146-.93 2.076-2.077 2.076h-9.97a2.077 2.077 0 0 1-2.076-2.076V64.822c0-1.147.93-2.077 2.077-2.077h9.969c1.147 0 2.077.93 2.077 2.077M63.998 66.9h-5.815v15.784h5.815zm4.154 27.83v19.939c0 1.147-.93 2.077-2.077 2.077h-9.97a2.077 2.077 0 0 1-2.076-2.077V94.731c0-1.147.93-2.077 2.077-2.077h9.969c1.147 0 2.077.93 2.077 2.077m-4.154 2.078-5.815-.001v15.785h5.815z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgBuilding;
