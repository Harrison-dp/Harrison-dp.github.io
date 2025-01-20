import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgVenetionBlinds = (props) =>{const {layerProps}=useLayerContext
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
      d="M54.636 36.969H24.923a2.077 2.077 0 0 1-2.077-2.077v-9.97c0-1.146.93-2.076 2.077-2.076h109.661a2.077 2.077 0 0 1 0 4.154H27v5.815h107.584a2.077 2.077 0 0 1 0 4.154h-25.256v5.815h25.256a2.077 2.077 0 0 1 0 4.154h-25.256v5.815h25.256a2.077 2.077 0 0 1 0 4.154h-25.256v5.816h25.256a2.077 2.077 0 0 1 0 4.153h-25.256v5.816h25.256a2.077 2.077 0 0 1 0 4.154h-25.256v5.815h25.256a2.077 2.077 0 0 1 0 4.154h-25.256v5.815h25.256a2.077 2.077 0 0 1 0 4.154h-25.256v5.816h25.256a2.077 2.077 0 1 1 0 4.153h-25.256v5.816h25.256a2.077 2.077 0 0 1 0 4.154h-25.256v5.815h25.256a2.077 2.077 0 0 1 0 4.154h-25.256v5.815h25.256a2.078 2.078 0 0 1 0 4.154H29.907a2.077 2.077 0 0 1 0-4.154h24.729v-5.815H29.907a2.078 2.078 0 0 1 0-4.154h24.729v-5.815H29.907a2.078 2.078 0 0 1 0-4.154h24.729v-5.816H29.907a2.077 2.077 0 0 1 0-4.153h24.729v-5.816H29.907a2.078 2.078 0 0 1 0-4.154h24.729v-5.815H29.907a2.078 2.078 0 0 1 0-4.154h24.729v-5.815H29.907a2.078 2.078 0 0 1 0-4.154h24.729v-5.815H29.907a2.078 2.078 0 0 1 0-4.154h24.729v-5.816H29.907a2.078 2.078 0 0 1 0-4.154h24.729v-5.815H29.907a2.078 2.078 0 0 1 0-4.154h24.729zm5.981 0H58.79v5.815h1.827zm38.576 0H64.77v5.815h34.422zm5.981 0h-1.827v5.815h1.827zm0 15.784v-5.815h-1.827v5.815zm0 9.97v-5.816h-1.827v5.816zm0 9.969v-5.815h-1.827v5.815zm0 9.97v-5.816h-1.827v5.815zm0 9.968v-5.815h-1.827v5.815zm0 9.97v-5.816h-1.827v5.816zm0 9.969v-5.816h-1.827v5.816zm0 9.969v-5.815h-1.827v5.815zm0 9.969v-5.815h-1.827v5.815zm-40.403 0h34.422v-5.815H64.77zm-5.981 0h1.827v-5.815H58.79zm0-15.784v5.815h1.827v-5.815zm0-9.97v5.816h1.827v-5.816zm0-9.969v5.816h1.827v-5.816zm0-9.97v5.816h1.827v-5.815zm0-9.968v5.815h1.827v-5.815zm0-9.97v5.816h1.827v-5.815zm0-9.969v5.816h1.827v-5.816zm0-9.969v5.815h1.827v-5.815zm40.403 0H64.77v5.815h34.422zm0 15.785v-5.816H64.77v5.816zm0 9.969v-5.815H64.77v5.815zm0 9.97v-5.816H64.77v5.815zm0 9.968v-5.815H64.77v5.815zm0 9.97v-5.816H64.77v5.816zm0 9.969v-5.816H64.77v5.816zm0 9.969v-5.815H64.77v5.815z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgVenetionBlinds;
