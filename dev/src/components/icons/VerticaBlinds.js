import * as React from "react";
const SvgVerticaBlinds = (props) =>{const {layerProps}=useLayerConstext();return(
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
      d="M32.912 47.057h-7.99a2.077 2.077 0 0 1-2.076-2.077V25.042c0-1.147.93-2.077 2.077-2.077h109.661a2.078 2.078 0 0 1 0 4.154H27v15.784H134.68c1.147 0 2.077.931 2.077 2.077v9.97c0 1.146-.93 2.076-2.077 2.076h-3.005v75.6h3.005a2.078 2.078 0 0 1 0 4.154H129.6a2.076 2.076 0 0 1-2.077-2.077V54.95c0-1.148.929-2.078 2.077-2.078h3.004v-5.815H116.82v5.816h2.81c1.147 0 2.077.93 2.077 2.077v79.753c0 1.147-.93 2.077-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077V54.95c0-1.148.93-2.078 2.077-2.078h3.005v-5.815H96.881v5.816h2.81c1.148 0 2.078.93 2.078 2.077v79.753c0 1.147-.93 2.077-2.077 2.077h-9.97a2.077 2.077 0 0 1-2.076-2.077V54.95c0-1.148.93-2.078 2.077-2.078h3.005v-5.815H76.943v5.816h2.81c1.147 0 2.077.93 2.077 2.077v79.753c0 1.147-.93 2.077-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077V54.95c0-1.148.93-2.078 2.077-2.078h3.005v-5.815H57.004v5.816h2.81c1.148 0 2.078.93 2.078 2.077v79.753c0 1.147-.93 2.077-2.077 2.077h-9.97a2.077 2.077 0 0 1-2.076-2.077V54.95c0-1.148.93-2.078 2.077-2.078h3.005v-5.815H37.066v5.816h2.81c1.148 0 2.077.93 2.077 2.077v79.753c0 1.147-.93 2.077-2.077 2.077h-9.969a2.077 2.077 0 0 1-2.077-2.077V54.95c0-1.148.93-2.078 2.077-2.078h3.005zm81.831 9.97h-3.005v75.599h5.815v-75.6zm-19.938 0h-3.006v75.599h5.816v-75.6zm-19.939 0h-3.005v75.599h5.816v-75.6zm-19.938 0h-3.005v75.599h5.815v-75.6zm-19.939 0h-3.005v75.599H37.8v-75.6z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgVerticaBlinds;
