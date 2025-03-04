import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgWarranty = (props) =>{const {layerProps}=useLayerContext
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
      d="m94.41 117.51-3.428.683c-.998.199-1.97.514-2.893.94l-6.137 2.827a17.13 17.13 0 0 1-14.334 0l-6.137-2.827a13 13 0 0 0-2.893-.94l-6.626-1.32a17.13 17.13 0 0 1-11.596-8.425l-3.303-5.894a13 13 0 0 0-1.789-2.461l-4.584-4.964a17.13 17.13 0 0 1-4.43-13.631l.792-6.71c.12-1.01.12-2.032 0-3.042l-.791-6.711a17.13 17.13 0 0 1 4.429-13.631l4.584-4.963a13 13 0 0 0 1.789-2.461l3.303-5.894a17.13 17.13 0 0 1 11.596-8.426l6.626-1.32c.998-.2 1.97-.514 2.893-.94l6.137-2.826a17.13 17.13 0 0 1 14.334 0l6.137 2.826c.924.426 1.895.74 2.893.94l6.627 1.32a17.13 17.13 0 0 1 11.595 8.426l3.304 5.894a13 13 0 0 0 1.788 2.46l4.584 4.964a17.13 17.13 0 0 1 4.43 13.631l-.792 6.71a13 13 0 0 0 0 3.043l.792 6.71a17.13 17.13 0 0 1-3.814 12.928l16.573 16.573a2.075 2.075 0 0 1-.917 3.47l-15.439 4.259-4.258 15.44a2.076 2.076 0 0 1-3.471.916zm20.704-24.426.715-.773a12.98 12.98 0 0 0 3.355-10.326l-.792-6.71a17.2 17.2 0 0 1 0-4.016l.792-6.71a12.98 12.98 0 0 0-3.355-10.327l-4.585-4.963a17.2 17.2 0 0 1-2.36-3.249l-3.303-5.894a12.98 12.98 0 0 0-8.784-6.382l-6.627-1.32a17 17 0 0 1-3.819-1.241l-6.137-2.827a12.98 12.98 0 0 0-10.858 0l-6.137 2.827c-1.22.562-2.502.978-3.818 1.24l-6.628 1.321a12.98 12.98 0 0 0-8.784 6.382l-3.303 5.894a17 17 0 0 1-2.36 3.249l-4.585 4.963a12.98 12.98 0 0 0-3.355 10.326l.792 6.711a17 17 0 0 1 0 4.015l-.792 6.71a12.98 12.98 0 0 0 3.355 10.327l4.585 4.963a17.2 17.2 0 0 1 2.36 3.248l3.303 5.895a12.98 12.98 0 0 0 8.784 6.382l6.627 1.32a17 17 0 0 1 3.819 1.241l6.137 2.827a12.98 12.98 0 0 0 10.858 0l6.137-2.827a17 17 0 0 1 3.82-1.241l6.626-1.32a12.98 12.98 0 0 0 8.784-6.382l3.303-5.895a17.2 17.2 0 0 1 2.36-3.248zM74.785 33.697c21.839 0 39.569 17.73 39.569 39.57 0 21.838-17.73 39.569-39.569 39.569s-39.57-17.73-39.57-39.57c0-21.838 17.731-39.569 39.57-39.569m0 4.154c-19.546 0-35.415 15.869-35.415 35.415 0 19.547 15.869 35.416 35.415 35.416 19.547 0 35.416-15.87 35.416-35.416s-15.87-35.415-35.416-35.415m41.908 59.646-2.397 2.596a13 13 0 0 0-1.788 2.461l-3.304 5.894a17.13 17.13 0 0 1-9.966 8.016l13.161 13.161 3.623-13.138a2.08 2.08 0 0 1 1.451-1.45l13.137-3.623z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgWarranty;
