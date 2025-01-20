import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgWipeClean = (props) =>{const {layerProps}=useLayerContext
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
      d="M79.984 22.91c31.51 0 57.09 25.58 57.09 57.08 0 31.51-25.58 57.09-57.09 57.09-31.5 0-57.08-25.58-57.08-57.09 0-31.5 25.58-57.08 57.08-57.08m50.6 72.6c1.51-4.9 2.32-10.12 2.32-15.52 0-29.2-23.71-52.91-52.92-52.91-29.2 0-52.91 23.71-52.91 52.91 0 29.21 23.71 52.92 52.91 52.92 3.55 0 7.02-.351 10.38-1.021l-6.9-6.889c-.47.74-.84 1.46-1.68 2.87a2.095 2.095 0 0 1-2.88.72c-12.02-7.25-18.04-15.63-24.03-24.01-5.69-7.97-11.35-15.95-22.76-22.78a2.11 2.11 0 0 1-1.01-1.8c0-.37.09-.74.3-1.08 7.25-12.03 15.63-18.05 24.01-24.04 7.97-5.69 15.95-11.35 22.78-22.75.09-.16.2-.29.32-.41.66-.67 1.72-.82 2.55-.32 12.18 7.34 18.2 15.83 24.26 24.33 5.62 7.86 11.28 15.73 22.53 22.47.66.39 1.02 1.08 1.02 1.8 0 .36-.1.74-.3 1.08-1.23 2.03-3.54 5-5.25 7.17zm-35.5 35.21c15.45-4.6 27.96-16.07 33.96-30.86l-9.96-9.96c-.02-.01-.03-.03-.04-.04l-13.5-13.5a2.92 2.92 0 0 0-4.13 0 2.94 2.94 0 0 0 0 4.13l17.68 17.67c.81.82.81 2.14 0 2.95s-2.13.81-2.94 0l-24.75-24.75a2.921 2.921 0 0 0-4.13 4.13l24.75 24.74c.81.82.81 2.14 0 2.95s-2.13.81-2.95 0l-24.74-24.75a2.921 2.921 0 0 0-4.13 4.13l24.75 24.75c.81.81.81 2.13 0 2.94s-2.13.81-2.95 0l-21.21-21.21a2.91 2.91 0 0 0-4.12 0 2.91 2.91 0 0 0 0 4.12l21.21 21.22c.81.81.81 2.13 0 2.94-.81.82-2.13.82-2.95 0l-5.3-5.3a5.4 5.4 0 0 0-3.83-1.59c-1.44 0-2.81.57-3.83 1.59a.4.4 0 0 0-.12.29q0 .18.12.3l2.7 2.7.03.03zm-15.81-6.81c.43-.74.74-1.27 1.19-1.92l-1.44-1.44a4.55 4.55 0 0 1-1.34-3.24c0-1.21.48-2.38 1.34-3.24a9.6 9.6 0 0 1 5.02-2.64l-10.32-10.32a7.08 7.08 0 0 1 0-10.02c.77-.77 1.68-1.33 2.65-1.67a7.07 7.07 0 0 1 .89-8.93 7.02 7.02 0 0 1 4.99-2.08c0-1.81.7-3.62 2.08-4.99a7.07 7.07 0 0 1 10.01 0l2.51 2.5c.34-.91.88-1.77 1.62-2.5 2.76-2.77 7.25-2.77 10.02 0l11.86 11.86c1.13-1.42 2.46-3.14 3.53-4.65-10.66-6.83-16.35-14.63-21.95-22.48-5.47-7.66-10.86-15.36-21.27-22.09-6.93 10.83-14.86 16.53-22.82 22.21-7.56 5.4-15.15 10.78-21.79 21.06 10.83 6.94 16.53 14.86 22.21 22.82 5.39 7.55 10.76 15.13 21.01 21.76"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgWipeClean;
