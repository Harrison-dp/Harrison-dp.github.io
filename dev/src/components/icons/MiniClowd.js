import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgMiniClowd = (props) =>{const {layerProps}=useLayerContext
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
      d="M94.982 92.089H67.155c-7.892 0-14.239-6.404-14.239-14.288 0-6.81 4.719-12.506 11.147-13.946A17.02 17.02 0 0 1 80.01 52.919c8.787 0 16.029 6.64 16.924 15.158 5.777.944 10.17 5.932 10.17 11.929 0 6.663-5.451 12.083-12.124 12.083m0-4.174a7.88 7.88 0 0 0 7.892-7.91c0-4.377-3.499-7.916-7.892-7.916-1.14 0-2.116-.936-2.116-2.083 0-7.136-5.776-12.921-12.855-12.921-5.859 0-10.822 3.882-12.368 9.203-.244.79-.977 1.367-1.79 1.472-4.964.643-8.788 4.89-8.788 10.04 0 5.582 4.557 10.115 10.09 10.115zM68.13 95.563c.488-1.025 1.79-1.448 2.766-.927a2.094 2.094 0 0 1 .977 2.79l-4.312 8.511c-.488 1.025-1.71 1.441-2.767.928-1.058-.512-1.464-1.766-.895-2.791zm10.008 0c.489-1.025 1.709-1.448 2.766-.927a2.095 2.095 0 0 1 .977 2.79l-4.312 8.511c-.488 1.025-1.71 1.441-2.767.928a2.095 2.095 0 0 1-.977-2.791zm10.008 0c.488-1.025 1.709-1.448 2.766-.927 1.058.512 1.465 1.765.896 2.79l-4.231 8.511c-.489 1.025-1.79 1.441-2.767.928a2.094 2.094 0 0 1-.976-2.791z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniClowd;
