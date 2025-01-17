import * as React from "react";
const SvgBlock4 = (props) =>{const {layerProps}=useLayerConstext();return(
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
      d="M22.916 80.002c0-31.506 25.578-57.084 57.084-57.084 31.505 0 57.083 25.578 57.083 57.083 0 31.506-25.578 57.084-57.083 57.084-31.506 0-57.084-25.578-57.084-57.084m109.959-2.084C131.781 49.676 108.508 27.085 80 27.085c-28.509 0-51.782 22.59-52.876 50.833h35.918c1.03-8.448 8.233-15 16.957-15 1.694 0 3.331.248 4.876.707 6.414 1.91 11.253 7.486 12.082 14.293zm-60.517-21.81a2.084 2.084 0 0 1-3.85 1.593l-7.655-18.478a2.083 2.083 0 0 1 3.85-1.594zm48.418 4.747a2.085 2.085 0 0 1 1.596 3.85l-18.478 7.655a2.085 2.085 0 0 1-1.594-3.85zM57.699 68.51a2.083 2.083 0 0 1-1.594 3.85l-18.478-7.653a2.085 2.085 0 0 1 1.596-3.85zm33.793-10.808a2.085 2.085 0 0 1-3.85-1.594l7.653-18.478a2.083 2.083 0 0 1 3.85 1.594zm-34.585 29.78a2.088 2.088 0 0 0 0 4.175 2.088 2.088 0 0 0 0-4.175m46.16 0a2.088 2.088 0 1 0 .005 4.175 2.088 2.088 0 0 0-.005-4.175m-13.5 13.533a2.09 2.09 0 0 0-2.088 2.088 2.09 2.09 0 0 0 2.088 2.087 2.09 2.09 0 0 0 2.087-2.087 2.09 2.09 0 0 0-2.087-2.088M65 82.085h-1.958c1.03 8.446 8.233 15 16.957 15s15.928-6.554 16.958-15h-4.208c-.997 6.14-6.33 10.832-12.75 10.832-6.419 0-11.752-4.693-12.749-10.832zm27.749-4.167c-.798-4.915-4.374-8.903-9.062-10.298A12.9 12.9 0 0 0 80 67.084c-6.42 0-11.753 4.695-12.75 10.834zm-22.317 23.096a2.09 2.09 0 0 0-2.087 2.088 2.09 2.09 0 0 0 2.087 2.087 2.09 2.09 0 0 0 2.088-2.087 2.09 2.09 0 0 0-2.088-2.088"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgBlock4;
