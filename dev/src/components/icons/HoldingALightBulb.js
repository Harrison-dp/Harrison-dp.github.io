import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgHoldingALightBulb = (props) =>{const {layerProps}=useLayerContext
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
      d="M67.916 78v-3.76c-8.89-4.443-15-13.634-15-24.24 0-14.948 12.14-27.084 27.09-27.084 14.94 0 27.08 12.136 27.08 27.084 0 10.606-6.11 19.797-15 24.24v8.26a4.58 4.58 0 0 1-3.34 4.413l-.9 4.482a7.09 7.09 0 0 1-6.95 5.688h-1.8a7.086 7.086 0 0 1-6.95-5.7l-.89-4.471a4.59 4.59 0 0 1-3.34-4.412zm20-2.084v-3c0-.827.49-1.577 1.25-1.908 8.09-3.54 13.75-11.618 13.75-21.008 0-12.648-10.26-22.917-22.91-22.917S57.086 37.352 57.086 50c0 9.39 5.66 17.468 13.75 21.008a2.08 2.08 0 0 1 1.25 1.908v3h5.83V65.863l-9.5-9.503a2.09 2.09 0 0 1 0-2.946 2.09 2.09 0 0 1 2.95 0l8.64 8.642 8.64-8.642a2.077 2.077 0 0 1 2.94 0c.82.813.82 2.133 0 2.946l-9.5 9.503v10.053zm-.88 7h.47a.41.41 0 0 0 .41-.416v-2.417h-15.83V82.5c0 .23.19.416.42.416h14.53m-11.49 4.167.69 3.486a2.915 2.915 0 0 0 2.86 2.347h1.8c1.39 0 2.59-.98 2.86-2.342l.7-3.491z"
      clipRule="evenodd"
    />
    <path
      fill={layerProps?props.Inactive?layerProps.Accent:layerProps.Title:'#494444'}
      fillRule="evenodd"
      d="M95.402 110.003v-.008a2.913 2.913 0 0 0-2.914-2.912c-12.56 0-26.43-5-36.004-5-3.164 0-6.43 1.638-8.332 4.168a2 2 0 0 1-.192.222l-10.702 10.702 14.256 14.848 8.498-8.496c.39-.392.92-.61 1.472-.61l34.772-.012c2.802 0 5.49-1.114 7.472-3.094l21.758-21.758a2.913 2.913 0 0 0-.006-4.126 2.913 2.913 0 0 0-4.12 0q-.044.045-.09.086l-25.3 22.426-.79.478-.908.166H73.566a2.083 2.083 0 0 1 0-4.166h18.922a2.916 2.916 0 0 0 2.914-2.914m19.864-16.236c1.944-1.724 3.194-2.831 3.194-2.83a7.08 7.08 0 0 1 9.966.044l.006.007a7.08 7.08 0 0 1 0 10.011l-21.758 21.758a14.74 14.74 0 0 1-10.416 4.316l-33.91.01-9.39 9.39a2.08 2.08 0 0 1-2.976-.03L32.84 118.587a2.083 2.083 0 0 1 .03-2.916l12.035-12.036.01-.01c2.674-3.47 7.192-5.707 11.57-5.707 2.156 0 4.53.251 7.058.645 2.106.328 2.892.486 4.434.782 7.706 1.478 16.384 3.572 24.512 3.572a7.08 7.08 0 0 1 6.78 5.032c3.892-3.452 8.94-7.926 12.88-11.418z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgHoldingALightBulb;
