import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgBedsideTable = (props) =>{const {layerProps}=useLayerContext
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
      d="M47.906 67.096H45.39c-1.854 0-3.71-.751-5.034-2.071-1.325-1.333-1.987-3.132-1.987-5.008v-30.01c0-1.877.662-3.676 1.987-5.01a7.2 7.2 0 0 1 5.034-2.07h69.272c1.855 0 3.577.75 4.901 2.07 1.325 1.334 2.119 3.133 2.119 5.01v30.01c0 1.876-.794 3.675-2.119 5.008-1.324 1.32-3.046 2.07-4.901 2.07h-3.841l5.96 67.734c0 .583-.265 1.165-.662 1.592-.265.427-.927.673-1.457.673h-9.934c-1.059 0-1.986-.828-1.986-1.902l-1.59-17.51h-43.71l-1.456 17.51c-.132 1.074-1.06 1.902-2.12 1.902h-9.934c-.53 0-1.059-.246-1.456-.673s-.663-1.009-.53-1.592zm-2.516-4.168h69.272c.663 0 1.457-.31 1.987-.853.53-.544.928-1.295.928-2.058v-30.01c0-.764-.398-1.515-.928-2.058-.53-.544-1.324-.855-1.987-.855H45.39c-.795 0-1.458.311-2.12.855-.53.543-.794 1.294-.794 2.057v30.01c0 .764.264 1.515.794 2.059.662.543 1.325.853 2.12.853m6.623 4.168-5.697 65.831h5.697s1.456-17.522 1.456-17.535l4.239-48.296zm9.934 0-4.107 46.42h42.915l-3.974-46.42zm38.94 0s4.239 48.335 4.239 48.348l1.589 17.483h5.695l-5.828-65.831zM79.96 37.926c3.973 0 7.153 3.17 7.153 7.092 0 3.908-3.18 7.08-7.153 7.08-3.841 0-7.02-3.172-7.02-7.08 0-3.921 3.178-7.092 7.02-7.092m0 4.168a2.93 2.93 0 0 0-2.915 2.924 2.93 2.93 0 0 0 2.915 2.912 2.93 2.93 0 0 0 2.914-2.912 2.93 2.93 0 0 0-2.914-2.924"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgBedsideTable;
