import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgEmail = (props) =>{const {layerProps}=useLayerContext
();return(
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
      d="M28.675 125.199c-.115-.057-.114-.113-.228-.182-1.26-1.328-2.062-3.126-2.062-5.004v-44.08a7.1 7.1 0 0 1 2.748-5.587l6.07-4.741c.114-.08.227-.148.341-.217V50.583c0-2.061.802-4.052 2.29-5.518 1.489-1.466 3.436-2.29 5.497-2.29h21.182l10.532-8.141c2.863-2.267 6.986-2.267 9.963 0l10.418 8.141h21.182c2.061 0 4.12.824 5.494 2.29a7.72 7.72 0 0 1 2.29 5.518v14.805c.115.069.23.137.345.217l6.183 4.74c1.717 1.34 2.632 3.4 2.632 5.588v44.08c0 1.878-.686 3.676-2.06 5.004 0 .069-.114.125-.114.182-.114.023-.116.047-.116.058-1.26 1.18-2.977 1.832-4.694 1.832H33.485c-1.718 0-3.436-.652-4.81-1.832zm6.87-54.58-3.436 2.68 3.435 1.935zm-5.039 6.596v42.798c0 .207.116.424.116.63L63.023 95.43zm40.876-34.44h17.289l-6.298-4.855c-1.374-1.099-3.32-1.099-4.808 0zm53.01 27.845v4.522l3.435-1.866zm-4.121 6.801V50.583c0-.962-.344-1.89-1.031-2.576a3.7 3.7 0 0 0-2.632-1.065H43.331c-.916 0-1.833.39-2.52 1.065-.687.687-1.145 1.614-1.145 2.576V77.57l26.906 15.079 8.473-6.55c2.863-2.266 6.986-2.266 9.963 0l8.014 6.241zm9.045 43.222c.115-.206.114-.423.114-.63V77.169L96.571 95.133zm-94.803 2.279h91.024L91.533 96.485c0-.012 0-.023-.114-.035l-9.046-7.053c-1.374-1.11-3.32-1.11-4.808 0z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgEmail;
