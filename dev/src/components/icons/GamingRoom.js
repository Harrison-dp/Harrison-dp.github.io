import * as React from "react";
const SvgGamingRoom = (props) =>{const {layerProps}=useLayerConstext();return(
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
      d="M63.88 112.688h17.868a7.063 7.063 0 0 1 7.061 7.061v9.97a7.06 7.06 0 0 1-7.061 7.061H31.9a7.063 7.063 0 0 1-7.061-7.061v-9.97a7.063 7.063 0 0 1 7.061-7.061h5.4v-.855a7.06 7.06 0 0 1 7.062-7.061h4.984q.203 0 .405.011l-.03-7.88h-11.84a7.06 7.06 0 0 1-7.06-7.061V30.026c0-3.9 3.16-7.061 7.06-7.061h89.724c3.9 0 7.062 3.162 7.062 7.061v59.816c0 3.9-3.162 7.061-7.062 7.061H63.833zm-9.548 4.154h-22.43a2.91 2.91 0 0 0-2.908 2.907v9.97a2.91 2.91 0 0 0 2.907 2.907h49.847a2.91 2.91 0 0 0 2.907-2.907v-9.97a2.91 2.91 0 0 0-2.907-2.907H54.333m-3.532-7.528a2.9 2.9 0 0 0-1.453-.389h-4.984a2.91 2.91 0 0 0-2.908 2.908v.855h10.8v-.855a2.91 2.91 0 0 0-1.449-2.516zm3.068-14.039.044 11.17q.221.188.429.395a7.06 7.06 0 0 1 2.068 4.993v.855h3.317l-.07-23.886q-1.383.232-2.831.234-1.528-.002-2.983-.26l.023 5.586a2.1 2.1 0 0 1 .003.913m9.953-2.526h63.785a2.91 2.91 0 0 0 2.908-2.907V30.026a2.91 2.91 0 0 0-2.908-2.907H37.883a2.91 2.91 0 0 0-2.908 2.907v59.816a2.907 2.907 0 0 0 2.908 2.907h11.822l-.021-5.28c-5.837-2.702-9.89-8.614-9.89-15.463 0-9.4 7.631-17.031 17.03-17.031s17.031 7.631 17.031 17.03c0 6.913-4.127 12.87-10.05 15.537zm-2.78-8.574.005-.001c5.036-1.75 8.655-6.54 8.655-12.169 0-7.107-5.77-12.876-12.876-12.876-7.108 0-12.878 5.77-12.878 12.877 0 7.106 5.77 12.876 12.877 12.876 1.477 0 2.896-.249 4.217-.707"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgGamingRoom;
