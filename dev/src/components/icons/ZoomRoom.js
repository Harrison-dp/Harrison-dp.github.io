import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgZoomRoom = (props) =>{const {layerProps}=useLayerContext
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
      d="M124.994 127.068h-90c-1.222 0-2.111-.93-2.111-2.08s.89-2.08 2.111-2.08h33.112c.334-2.43 1.556-4.69 3.334-6.46 2.222-2.27 5.332-3.54 8.554-3.54 5.89 0 10.888 4.32 11.888 10h33.112c1.111 0 2.001.93 2.001 2.08s-.89 2.08-2.001 2.08m-37.443-4.16c-.89-3.36-4.001-5.84-7.557-5.84-2.11 0-4.11.84-5.666 2.32-1 .99-1.668 2.2-2 3.52zm37.443-90c1.889 0 3.667.74 5 2.07s2.001 3.13 2.001 5.01v60c0 1.88-.668 3.68-2.001 5.01a7.04 7.04 0 0 1-5 2.07h-90a7.04 7.04 0 0 1-5-2.07c-1.333-1.33-2.111-3.13-2.111-5.01v-60c0-1.88.778-3.68 2.111-5.01a7.04 7.04 0 0 1 5-2.07zm0 4.16h-90c-.777 0-1.556.31-2.111.86s-.888 1.29-.888 2.06v60c0 .77.332 1.521.888 2.061.555.55 1.334.859 2.111.859h90c.778 0 1.445-.309 2.001-.859.556-.54.888-1.291.888-2.06v-60c0-.77-.332-1.51-.888-2.06s-1.223-.86-2.001-.86m-45 5.84c8 0 14.555 6.53 14.555 14.58s-6.555 14.58-14.555 14.58c-8.11 0-14.665-6.53-14.665-14.58s6.554-14.58 14.665-14.58m0 4.16c-5.778 0-10.445 4.67-10.445 10.42s4.667 10.42 10.445 10.42c5.667 0 10.334-4.67 10.334-10.42s-4.667-10.42-10.334-10.42m35 45h-70c-1.222 0-2.111-.93-2.111-2.08s.89-2.08 2.111-2.08h12.889v-6.04c0-2.02 1.222-3.83 3.222-4.51 12.556-4.43 25.223-4.53 37.778 0 1.889.69 3.112 2.48 3.112 4.49v6.06h12.999c1.111 0 2.001.93 2.001 2.08s-.89 2.08-2.001 2.08m-17.111-4.16v-6.06c0-.25-.223-.48-.445-.57-11.667-4.2-23.333-4.09-35 .01-.222.09-.443.32-.443.58v6.04z"
      clipRule="evenodd"
    />
    <path
      fill={layerProps?layerProps.Title:'#1a1a1a'}
      d="M79.98 99.213a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2"
    />
  </svg>)}
export default SvgZoomRoom;
