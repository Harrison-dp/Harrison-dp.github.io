import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgInsetHandle = (props) =>{const {layerProps}=useLayerContext
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
      d="M109.114 136.697 24.376 108.45a2.078 2.078 0 0 1 1.313-3.94l82.005 27.335V25.065a2.077 2.077 0 0 1 4.154 0v106.78l10.8-3.6V25.065a2.077 2.077 0 0 1 4.154 0V126.86l7.235-2.411a2.076 2.076 0 1 1 1.314 3.94l-9.933 3.311-.074.025-14.916 4.972a2.1 2.1 0 0 1-1.314 0M87.502 84.499c8.068 2.69 14.666 12.233 14.666 21.34 0 4.866-1.837 8.654-4.665 10.903-2.9 2.307-6.894 3.08-11.315 1.606-8.067-2.69-14.667-12.233-14.667-21.34 0-4.867 1.838-8.654 4.666-10.903 2.9-2.308 6.894-3.08 11.315-1.606M76.54 92.37c-.563 1.321-.865 2.888-.865 4.639 0 7.399 5.272 15.214 11.827 17.399 2.714.904 5.198.633 7.06-.653a14.4 14.4 0 0 1-3.366-.704c-7.874-2.624-14.349-11.777-14.656-20.681m20.97 17.117c.33-1.092.505-2.316.505-3.647 0-7.399-5.272-15.214-11.827-17.399-1.83-.61-3.556-.686-5.057-.275q-.016.153-.056.307a12.8 12.8 0 0 0-.393 3.238c0 7.4 5.272 15.214 11.827 17.4 1.605.534 3.126.664 4.494.408q.257-.047.506-.032"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgInsetHandle;
