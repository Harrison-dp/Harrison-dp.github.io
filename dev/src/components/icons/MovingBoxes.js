import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgMovingBoxes = (props) =>{
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
      d="m53.386 42.07-.023-.084a2.077 2.077 0 0 1 1.285-2.486L67.21 29.327a2.077 2.077 0 0 1 2.615 3.227l-5.296 4.29 15.21-4.076-6.732-1.066a2.077 2.077 0 0 1 .65-4.103l16.335 2.587a2.06 2.06 0 0 1 .984.409 2.07 2.07 0 0 1 .754 1.147l8.656 32.306 6.581-1.763a2.08 2.08 0 0 1 2.544 1.469l11.504 42.933a2.077 2.077 0 0 1-1.469 2.544l-42.933 11.504a2.077 2.077 0 0 1-2.544-1.469l-20.667-77.13zm42.99 23.054-8.129-30.335-30.335 8.128L66.04 73.25zm-29.26 12.14 10.429 38.921 38.921-10.429-10.429-38.921-6.58 1.763-6.649 1.781 8.666 32.341a2.077 2.077 0 0 1-1.469 2.544l-8.518 2.283a2.08 2.08 0 0 1-2.544-1.469l-8.666-32.341zm21.68-5.81-4.507 1.208 8.129 30.335 4.506-1.208zm-23.825 48.204L47.41 54.113l-18.217-3.727a2.078 2.078 0 0 1 .833-4.07l19.474 3.985c.77.158 1.386.738 1.59 1.498l20.17 75.274 58.101-15.569a2.08 2.08 0 0 1 2.544 1.469 2.08 2.08 0 0 1-1.469 2.544l-60.107 16.106a2.08 2.08 0 0 1-2.544-1.469l-1.738-6.484-4.783 1.282c.32 5.102-2.982 9.899-8.109 11.272-5.846 1.567-11.865-1.908-13.431-7.754-1.566-5.847 1.908-11.865 7.754-13.431 5.195-1.392 10.525 1.195 12.748 5.891zm-8.868 2.376a6.82 6.82 0 0 0-7.55-2.983 6.817 6.817 0 0 0-4.818 8.344 6.817 6.817 0 0 0 8.344 4.817 6.82 6.82 0 0 0 5.037-6.149l-5.876 1.574a2.078 2.078 0 0 1-1.075-4.012z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMovingBoxes;

