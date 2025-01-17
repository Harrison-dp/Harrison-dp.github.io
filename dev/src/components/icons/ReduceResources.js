import * as React from "react";
const SvgReduceResources = (props) =>{const {layerProps}=useLayerConstext();return(
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
      d="M96.765 126.791c-.49 5.61-5.2 10.012-10.938 10.012H33.85c-6.064 0-10.98-4.917-10.98-10.981V73.844c0-5.737 4.4-10.447 10.011-10.938a10.984 10.984 0 0 1 9.97-9.97c.49-5.61 5.2-10.01 10.937-10.01h24.177V25.064c0-1.147.93-2.077 2.077-2.077h37.883c1.147 0 2.077.93 2.077 2.077v27.831h9.877a4.35 4.35 0 0 1 3.077 7.428l-16.209 16.21v29.351c0 5.738-4.401 10.447-10.012 10.938a10.98 10.98 0 0 1-9.969 9.969M32.838 67.093a6.83 6.83 0 0 0-5.815 6.75v51.979a6.827 6.827 0 0 0 6.826 6.827h51.978a6.83 6.83 0 0 0 6.752-5.816H43.82c-6.065 0-10.98-4.916-10.98-10.98zm9.97-9.97a6.83 6.83 0 0 0-5.816 6.752v51.978a6.827 6.827 0 0 0 6.826 6.827h51.979a6.83 6.83 0 0 0 6.752-5.816H53.787c-6.064 0-10.98-4.916-10.98-10.98zM77.964 47.08H53.787a6.826 6.826 0 0 0-6.826 6.826v51.978a6.826 6.826 0 0 0 6.826 6.826h51.979a6.826 6.826 0 0 0 6.826-6.826V80.687l-8.636 8.636a5.624 5.624 0 0 1-7.953 0l-29-29a4.35 4.35 0 0 1 3.077-7.428h7.884zm4.154-19.939v27.83c0 1.148-.93 2.078-2.077 2.078h-9.96a.198.198 0 0 0-.14.338L98.94 86.385a1.467 1.467 0 0 0 2.079 0l28.999-28.999a.2.2 0 0 0 .043-.215.2.2 0 0 0-.183-.122h-11.954a2.077 2.077 0 0 1-2.077-2.077v-27.83z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgReduceResources;
