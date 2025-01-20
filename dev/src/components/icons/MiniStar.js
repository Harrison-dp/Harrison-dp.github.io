import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgMiniStar = (props) =>{const {layerProps}=useLayerContext
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
      d="m77.66 54.895.283-.71.426-.71.853-.425.852-.142.852.142.71.425.568.71.284.71v.285c.568 7.952 2.13 13.206 5.538 16.756 3.55 3.55 8.946 4.97 16.898 5.68h.143l.852.284.568.569.426.71.141.852-.141.851-.426.71-.568.569-.852.284h-.143c-7.952.71-13.347 2.13-16.898 5.68-3.408 3.408-4.97 8.804-5.538 16.756v.142l-.284.853-.568.71-.71.425-.853.142-.851-.142-.853-.425-.426-.71-.284-.853-.141-.142c-.568-7.952-2.131-13.348-5.54-16.756-3.55-3.55-8.803-4.97-16.755-5.68h-.285l-.851-.284-.569-.569-.425-.71-.142-.852.142-.851.425-.71.569-.569.851-.284h.285c7.952-.71 13.206-2.13 16.756-5.68 3.408-3.55 4.97-8.804 5.539-16.756 0-.142.141-.143.141-.285M65.731 80.031c3.834 1.135 6.815 2.839 9.087 5.111 2.414 2.272 4.118 5.396 5.254 9.23 1.137-3.834 2.7-6.958 5.114-9.23 2.272-2.272 5.254-3.975 9.23-5.111-3.976-1.137-6.959-2.84-9.23-5.112-2.415-2.414-3.977-5.396-5.114-9.23-1.136 3.834-2.84 6.816-5.254 9.23-2.272 2.272-5.253 3.975-9.087 5.112"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMiniStar;
