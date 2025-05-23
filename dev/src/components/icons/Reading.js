import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgReading = (props) =>{
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
      d="M85.735 134.288H73.772a2.08 2.08 0 0 1-2.06-1.801 5 5 0 0 0-.814-.367c-1.3-.404-3.16-.584-5.39-.645-11.481-.312-31.916 2.813-40.585 2.813a2.077 2.077 0 0 1-2.077-2.077v-9.969c0-1.147.93-2.077 2.077-2.077 9.849 0 22.778-3.502 34.408-4.2a60 60 0 0 1 6.072-.077l.01-.032c6.466-18.197 23.846-31.24 44.248-31.24a46.7 46.7 0 0 1 25.874 7.776 2.078 2.078 0 0 1-2.294 3.464 42.56 42.56 0 0 0-23.58-7.087c-18.233 0-33.818 11.429-39.975 27.508 3.711.539 7.122 1.621 10.067 3.459 5.532-3.452 12.7-4.235 20.423-3.771 11.63.698 24.559 4.2 34.408 4.2 1.147 0 2.077.93 2.077 2.077v9.969c0 1.147-.93 2.077-2.077 2.077-8.669 0-29.104-3.125-40.585-2.813-2.23.061-4.09.241-5.39.645-.296.093-.65.277-.815.367a2.08 2.08 0 0 1-2.06 1.801m-8.058-4.154-.001-6.799c-4.864-3.112-11.25-3.635-18.096-3.224-10.912.655-22.963 3.742-32.58 4.16v5.817c11.085-.446 34.045-3.915 43.226-2.374 1.913.321 3.336.893 4.193 1.595q.317.26.558.547l.188.278zm4.153 0h2.512l.187-.278q.242-.287.559-.547c.857-.702 2.28-1.274 4.193-1.595 9.18-1.541 32.141 1.928 43.226 2.374v-5.816c-9.617-.419-21.668-3.506-32.58-4.161-6.847-.411-13.233.112-18.096 3.224zm27.831-104.677c14.902 0 27 12.099 27 27s-12.098 27-27 27-27-12.098-27-27 12.099-27 27-27m0 4.154c-12.61 0-22.846 10.237-22.846 22.846s10.237 22.846 22.846 22.846 22.846-10.237 22.846-22.846-10.237-22.846-22.846-22.846"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgReading;
