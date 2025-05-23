import * as React from "react";
import { useLayerContext } from "../../context/brandLayers.js";

const SvgAward = (props) =>{
const {layerProps}=useLayerContext()
;return(
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
      d="M42.97 52.082h-2.929c-6.643 0-12.07-5.405-12.07-12.08v-.005c0-6.67 5.427-12.08 12.07-12.08h2.93v-2.915c0-1.15.927-2.085 2.07-2.085s2.073.935 2.073 2.085v35c0 18.18 14.784 32.915 32.927 32.915 8.714 0 17.144-3.465 23.287-9.64s9.643-14.545 9.643-23.275v-35c0-1.15.927-2.085 2.07-2.085s2.073.935 2.073 2.085v2.915h2.927c6.714 0 12.073 5.41 12.073 12.08v.005c0 6.675-5.359 12.08-12.073 12.08h-2.927v7.92c0 9.835-3.859 19.265-10.859 26.22a36.8 36.8 0 0 1-19.071 10.165v16.53h17.857c1.143 0 2.073.935 2.073 2.085v17.915h7.927c1.143 0 2.073.935 2.073 2.085s-.93 2.08-2.073 2.08h-70c-1.143 0-2.07-.93-2.07-2.08s.927-2.085 2.07-2.085h7.93v-17.915a2.08 2.08 0 0 1 2.07-2.085h17.93v-16.51c-17.072-3.305-30-18.35-30-36.405zm0-20h-2.929c-4.357 0-7.927 3.545-7.927 7.915v.005c0 4.37 3.57 7.915 7.927 7.915h2.93zm40.07 64.88q-1.5.12-3 .12c-1 0-1.926-.035-2.926-.11v15.945h5.926zm34.074-64.88v15.835h2.927c4.357 0 7.929-3.545 7.929-7.915v-.005c0-4.37-3.572-7.915-7.929-7.915zm-14.143 100.835v-15.835H57.114v15.835z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgAward;
