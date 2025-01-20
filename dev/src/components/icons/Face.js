import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgFace = (props) =>{const {layerProps}=useLayerContext
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
      d="M47.974 97.391c-2.908-.6-5.239-2.9-5.74-5.9l-3.126-18.7c-.39-2.4.27-4.8 1.806-6.6.576-.7 1.254-1.2 2.001-1.7v-9.5c0-17.7 14.376-32.1 32.084-32.1 6.393 0 12.352 1.9 17.354 5.1 13.847 1.2 24.729 12.9 24.729 27v9.5c.747.5 1.425 1 2.002 1.7 1.535 1.8 2.196 4.2 1.805 6.6l-3.125 18.7c-.502 3-2.833 5.3-5.742 5.9-.476 7.8-3.783 15.2-9.337 20.7-6.017 6-14.177 9.4-22.686 9.4-17.062 0-31.014-13.3-32.025-30.1m-.892-34.1H50c6.7 0 12.574-4.7 17.311-9.5.43-.4 1.025-.6 1.63-.6.605.1 1.161.4 1.521.9 4.778 6.4 11.675 12.5 24.282 12.5 6.701 0 9.067 0 14.225-3 .311-.2.664-.3 1.031-.3h2.916v-8.3c0-12.1-9.453-22.1-21.392-22.9-.365 0-.718-.1-1.022-.3-4.436-3-9.768-4.7-15.502-4.7-15.408 0-27.917 12.5-27.917 27.9zm.833 4.2h-.834a3.86 3.86 0 0 0-2.988 1.4c-.744.9-1.064 2-.875 3.2l3.125 18.7c.16 1 .76 1.8 1.572 2.2zm64.167 25.5c.812-.4 1.412-1.2 1.572-2.2l3.125-18.7c.189-1.2-.131-2.3-.875-3.2-.433-.5-.985-.9-1.598-1.1-.02 0-.04 0-.06-.1-.422-.1-.871-.2-1.33-.2h-.834zm-60 2.4c0 15.4 12.5 27.9 27.917 27.9 7.403 0 14.504-2.9 19.74-8.1 5.235-5.3 8.176-12.4 8.176-19.8v-26.6c-4.02 1.9-6.968 2-13.172 2-13.112 0-20.808-5.8-26.185-12.4-4.687 4.4-10.3 8.3-16.476 9zm17.41 14.6c-1.096-.4-1.7-1.6-1.349-2.7a2.017 2.017 0 0 1 2.62-1.3c6.16 2 12.32 1.9 18.481 0 1.096-.4 2.267.2 2.613 1.3s-.264 2.3-1.36 2.7q-10.503 3.3-21.006 0m-8.827-38.1c-1.095.4-2.269-.2-2.62-1.3-.353-1.1.251-2.3 1.345-2.6 5.744-1.9 11.173-1.8 16.31 0 1.917.6 3.088 2.2 3.501 4.7.633 3.8-.74 10.4-1.36 17.5-.063.8.213 1.6.764 2.2s1.326.9 2.14.9h3.236c1.15 0 2.084 1 2.084 2.1 0 1.2-.934 2.1-2.084 2.1h-3.237c-1.976 0-3.86-.8-5.2-2.3-1.34-1.4-2.013-3.4-1.856-5.3l.001-.1c.507-5.8 1.605-11.2 1.523-15-.018-.8-.087-1.5-.263-2-.118-.4-.249-.8-.592-.9-4.312-1.4-8.87-1.5-13.692 0m6.69.7c1.158 0 2.1.9 2.1 2.1 0 1.1-.942 2.1-2.1 2.1-1.16 0-2.1-1-2.1-2.1 0-1.2.94-2.1 2.1-2.1m25.288 0c1.16 0 2.1.9 2.1 2.1 0 1.1-.94 2.1-2.1 2.1-1.159 0-2.1-1-2.1-2.1 0-1.2.941-2.1 2.1-2.1"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgFace;
