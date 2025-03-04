import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgChair = (props) =>{const {layerProps}=useLayerContext
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
      d="M51.94 96.744a7.06 7.06 0 0 1-4.92-6.75v-2c0-5.91 4.2-10.9 9.96-11.9v-20.95a12.23 12.23 0 0 1-5.4-8.16l-2.64-15.82c-.24-2.06.24-4.16 1.68-5.75 1.32-1.59 3.24-2.5 5.4-2.5h48.12c2.16 0 4.08.91 5.4 2.5 1.44 1.59 1.92 3.69 1.56 5.75l-2.64 15.82c-.48 3.46-2.521 6.37-5.281 8.16v20.92c5.64 1 9.961 5.97 9.961 11.86v2.07c0 3.16-2.041 5.83-4.921 6.75l1.921 38.15c0 .57-.12 1.12-.6 1.54-.36.41-.84.64-1.44.64h-6c-1.08 0-2.04-.81-2.16-1.87l-3.72-38.13H63.94l-3.84 38.13c-.12 1.06-.96 1.87-2.04 1.87h-6c-.6 0-1.08-.23-1.44-.64-.48-.42-.6-.97-.6-1.54zm9.24-21.03c.6-.05 1.2-.09 1.8-.13v-18.52c-.6-.03-1.2-.1-1.8-.22zm6-.37a264 264 0 0 1 25.8-.04v-18.23h-25.8zm30 .2c.6.04 1.2.09 1.8.13v-18.83c-.6.12-1.2.19-1.8.22zm8.88 17.37c1.68 0 2.88-1.31 2.88-2.92v-2.04c0-4.07-3-7.47-7.08-7.87-14.28-1.25-29.16-1.19-43.56.03-4.08.38-7.2 3.79-7.2 7.88v2c0 1.61 1.32 2.92 3 2.92h51.96m-42.48-40h33c3.839 0 7.199-2.8 7.799-6.62l2.64-15.82a3.25 3.25 0 0 0-.6-2.36c-.6-.66-1.439-1.04-2.279-1.04H56.02c-.96 0-1.68.38-2.28 1.04-.6.65-.84 1.51-.6 2.36l2.64 15.82c.6 3.82 3.84 6.62 7.8 6.62m36.839 44.16c.72 8.24 3.481 35.84 3.481 35.84h2.04l-1.8-35.84zm-44.4 0-1.8 35.84h1.921l3.6-35.84z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgChair;
