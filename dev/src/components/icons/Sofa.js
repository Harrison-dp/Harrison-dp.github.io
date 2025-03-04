import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgSofa = (props) =>{const {layerProps}=useLayerContext
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
      d="M32.815 106.754h-2.908a7.06 7.06 0 0 1-7.061-7.061V69.785c0-3.9 3.162-7.061 7.061-7.061h2.908V49.847a7.06 7.06 0 0 1 7.062-7.062h79.753a7.064 7.064 0 0 1 7.062 7.062v12.877h2.908a7.06 7.06 0 0 1 7.061 7.061v29.908c0 3.9-3.162 7.061-7.061 7.061h-2.908v3.905c0 1.147-.93 2.077-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077v-3.905H46.938v3.905c0 1.147-.93 2.077-2.077 2.077h-9.97a2.077 2.077 0 0 1-2.076-2.077zm7.062-39.877h-9.97A2.907 2.907 0 0 0 27 69.786v29.908a2.91 2.91 0 0 0 2.907 2.908h12.877v-5.816h-2.907a7.06 7.06 0 0 1-7.062-7.061v-9.97a7.06 7.06 0 0 1 7.062-7.061h2.907v-2.908a2.91 2.91 0 0 0-2.907-2.907m37.8-19.938h-37.8a2.91 2.91 0 0 0-2.908 2.908v12.877h2.907c3.9 0 7.062 3.161 7.062 7.061v2.908h30.739zm44.861 15.785V49.847a2.905 2.905 0 0 0-2.908-2.908h-37.8v25.754h30.739v-2.908c0-3.9 3.162-7.061 7.061-7.061zm-5.815 39.877H129.6a2.907 2.907 0 0 0 2.907-2.908V69.785a2.907 2.907 0 0 0-2.907-2.907h-9.97a2.907 2.907 0 0 0-2.907 2.907v2.908h2.907a7.064 7.064 0 0 1 7.062 7.061v9.97a7.063 7.063 0 0 1-7.062 7.061h-2.907zm0 4.153v1.828h5.815v-1.828zm-69.785-4.153h65.631v-5.816H46.938zm-9.97 4.153v1.828h5.816v-1.828zm40.709-29.907h-37.8a2.91 2.91 0 0 0-2.908 2.907v9.97a2.91 2.91 0 0 0 2.907 2.907h37.801zm36.969 0H81.83V92.63h37.8a2.907 2.907 0 0 0 2.908-2.907v-9.97a2.905 2.905 0 0 0-2.908-2.907z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgSofa;
