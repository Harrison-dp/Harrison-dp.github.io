import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgCareerPath = (props) =>{
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
      d="M117.114 58.696h2.769c3.894 0 7.038 3.16 7.038 7.068l.15 54.222a7.09 7.09 0 0 1-2.096 5.039 7.05 7.05 0 0 1-5.016 2.059l-80.039-.547c-3.893-.03-7.037-3.189-7.037-7.083v-12.496c0-3.915 3.22-7.082 7.112-7.082h19.916a2.9 2.9 0 0 0 2.92-2.92v-12.46c0-3.915 3.22-7.082 7.113-7.082H89.86a2.9 2.9 0 0 0 2.92-2.92v-8.715c0-3.916 3.22-7.083 7.113-7.083h13.027v-12.19l-20.664-6.88a4.9 4.9 0 0 1-3.295-4.62 4.9 4.9 0 0 1 3.295-4.627l22.087-7.352a2.1 2.1 0 0 1 1.872.284c.524.397.899 1.026.899 1.693zm2.769 4.163h-19.99c-1.572 0-2.92 1.31-2.92 2.92v8.715a7.07 7.07 0 0 1-7.113 7.083H69.944c-1.572 0-2.92 1.31-2.92 2.92v12.458a7.07 7.07 0 0 1-7.113 7.083H39.995c-1.572 0-2.92 1.311-2.92 2.92v12.496a2.904 2.904 0 0 0 2.92 2.913l79.964.554c.823 0 1.572-.299 2.096-.854a3 3 0 0 0 .823-2.073l-.074-54.223c0-1.61-1.348-2.912-2.921-2.912m-6.963-20.747V27.893l-19.317 6.44c-.299.097-.524.366-.524.673 0 .3.225.57.525.667z"
      clipRule="evenodd"
    />
  </svg>
)};
export default SvgCareerPath;
