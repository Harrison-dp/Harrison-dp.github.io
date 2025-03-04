import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgEmailDatabase = (props) =>{const {layerProps}=useLayerContext
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
      d="m89.78 87.944-41.056 23.714c-1.646.943-3.638 1.196-5.37.709a7.17 7.17 0 0 1-4.33-3.298L23.951 83.05a7.7 7.7 0 0 1-.694-5.374 7.44 7.44 0 0 1 3.292-4.299l60.717-35.039c3.378-1.956 7.71-.792 9.702 2.595l15.33 26.608a67 67 0 0 1 1.127-.013c8.748 0 16.369 1.538 20.18 3.665 2.426 1.342 3.465 3.084 3.465 4.704v37.445c0 1.576-1.038 3.26-3.29 4.583-3.465 2.07-10.654 3.621-18.969 3.773a75.68 75.68 0 0 1-4.851-.063c-7.622-.348-14.031-1.899-17.236-3.893-2.079-1.285-2.945-2.887-2.945-4.4zm17.842-20.188L93.33 43.016a6 6 0 0 0-.519-.677l-9.18 23.48 18.188 2.677a60 60 0 0 1 5.803-.74M88.22 42.598l-58.378 33.71 26.071 3.837s.087.006.087.012l14.291 2.096c1.3.196 2.598-.557 3.118-1.823zM27.244 80.145c.087.285.172.563.345.823l15.071 26.018c.174.298.348.564.608.779l9.527-23.879zm20.7 27.12 41.835-24.132v-7.236c0-1.538.953-3.19 3.118-4.501L82.07 69.8l-4.763 12.148c-1.213 3.07-4.33 4.906-7.622 4.425l-12.733-1.861zm84.971-31.368c0-.17-.174-.26-.434-.418-.519-.5-1.386-.943-2.425-1.354-3.725-1.494-9.787-2.432-16.63-2.432-.606 0-1.213.007-1.732.026a2.3 2.3 0 0 1-.954.025c-3.032.114-5.889.412-8.401.867-.087.032-.174.044-.261.057-2.079.393-3.897.88-5.283 1.457-1.04.411-1.906.854-2.512 1.354-.173.159-.345.247-.345.418 0 .177.172.26.345.418.606.5 1.473.943 2.512 1.355 3.724 1.494 9.789 2.43 16.631 2.43s12.905-.936 16.63-2.43c1.039-.412 1.906-.855 2.425-1.355.26-.158.434-.24.434-.418m0 12.566v-7.501c-3.985 1.937-11.26 3.304-19.489 3.304-8.315 0-15.504-1.367-19.488-3.304v7.501c0 .177.172.266.345.418.606.5 1.473.943 2.512 1.361 3.724 1.488 9.789 2.424 16.631 2.424q.779 0 1.558-.018a66 66 0 0 0 3.292-.146c5.37-.374 9.96-1.33 12.732-2.665.606-.291 1.127-.595 1.473-.925.174-.164.434-.26.434-.449m0 12.522v-7.457c-3.205 1.525-8.317 2.71-14.38 3.133a74 74 0 0 1-3.465.152c-.519.013-1.124.019-1.644.019-8.315 0-15.504-1.361-19.488-3.298v7.451c0 .171.172.26.345.418.606.494 1.473.937 2.512 1.354 3.724 1.488 9.789 2.425 16.631 2.425 2.512 0 4.85-.126 7.102-.354 4.677-.494 8.488-1.425 10.827-2.678.519-.26.953-.526 1.213-.817.173-.133.347-.202.347-.348m0 12.357v-7.306c-2.772 1.33-6.93 2.406-11.954 2.931a73 73 0 0 1-7.535.381c-8.315 0-15.504-1.361-19.488-3.299v7.293c0 .07.086.108.172.171.087.12.174.234.347.348.433.355 1.04.677 1.732.988 3.032 1.399 8.141 2.355 14.031 2.621 1.04.05 2.08.076 3.206.076.433 0 .866-.007 1.299-.013 6.496-.12 12.126-1.07 15.591-2.526.78-.329 1.472-.678 1.991-1.057.173-.133.26-.26.433-.393.087-.082.175-.126.175-.215"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgEmailDatabase;
