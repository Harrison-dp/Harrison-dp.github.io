import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgCoffeeTable = (props) =>{const {layerProps}=useLayerContext
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
      d="M32.854 50.875c0-3.203 2.028-6.356 5.993-9.021 7.652-5.252 23.233-8.942 41.12-8.942s33.376 3.69 41.121 8.942c3.965 2.665 5.9 5.819 5.9 9.02v11.432a1.78 1.78 0 0 1-.552 1.591c-.646.674-1.476 1.367-2.49 2.06v43.149c0 1.152-.922 2.09-2.12 2.09-1.107 0-2.121-.938-2.121-2.09v-8.59c-6.362 3.983-18.993 7.946-37.71 8.219v16.254c0 1.152-.922 2.09-2.028 2.09-1.199 0-2.12-.938-2.12-2.09v-16.254c-18.717-.283-31.44-4.295-37.802-8.297v8.668c0 1.152-.922 2.09-2.12 2.09-1.107 0-2.03-.938-2.03-2.09V65.869c-1.013-.664-1.843-1.327-2.396-1.972-.46-.44-.646-1.025-.646-1.59V50.874m89.985 0c0-1.27-.645-2.45-1.659-3.593-1.383-1.416-3.319-2.724-5.808-3.905-8.022-3.846-20.93-6.306-35.405-6.306-14.568 0-27.475 2.46-35.404 6.306-2.49 1.181-4.425 2.49-5.808 3.905-1.107 1.142-1.753 2.324-1.753 3.593 0 1.259.646 2.45 1.753 3.582 1.383 1.425 3.319 2.733 5.808 3.915 7.93 3.846 20.836 6.296 35.404 6.296 14.475 0 27.383-2.45 35.405-6.296 2.489-1.182 4.425-2.49 5.808-3.915 1.014-1.132 1.659-2.323 1.659-3.582m0 10.66v-2.987c-.553.458-1.105.907-1.751 1.347-7.745 5.252-23.234 8.942-41.121 8.942s-33.468-3.69-41.12-8.942c-.646-.44-1.291-.889-1.845-1.347v2.987c1.937 1.679 5.072 3.397 9.405 4.94 7.745 2.723 18.992 4.803 33.56 4.803 14.567 0 25.816-2.08 33.469-4.803 4.333-1.543 7.559-3.261 9.403-4.94m-3.134 6.785c-3.319 1.6-7.56 3.104-12.816 4.324 4.702 1.357 8.575 3.065 11.249 4.969.645.4 1.106.81 1.567 1.23zm-23.51 6.189c-4.334.517-9.036.85-14.2.918v23.048c12.54-.215 23.604-2.42 30.519-5.77q3.457-1.625 5.255-3.572c1.014-1.015 1.567-2.07 1.567-3.203 0-1.806-1.383-3.387-3.503-4.89-4.149-2.85-10.972-5.086-19.177-6.404-.185-.03-.37-.069-.462-.127m23.51 20.832v-2.313c-.461.468-1.107.917-1.752 1.357-6.823 4.647-20.284 7.985-35.958 8.259v1.923c12.447-.186 22.128-2.021 28.767-4.403 4.241-1.504 7.284-3.192 8.943-4.823m-79.66-.126c1.66 1.669 4.702 3.406 9.035 4.949 6.73 2.382 16.412 4.217 28.767 4.403v-1.923c-15.674-.274-29.135-3.612-35.958-8.26-.646-.478-1.29-.966-1.844-1.473zm0-26.954v10.7c.46-.46 1.106-.909 1.66-1.348 2.765-1.904 6.638-3.612 11.248-4.969-5.256-1.23-9.589-2.762-12.908-4.383m37.802 7.166c-5.071-.069-9.866-.4-14.107-.918-.184.058-.276.097-.46.127-8.299 1.318-15.03 3.553-19.178 6.404-2.12 1.503-3.596 3.084-3.596 4.89 0 1.133.645 2.188 1.567 3.203q1.937 1.948 5.256 3.573c7.007 3.348 18.07 5.554 30.518 5.77z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgCoffeeTable;
