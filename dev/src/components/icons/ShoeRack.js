import * as React from "react";
const SvgShoeRack = (props) =>{const {layerProps}=useLayerConstext();return(
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
      d="M42.802 27.068H24.94a2.078 2.078 0 0 1 0-4.154h109.662a2.078 2.078 0 0 1 0 4.154H116.74v15.784h17.862a2.078 2.078 0 0 1 0 4.154H116.74v15.785h17.862a2.078 2.078 0 0 1 0 4.154H116.74v15.784h17.862a2.078 2.078 0 0 1 0 4.154H116.74v15.785h17.862a2.078 2.078 0 0 1 0 4.154H116.74v15.784h17.862c1.146 0 2.077.931 2.077 2.077a2.08 2.08 0 0 1-2.077 2.077H116.74v5.816h17.862c1.146 0 2.077.93 2.077 2.077a2.08 2.08 0 0 1-2.077 2.076H24.94a2.077 2.077 0 0 1 0-4.153h17.862v-5.816H24.94a2.078 2.078 0 0 1 0-4.154h17.862V86.883H24.94a2.078 2.078 0 0 1 0-4.154h17.862V66.945H24.94a2.078 2.078 0 0 1 0-4.154h17.862V47.006H24.94a2.078 2.078 0 0 1 0-4.154h17.862zm67.791 0H48.949v5.815h61.644zm1.993 50.677V42.02a2.077 2.077 0 0 1-1.993-2.075v-2.908H48.949v2.908a2.08 2.08 0 0 1-1.993 2.075v35.725zm0 54.831V96.851a2.077 2.077 0 0 1-1.993-2.075v-2.908H48.949v2.908a2.08 2.08 0 0 1-1.993 2.075v35.725zm-1.993-44.862V81.9H48.949v5.815zm-34.878 13.903a2.078 2.078 0 0 1-1.858-3.715l9.97-4.984a2.08 2.08 0 0 1 1.857 0l9.97 4.984a2.078 2.078 0 0 1-1.858 3.715l-9.04-4.52zm-9.97-54.83a2.078 2.078 0 0 1-1.857-3.715l9.97-4.985a2.08 2.08 0 0 1 1.857 0l9.97 4.985a2.078 2.078 0 0 1-1.859 3.715l-9.04-4.52zM34.91 92.699a2.078 2.078 0 0 1 0 4.154H24.94a2.078 2.078 0 0 1 0-4.154zm0 9.969a2.078 2.078 0 0 1 0 4.154H24.94a2.078 2.078 0 0 1 0-4.154zm0 9.969c1.146 0 2.077.931 2.077 2.077a2.08 2.08 0 0 1-2.077 2.077H24.94a2.078 2.078 0 0 1 0-4.154z"
      clipRule="evenodd"
    />
    <path
      fill={layerProps.Title}
      fillRule="evenodd"
      d="M52.771 121.775h-5.815a2.078 2.078 0 0 1 0-4.154h5.815v-2.907c0-1.147.93-2.077 2.077-2.077h49.846c1.147 0 2.077.93 2.077 2.077v2.907h5.816c1.145 0 2.077.931 2.077 2.077a2.08 2.08 0 0 1-2.077 2.077h-5.816v2.908c0 1.147-.93 2.077-2.077 2.077H54.848a2.077 2.077 0 0 1-2.077-2.077zm49.846-4.154v-.83H56.925v.83zm-45.692 4.154v.831h45.692v-.831z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgShoeRack;
