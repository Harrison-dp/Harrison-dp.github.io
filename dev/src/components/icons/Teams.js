import * as React from "react";
const SvgTeams = (props) =>{const {layerProps}=useLayerConstext();return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={160}
    height={160}
    fill="none"
    {...props}
  >
    <path
      fill={layerProps.Title}
      fillRule="evenodd"
      d="M67.879 107.085H29.98c-1.9 0-3.7-.747-5-2.072-1.3-1.332-2.101-3.136-2.101-5.013V45.003c0-1.877.801-3.681 2.101-5.006 1.3-1.332 3.1-2.08 5-2.08h100c1.9 0 3.7.748 5 2.08 1.4 1.325 2.1 3.129 2.1 5.006V100c0 1.877-.7 3.681-2.1 5.013a7 7 0 0 1-5 2.072h-37.9v10.831h12.9c1.2 0 2.1.934 2.1 2.088 0 1.146-.9 2.08-2.1 2.08h-50c-1.1 0-2.101-.934-2.101-2.08 0-1.154 1.001-2.088 2.101-2.088H67.88zm-5.799-4.168h35.799c-.5-9.393-8.399-16.843-17.899-16.843s-17.3 7.45-17.9 16.843m40 0h27.9c.8 0 1.5-.309 2.1-.853.5-.544.799-1.284.799-2.064V45.003c0-.772-.299-1.512-.799-2.064-.6-.545-1.3-.854-2.1-.854h-100c-.8 0-1.5.31-2 .854a2.77 2.77 0 0 0-.9 2.064V100c0 .78.3 1.52.9 2.064.5.544 1.2.853 2 .853H57.88c.6-11.692 10.301-21.01 22.101-21.01s21.5 9.318 22.1 21.01m-14.201 14.999v-10.831H72.08v10.831zM79.98 43.759c1.2 0 2.1.943 2.1 2.096 0 1.162-.9 2.105-2.1 2.105-1.1 0-2.101-.943-2.101-2.105 0-1.153 1.001-2.096 2.101-2.096m0 10.164c6.7 0 12.1 5.412 12.1 12.082s-5.4 12.082-12.1 12.082S67.88 72.676 67.88 66.005c0-6.67 5.401-12.082 12.101-12.082m0 4.168c-4.4 0-7.9 3.543-7.9 7.914 0 4.372 3.5 7.922 7.9 7.922s7.899-3.55 7.899-7.922a7.88 7.88 0 0 0-7.899-7.914"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgTeams;
