import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgHammer = (props) =>{const {layerProps}=useLayerContext
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
      d="M98.838 75.035 47.434 126.44c-4.703 4.703-12.327 4.703-17.03 0l-.006-.005c-4.703-4.703-4.703-12.328 0-17.031l42.299-42.299.007-.006 7.042-7.043c1.1-1.1 1.666-2.207 1.721-3.338.057-1.164-.4-2.308-1.136-3.423-2.779-4.213-9.296-7.84-14.638-9.66a5.222 5.222 0 0 1-1.153-9.431l.005-.003c12.323-7.505 28.638-5.941 39.286 4.707a31.83 31.83 0 0 1 8.599 15.648l7.572 7.573a5.493 5.493 0 0 1 7.391.341l2.222 2.222a5.493 5.493 0 0 1 0 7.765l-15.21 15.21a5.493 5.493 0 0 1-7.765 0l-2.222-2.223a5.49 5.49 0 0 1-1.18-6.008zM74.166 71.51l-40.83 40.831a7.887 7.887 0 0 0 0 11.155l.005.006a7.89 7.89 0 0 0 11.156 0l40.83-40.83zm14.098 8.224 9.105-9.105a2.076 2.076 0 0 1 2.937 0l5.581 5.581 11.162-11.162-7.992-7.991a2.08 2.08 0 0 1-.568-1.06 27.7 27.7 0 0 0-7.595-14.152c-9.266-9.266-23.461-10.628-34.184-4.1a1.068 1.068 0 0 0 .242 1.931l.051.017c6.173 2.098 13.588 6.45 16.796 11.314 1.26 1.912 1.915 3.917 1.817 5.914-.1 2.03-.957 4.096-2.933 6.071l-5.58 5.581zm18.306 1.375a2.1 2.1 0 0 1-.683.115s.701.136 1.444-.583a1.334 1.334 0 0 0 .025 1.865l2.221 2.222a1.34 1.34 0 0 0 1.891 0l15.21-15.21a1.34 1.34 0 0 0 0-1.89l-2.223-2.222a1.33 1.33 0 0 0-1.889 0l-1.097 1.096-.015.015-14.069 14.07-.054.054a2.1 2.1 0 0 1-.761.468"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgHammer;
