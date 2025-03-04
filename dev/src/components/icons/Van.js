import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgVan = (props) =>{const {layerProps}=useLayerContext
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
      d="M33.18 107.168h-3.096A7.083 7.083 0 0 1 23 100.084v-50A7.083 7.083 0 0 1 30.084 43h70a7.083 7.083 0 0 1 7.082 7.084V53h2.918a7.083 7.083 0 0 1 7.082 7.084v3.014c11.22 1.05 20 10.492 20 21.986v15a7.083 7.083 0 0 1-7.082 7.084h-13.096c-.988 5.676-5.946 10-11.904 10-5.96 0-10.916-4.324-11.904-10H56.988c-.988 5.676-5.946 10-11.904 10-5.96 0-10.916-4.324-11.904-10m66.904-60h-70c-.774 0-1.516.306-2.062.854a2.9 2.9 0 0 0-.856 2.062v50c0 .774.308 1.516.856 2.062a2.9 2.9 0 0 0 2.062.854h3.096c.988-5.678 5.944-10 11.904-10 5.958 0 10.916 4.322 11.904 10H93.18c.87-5 4.82-8.95 9.82-9.82V50.084a2.917 2.917 0 0 0-2.916-2.916M62.728 87.696l-.002.004a10.35 10.35 0 0 1-7.354 3.052c-5.728 0-10.378-4.648-10.378-10.378 0-2.666 1.168-5.476 3.056-7.356 1.51-1.502 19.37-19.372 19.37-19.372a10.37 10.37 0 0 1 7.356-3.056c5.73 0 10.38 4.65 10.38 10.38 0 2.666-1.17 5.474-3.06 7.356-1.498 1.492-19.11 19.114-19.368 19.37m-2.952-2.94s17.87-17.88 19.38-19.384c1.132-1.126 1.834-2.806 1.834-4.402a6.215 6.215 0 0 0-10.62-4.382l-.002.002S52.5 74.468 50.99 75.972c-1.13 1.124-1.83 2.806-1.83 4.402a6.214 6.214 0 0 0 10.616 4.382M116.988 103h13.096a2.917 2.917 0 0 0 2.916-2.916v-15c0-9.896-8.022-17.916-17.916-17.916A2.084 2.084 0 0 1 113 65.084v-5a2.917 2.917 0 0 0-2.916-2.916h-2.918V93.18c5.002.87 8.952 4.82 9.822 9.82m-19.822 2.084c0 4.37 3.548 7.916 7.918 7.916a7.92 7.92 0 0 0 7.916-7.916 7.92 7.92 0 0 0-7.916-7.916c-4.37 0-7.918 3.546-7.918 7.916m-60 0A7.92 7.92 0 0 0 45.084 113 7.92 7.92 0 0 0 53 105.084a7.92 7.92 0 0 0-7.916-7.916 7.92 7.92 0 0 0-7.918 7.916"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgVan;
