import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMediaUnit = (props) =>{
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
      d="M22.87 59.985c0-1.952.8-3.728 2.1-5.008 1.2-1.28 3-2.072 5-2.072h99.999c1.8 0 3.7.744 5 2.072s2.1 3.128 2.1 5.008v30c0 1.88-.8 3.68-2.1 5.008s-3.2 2.08-5 2.08h-2.9v7.384c0 2.12-1.5 3.96-3.6 4.448-2 .488-4.2-.504-5.1-2.4l-4.699-9.432h-67.4l-4.8 9.432c-.9 1.896-3 2.888-5.1 2.4s-3.5-2.328-3.5-4.448v-7.384h-2.9c-2 0-3.8-.8-5-2.08a7 7 0 0 1-2.1-5.008zm33-2.912h-25.9c-.8 0-1.6.312-2.1.848s-.8 1.272-.8 2.064v30c0 .792.3 1.528.8 2.064s1.3.856 2.1.856h25.9zm32.999 0h-28.8v35.832h28.8V57.073m44 15.832v-12.92c0-.776-.3-1.512-.9-2.064-.5-.544-1.3-.848-2-.848h-36.9v15.832zm-17.899 20h14.999c.7 0 1.5-.312 2-.856.6-.552.9-1.288.9-2.064V77.073h-39.8v15.832h21.901m3.299 4.168 3.8 7.568c.1.168.3.248.5.208s.3-.2.3-.392v-7.384zm-81.2 0v7.384c0 .192.1.352.3.392.1.04.3-.04.4-.208l3.8-7.568zm12.8-27.088c0-1.152.9-2.08 2.1-2.08 1.1 0 2.1.928 2.1 2.08v10c0 1.152-1 2.08-2.1 2.08-1.2 0-2.1-.928-2.1-2.08zm12 0c0-1.152.9-2.08 2.1-2.08 1.1 0 2.1.928 2.1 2.08v10c0 1.152-1 2.08-2.1 2.08-1.2 0-2.1-.928-2.1-2.08z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMediaUnit;
