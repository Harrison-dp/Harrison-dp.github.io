import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgQuoteApproved = (props) =>{const {layerProps}=useLayerContext
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
      d="M82.1869 132.164H42.082C40.2043 132.164 38.3985 131.419 37.0718 130.091C35.7452 128.762 35 126.961 35 125.083V35.0817C35 33.2033 35.7452 31.4021 37.0718 30.0739C38.3985 28.7457 40.2043 27.9977 42.082 27.9977H55.0014V25.0829C55.0014 23.9325 55.93 23 57.0832 23H87.0849C88.2381 23 89.1667 23.9325 89.1667 25.0829V27.9977H102.086C103.964 27.9977 105.77 28.7457 107.096 30.0739C108.423 31.4021 109.168 33.2033 109.168 35.0817V93.1416H112.086C118.76 93.1416 124.169 98.5518 124.169 105.223V125.224C124.169 131.899 118.76 137.309 112.086 137.309H92.0851C87.993 137.309 84.3809 135.276 82.1869 132.164ZM105.004 93.1416V35.0817C105.004 34.3069 104.698 33.5655 104.147 33.0188C103.607 32.4721 102.862 32.1669 102.086 32.1669H89.1667V35.0817C89.1667 36.2321 88.2381 37.1645 87.0849 37.1645H57.0832C55.93 37.1645 55.0014 36.2321 55.0014 35.0817V32.1669H42.082C41.3065 32.1669 40.5615 32.4721 40.0206 33.0188C39.4696 33.5655 39.1636 34.3069 39.1636 35.0817V125.083C39.1636 125.855 39.4696 126.596 40.0206 127.143C40.5615 127.693 41.3065 127.998 42.082 127.998H80.3193C80.105 127.109 80.0029 126.18 80.0029 125.224V105.223C80.0029 98.5518 85.4113 93.1416 92.0851 93.1416H105.004ZM112.086 97.3075H92.0851C87.7073 97.3075 84.1665 100.853 84.1665 105.223V125.224C84.1665 129.598 87.7073 133.14 92.0851 133.14H112.086C116.454 133.14 119.995 129.598 119.995 125.224V105.223C119.995 100.853 116.454 97.3075 112.086 97.3075ZM89.9729 116.698C89.1566 115.883 89.1566 114.565 89.9729 113.75C90.7893 112.938 92.1059 112.938 92.9222 113.75L98.5348 119.371L111.25 106.659C112.066 105.844 113.382 105.844 114.199 106.659C115.005 107.471 115.005 108.792 114.199 109.604L100.004 123.788C99.1981 124.603 97.8716 124.603 97.0654 123.788L89.9729 116.698ZM85.0031 32.9987V27.1658H59.165V30.0806V32.9987H85.0031ZM47.0822 52.1642C45.9291 52.1642 45.0009 51.2318 45.0009 50.0813C45.0009 48.9308 45.9291 47.9984 47.0822 47.9984C48.2354 47.9984 49.164 48.9308 49.164 50.0813C49.164 51.2318 48.2354 52.1642 47.0822 52.1642ZM47.0822 82.1635C45.9291 82.1635 45.0009 81.2311 45.0009 80.0807C45.0009 78.9336 45.9291 77.9978 47.0822 77.9978C48.2354 77.9978 49.164 78.9336 49.164 80.0807C49.164 81.2311 48.2354 82.1635 47.0822 82.1635ZM57.0832 82.1635C55.93 82.1635 55.0014 81.2311 55.0014 80.0807C55.0014 78.9336 55.93 77.9978 57.0832 77.9978H97.0854C98.2283 77.9978 99.1672 78.9336 99.1672 80.0807C99.1672 81.2311 98.2283 82.1635 97.0854 82.1635H57.0832ZM47.0822 72.165C45.9291 72.165 45.0009 71.2324 45.0009 70.0819C45.0009 68.9315 45.9291 67.9991 47.0822 67.9991C48.2354 67.9991 49.164 68.9315 49.164 70.0819C49.164 71.2324 48.2354 72.165 47.0822 72.165ZM47.0822 62.1662C45.9291 62.1662 45.0009 61.2305 45.0009 60.0834C45.0009 58.9329 45.9291 57.9971 47.0822 57.9971C48.2354 57.9971 49.164 58.9329 49.164 60.0834C49.164 61.2305 48.2354 62.1662 47.0822 62.1662ZM57.0832 72.165C55.93 72.165 55.0014 71.2324 55.0014 70.0819C55.0014 68.9315 55.93 67.9991 57.0832 67.9991H97.0854C98.2283 67.9991 99.1672 68.9315 99.1672 70.0819C99.1672 71.2324 98.2283 72.165 97.0854 72.165H57.0832ZM57.0832 62.1662C55.93 62.1662 55.0014 61.2305 55.0014 60.0834C55.0014 58.9329 55.93 57.9971 57.0832 57.9971H97.0854C98.2283 57.9971 99.1672 58.9329 99.1672 60.0834C99.1672 61.2305 98.2283 62.1662 97.0854 62.1662H57.0832ZM57.0832 52.1642C55.93 52.1642 55.0014 51.2318 55.0014 50.0813C55.0014 48.9308 55.93 47.9984 57.0832 47.9984H97.0854C98.2283 47.9984 99.1672 48.9308 99.1672 50.0813C99.1672 51.2318 98.2283 52.1642 97.0854 52.1642H57.0832Z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgQuoteApproved;
