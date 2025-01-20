import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgFloorPlanning = (props) =>{const {layerProps}=useLayerContext
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
      d="M22.846 99.84a2.065 2.065 0 0 1 1.087-1.825l9.969-5.407a2.08 2.08 0 0 1 2.816.835 2.08 2.08 0 0 1-.836 2.817l-6.602 3.58 6.602 3.581a2.08 2.08 0 0 1 .836 2.816 2.08 2.08 0 0 1-2.816.835l-9.97-5.406a2.07 2.07 0 0 1-.835-.836 2.07 2.07 0 0 1-.251-.99m107.381 0-6.602-3.58a2.08 2.08 0 0 1-.836-2.817 2.08 2.08 0 0 1 2.816-.835l9.969 5.407a2.068 2.068 0 0 1 .836 2.815 2.06 2.06 0 0 1-.836.836l-9.969 5.406a2.08 2.08 0 0 1-2.816-.835 2.08 2.08 0 0 1 .836-2.816zM78.763 131.4l-4.984-2.703a2.08 2.08 0 0 1-.836-2.816 2.08 2.08 0 0 1 2.816-.835l3.994 2.166 3.995-2.166a2.08 2.08 0 0 1 2.816.835 2.08 2.08 0 0 1-.836 2.816l-4.984 2.703a2.07 2.07 0 0 1-1.98 0M22.846 80.074a2.068 2.068 0 0 1 1.082-1.823l17.17-9.366V50.166a2.07 2.07 0 0 1 1.083-1.823L78.76 28.39c.316-.172.658-.254.994-.253.337 0 .679.08.995.253l36.578 19.952.066.037a2.07 2.07 0 0 1 1.016 1.786v18.727l17.17 9.357a2.076 2.076 0 0 1 .001 3.647l-54.831 29.908c-.62.338-1.37.338-1.99 0l-54.83-29.908a2.07 2.07 0 0 1-1.082-1.823m20.33-7.59-13.916 7.59 50.493 27.542 50.492-27.542-13.921-7.586-8.801 4.8a2.08 2.08 0 0 1-2.005-.008L79.744 62.933l-26.052 14.21c-.699.38-1.52.319-2.14-.09zm4.337-22.318 5.192 2.832 26.054-14.211a2.06 2.06 0 0 1 1.003-.254c.34.001.684.086 1.001.262l25.775 14.347 5.456-2.976-32.24-17.586zm7.26 6.435v15.22L77.678 59.33V44.11zm49.678 15.331V56.735l-22.62-12.592v15.198zM50.62 56.592l-5.367-2.928v15.22l5.367 2.929zm57.985.154v15.22l5.649-3.081v-15.22zm-7.244 27.44a2.077 2.077 0 0 1 1.98-3.652l4.647 2.52a2.08 2.08 0 0 1 .836 2.816 2.08 2.08 0 0 1-2.816.836zM79.753 72.467l-3.994 2.167a2.08 2.08 0 0 1-2.816-.836 2.08 2.08 0 0 1 .836-2.816l4.984-2.703a2.07 2.07 0 0 1 1.98 0l4.985 2.703a2.08 2.08 0 0 1 .836 2.816 2.08 2.08 0 0 1-2.816.836zm-23.587 8.067a2.077 2.077 0 0 1 1.98 3.652l-4.647 2.52a2.078 2.078 0 0 1-1.98-3.652zm1.98 34.961a2.078 2.078 0 0 1-1.98 3.651l-4.647-2.52a2.078 2.078 0 0 1 1.98-3.651zm45.195 3.651a2.076 2.076 0 1 1-1.98-3.651l4.647-2.52a2.08 2.08 0 0 1 2.816.835 2.08 2.08 0 0 1-.836 2.816z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgFloorPlanning;
