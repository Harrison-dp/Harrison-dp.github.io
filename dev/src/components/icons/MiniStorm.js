import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgMiniStorm = (props) =>{const {layerProps}=useLayerContext
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
      d="M73.507 92.09h-6.346c-7.893 0-14.24-6.404-14.24-14.288 0-6.81 4.72-12.506 11.147-13.946A17.02 17.02 0 0 1 80.016 52.92c8.788 0 16.03 6.64 16.924 15.158 5.777.944 10.171 5.932 10.171 11.929 0 6.663-5.452 12.083-12.124 12.083H78.145l-1.14 2.326h3.011c.733 0 1.383.375 1.709.985.407.618.488 1.383.163 2.026l-4.312 8.511c-.489 1.025-1.71 1.441-2.767.928a2.095 2.095 0 0 1-.977-2.791l2.767-5.493h-3.01c-.733 0-1.384-.373-1.79-.992-.326-.61-.407-1.375-.082-2.026zm21.48-4.174a7.88 7.88 0 0 0 7.893-7.91c0-4.377-3.499-7.916-7.893-7.916-1.139 0-2.115-.936-2.115-2.083 0-7.136-5.777-12.921-12.856-12.921-5.858 0-10.821 3.882-12.367 9.203-.244.79-.977 1.367-1.79 1.472-4.964.643-8.788 4.89-8.788 10.04 0 5.582 4.557 10.115 10.09 10.115z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniStorm;
