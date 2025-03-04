import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgMedicalStethiscope = (props) =>{const {layerProps}=useLayerContext
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
      d="M55.172 111.921c-5.738.514-11.195-3.156-12.737-8.91-1.725-6.437 2.104-13.07 8.542-14.795 6.448-1.727 13.07 2.105 14.795 8.542 1.541 5.754-1.35 11.661-6.576 14.085l1.663 6.207a20.47 20.47 0 0 0 9.512 12.405 20.47 20.47 0 0 0 15.499 2.035 20.44 20.44 0 0 0 12.394-9.51 20.43 20.43 0 0 0 2.036-15.499l-1.914-7.141a7.08 7.08 0 0 1-6.58-5.245l-.997-3.722C78.878 90.347 67.965 82.371 64.73 70.3l-7.333-27.37a7.076 7.076 0 0 1 5.007-8.673l3.219-.863a2.082 2.082 0 1 1 1.078 4.024l-3.219.862a2.91 2.91 0 0 0-2.062 3.572l7.334 27.37c3.272 12.212 15.848 19.472 28.06 16.2 12.221-3.275 19.482-15.85 16.21-28.062l-7.334-27.37a2.91 2.91 0 0 0-3.571-2.062l-3.22.862a2.08 2.08 0 0 1-2.55-1.473 2.076 2.076 0 0 1 1.472-2.55l3.219-.863a7.075 7.075 0 0 1 8.673 5.008l7.334 27.37c3.234 12.07-2.239 24.437-12.558 30.426l.997 3.721a7.04 7.04 0 0 1-.705 5.375 7.06 7.06 0 0 1-2.371 2.457l1.914 7.142a24.58 24.58 0 0 1-2.45 18.661 24.588 24.588 0 0 1-45.039-5.936zm.98-4.391a7.91 7.91 0 0 0 5.596-9.694 7.92 7.92 0 0 0-9.693-5.596c-4.215 1.13-6.726 5.479-5.596 9.693a7.92 7.92 0 0 0 9.693 5.597m38.883-17.48.795 2.967a2.92 2.92 0 0 0 3.57 2.062 2.88 2.88 0 0 0 1.772-1.359 2.87 2.87 0 0 0 .291-2.213l-.795-2.967c-.899.349-1.82.65-2.777.906a27 27 0 0 1-2.856.604"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMedicalStethiscope;
