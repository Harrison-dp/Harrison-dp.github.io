import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgOutdoorSpaces = (props) =>{const {layerProps}=useLayerContext
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
      d="M92.71 126.833H45.801l-9.36 9.361a2.077 2.077 0 0 1-2.937-2.937l9.969-9.969c.39-.39.917-.608 1.468-.608h10.05L25.244 92.934a2.078 2.078 0 0 1 2.937-2.937l.37.37 2.304-1.41a7.06 7.06 0 0 1 8.68 1.03l20.492 20.491a7.06 7.06 0 0 1 1.78 2.994 7.06 7.06 0 0 1 3.19-.762H92.71v-5.941c-8.421-1.025-14.953-8.208-14.953-16.905V40.018c0-9.4 7.63-17.03 17.03-17.03s17.031 7.63 17.031 17.03v49.846c0 8.697-6.532 15.88-14.954 16.905v5.941h27.831c1.873 0 3.669.744 4.993 2.069a7.06 7.06 0 0 1 2.069 4.993v2.908h2.907a2.077 2.077 0 0 1 0 4.153H119.74l6.424 6.424a2.077 2.077 0 0 1-2.937 2.937l-9.362-9.361h-17v7.893a2.078 2.078 0 0 1-4.155 0zm4.154-24.259c6.121-.994 10.8-6.31 10.8-12.71V40.018c0-7.107-5.77-12.877-12.877-12.877S81.91 32.911 81.91 40.018v49.846c0 6.4 4.68 11.716 10.8 12.71V81.76c-1.956-.267-3.455-1.014-4.546-2.124-1.428-1.452-2.227-3.608-2.206-6.508a2.078 2.078 0 0 1 4.154.03c-.01 1.565.243 2.782 1.013 3.565.408.414.939.68 1.585.83V64.942a2.078 2.078 0 0 1 4.154 0v23.19c.6-.155 1.094-.414 1.479-.805.77-.782 1.025-2 1.013-3.564a2.078 2.078 0 0 1 4.154-.031c.021 2.9-.778 5.056-2.205 6.508-1.072 1.09-2.536 1.83-4.44 2.11zm30.739 20.106v-2.908a2.91 2.91 0 0 0-2.908-2.908H64.997a2.91 2.91 0 0 0-2.907 2.898v2.918zm-69.667-2.93.006-4.275a2.9 2.9 0 0 0-.851-2.06L36.599 92.923a2.91 2.91 0 0 0-3.574-.424l-1.452.889z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgOutdoorSpaces;
