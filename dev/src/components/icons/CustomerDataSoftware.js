import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgCustomerDataSoftware = (props) =>{const {layerProps}=useLayerContext
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
      d="M67.879 107.085H29.98c-1.9 0-3.7-.747-5-2.072-1.3-1.332-2.101-3.136-2.101-5.013V45.003c0-1.877.801-3.681 2.101-5.006 1.3-1.332 3.1-2.08 5-2.08h100c1.9 0 3.7.748 5 2.08 1.4 1.325 2.1 3.129 2.1 5.006V100c0 1.877-.7 3.681-2.1 5.013a7 7 0 0 1-5 2.072h-37.9v10.831h12.9c1.2 0 2.1.934 2.1 2.088 0 1.146-.9 2.08-2.1 2.08h-50c-1.1 0-2.101-.934-2.101-2.08 0-1.154 1.001-2.088 2.101-2.088H67.88zm-37.899-4.168h100c.8 0 1.5-.309 2.1-.853.5-.544.799-1.284.799-2.064V45.003c0-.772-.299-1.512-.799-2.064-.6-.545-1.3-.854-2.1-.854h-100c-.8 0-1.5.31-2 .854a2.77 2.77 0 0 0-.9 2.064V100c0 .78.3 1.52.9 2.064.5.544 1.2.853 2 .853m57.899 14.999v-10.831H72.08v10.831zM42.08 88.382c0 1.145-.9 2.08-2.1 2.08-1.1 0-2.101-.935-2.101-2.08 0-6.671 5.401-12.082 12.101-12.082s12.1 5.411 12.1 12.082c0 1.145-.9 2.08-2.1 2.08-1.1 0-2.101-.935-2.101-2.08 0-4.372-3.499-7.922-7.899-7.922s-7.9 3.55-7.9 7.922m29.1 5.037c-1 .642-2.3.39-2.9-.569-.7-.958-.401-2.25.599-2.892l7.9-5.33c1.8-1.21 4.101-1.52 6.201-.837l4.7 1.576c1.1.35 2.2.073 3-.707l5.6-5.622c2-1.91 4.8-2.567 7.3-1.706l2.699.91c1.4.487 3-.22 3.6-1.617l8.201-19.126c.5-1.065 1.699-1.553 2.699-1.098 1.1.447 1.6 1.674 1.1 2.73l-8.2 19.127c-1.4 3.404-5.199 5.11-8.699 3.924l-2.701-.902c-1.1-.35-2.2-.08-3 .7l-5.6 5.63c-1.9 1.893-4.7 2.551-7.3 1.714l-4.7-1.576c-.9-.285-1.8-.154-2.6.35zm8.8-49.66c1.2 0 2.1.943 2.1 2.096 0 1.162-.9 2.105-2.1 2.105-1.1 0-2.101-.943-2.101-2.105 0-1.153 1.001-2.096 2.101-2.096m-30 15.787c3.9 0 7.1 3.169 7.1 7.077 0 3.916-3.2 7.085-7.1 7.085s-7.101-3.17-7.101-7.085c0-3.909 3.201-7.077 7.101-7.077m0 4.168c-1.6 0-2.9 1.3-2.9 2.909 0 1.617 1.3 2.916 2.9 2.916s2.899-1.3 2.899-2.916a2.903 2.903 0 0 0-2.899-2.91"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgCustomerDataSoftware;
