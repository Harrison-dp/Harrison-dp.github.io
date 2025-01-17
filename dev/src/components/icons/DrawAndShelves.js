import * as React from "react";
const SvgDrawAndShelves = (props) =>{const {layerProps}=useLayerConstext();return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={160}
    height={160}
    fill="none"
    {...props}
  >
    <path
      fill="#ACCE00"
      fillRule="evenodd"
      d="M92.758 134.73V25.068c0-1.147.93-2.077 2.077-2.077h39.81a2.078 2.078 0 0 1 0 4.154h-35.74v5.815h35.74a2.078 2.078 0 0 1 0 4.154h-35.74v2.908a2.08 2.08 0 0 1-1.993 2.076v35.724h37.733a2.078 2.078 0 0 1 0 4.154h-35.74v5.815h35.74a2.078 2.078 0 0 1 0 4.154h-35.74v2.908a2.08 2.08 0 0 1-1.993 2.075V117.7h5.815v-2.908c0-1.147.93-2.077 2.077-2.077h29.908a2.078 2.078 0 0 1 0 4.154h-27.831v.831h27.831c1.146 0 2.077.931 2.077 2.077a2.08 2.08 0 0 1-2.077 2.077h-27.831v.831h27.831c1.146 0 2.077.931 2.077 2.076a2.08 2.08 0 0 1-2.077 2.077h-29.908a2.076 2.076 0 0 1-2.077-2.077v-2.907h-5.815v10.8h37.733c1.146 0 2.077.931 2.077 2.077a2.08 2.08 0 0 1-2.077 2.077h-39.81a2.077 2.077 0 0 1-2.077-2.077M60.856 27.145H24.983a2.078 2.078 0 0 1 0-4.154h39.944c1.147 0 2.077.93 2.077 2.077V134.73c0 1.147-.93 2.077-2.077 2.077H24.983a2.078 2.078 0 0 1 0-4.154H62.85v-10.8h-5.815v2.907c0 1.148-.93 2.077-2.077 2.077H24.983a2.077 2.077 0 0 1 0-4.153h27.898v-.831H24.983a2.078 2.078 0 0 1 0-4.154h27.898v-.831H24.983a2.077 2.077 0 0 1 0-4.154h29.975c1.146 0 2.077.93 2.077 2.077v2.908h5.815v-20.77a2.08 2.08 0 0 1-1.994-2.076v-2.908H24.983a2.078 2.078 0 0 1 0-4.154h35.873v-5.815H24.983a2.078 2.078 0 0 1 0-4.154H62.85V42.098a2.08 2.08 0 0 1-1.994-2.076v-2.908H24.983a2.078 2.078 0 0 1 0-4.154h35.873zm54.846 19.72a2.08 2.08 0 0 1-2.787-.93 2.08 2.08 0 0 1 .929-2.786l9.969-4.984a2.08 2.08 0 0 1 1.858 0l9.969 4.984a2.077 2.077 0 0 1-1.857 3.715l-9.04-4.52zm9.969 54.83a2.077 2.077 0 0 1-1.858-3.715l9.97-4.984a2.078 2.078 0 0 1 1.857 3.715zM24.121 41.88a2.078 2.078 0 0 1 1.858-3.715l9.97 4.984a2.078 2.078 0 0 1-1.859 3.715zm1.858 59.815a2.078 2.078 0 0 1-1.858-3.715l9.97-4.984a2.08 2.08 0 0 1 1.857 0l9.97 4.984a2.077 2.077 0 0 1-1.858 3.715l-9.04-4.52z"
      clipRule="evenodd"
    />
    <path
      fill={layerProps.Title}
      fillRule="evenodd"
      d="M62.85 25.068c0-1.146.93-2.077 2.077-2.077h29.907a2.08 2.08 0 0 1 2.01 2.602v108.612q.066.253.067.525a2.08 2.08 0 0 1-2.077 2.077H64.927a2.08 2.08 0 0 1-2.077-2.077zm29.84 2.077H67.004V42.93H92.69zm0 35.723V47.083H67.004v15.785zm0 19.939V67.022H67.004v15.785zm0 39.877V86.96H67.004v35.724zm0 9.969v-5.816H67.004v5.816zm-7.825-29.908c1.146 0 2.077.931 2.077 2.077a2.08 2.08 0 0 1-2.077 2.077h-9.97a2.078 2.078 0 0 1 0-4.154zm0-9.97a2.078 2.078 0 0 1 0 4.154h-9.97a2.078 2.078 0 0 1 0-4.153zm0 19.939a2.078 2.078 0 0 1 0 4.154h-9.97a2.077 2.077 0 0 1 0-4.154z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgDrawAndShelves;
