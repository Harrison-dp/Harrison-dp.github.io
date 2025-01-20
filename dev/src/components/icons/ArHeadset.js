import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgArHeadset = (props) =>{const {layerProps}=useLayerContext
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
      d="M30.288 95.014h-.181c-1.998 0-3.815-.74-5.087-2.067a7.26 7.26 0 0 1-1.997-5.004V77.935c0-1.871.726-3.677 1.997-5.004s3.09-2.067 5.087-2.067c1.634-4.547 4.357-8.484 7.626-11.443 3.995-4.155 9.082-6.831 15.075-8.506 8.354-2.393 18.342-2.72 27.241-2.72s18.706.327 27.242 2.72c5.811 1.675 11.076 4.351 14.89 8.506 3.451 2.96 5.995 6.896 7.811 11.443 1.997 0 3.633.74 5.086 2.067a7.26 7.26 0 0 1 1.997 5.004v10.008a7.26 7.26 0 0 1-1.997 5.004c-1.453 1.327-3.089 2.067-5.086 2.067h-.181c-3.996 10.072-12.714 16.99-22.52 16.99-8.9 0-16.889-1.609-21.247-9.92v-.087c-1.272-2.48-3.452-4.243-5.995-4.243-2.542 0-4.723 1.763-5.994 4.243v.087c-4.54 8.311-12.348 9.92-21.247 9.92-9.989 0-18.525-6.918-22.52-16.99M28.837 75.28c-.363.152-.545.35-.908.588-.545.566-.908 1.304-.908 2.066v10.008c0 .762.363 1.523.908 2.067.363.261.545.48.908.631-.545-2.523-.908-5.179-.908-7.92 0-2.567.363-5.047.908-7.44m11.805-12.813c-3.088 2.785-5.631 6.59-7.084 11.028v.175c-.908 2.806-1.454 5.874-1.454 9.05 0 3.329.545 6.505 1.635 9.42v.283c3.087 9.007 10.352 15.403 19.069 15.403 7.264 0 13.801-.915 17.434-7.68 1.997-3.982 5.63-6.57 9.807-6.57s7.81 2.588 9.627 6.57c3.632 6.765 10.35 7.68 17.615 7.68 8.535 0 15.981-6.396 19.068-15.403v-.283a31.7 31.7 0 0 0 1.455-9.42c0-3.176-.366-6.244-1.274-9.05 0-.066.001-.131-.181-.175-1.271-4.438-3.815-8.243-6.902-11.028 0-.044-.181-.11-.181-.153-4.177-4.59-10.352-7.027-17.253-8.354-7.082-1.392-14.891-1.589-21.974-1.589-7.264 0-15.072.197-22.155 1.59-6.72 1.326-12.894 3.763-17.071 8.353-.182.044-.181.11-.181.153M131.08 90.64a5.7 5.7 0 0 0 1.089-.63c.544-.544.727-1.306.727-2.068V77.935c0-.762-.183-1.5-.727-2.065-.364-.24-.545-.437-.909-.589.545 2.393.728 4.873.728 7.44 0 2.741-.182 5.397-.908 7.92M45.725 68.733c-3.27 2.98-5.449 7.767-5.449 13.14 0 1.153-.907 2.089-1.997 2.089-1.271 0-2.178-.936-2.178-2.088 0-6.614 2.722-12.489 6.9-16.187 2.542-2.872 6.176-4.743 10.353-5.896 5.63-1.632 12.348-1.848 18.523-1.848 1.09 0 1.997.935 1.997 2.088 0 1.131-.907 2.067-1.997 2.067-4.722 0-9.988.13-14.71 1.065-4.54.87-8.537 2.437-11.262 5.417 0 .066.001.11-.18.153m62.112 35.788c-1.271 0-2.182-.935-2.182-2.088s.911-2.089 2.182-2.089c7.627 0 13.62-7.616 13.62-16.796 0-1.153.908-2.089 1.997-2.089 1.272 0 2.178.936 2.178 2.089 0 11.66-8.17 20.973-17.795 20.973"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgArHeadset;
