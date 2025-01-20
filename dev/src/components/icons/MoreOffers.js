import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgMoreOffers = (props) =>{const {layerProps}=useLayerContext
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
      d="M38.485 66.86a7.06 7.06 0 0 1-5.67-6.922v-.008a7.06 7.06 0 0 1 7.057-7.057H82.66v-17.95c0-6.604 5.353-11.958 11.957-11.958h30.085c6.604 0 11.958 5.354 11.958 11.957v30.085c0 6.605-5.354 11.958-11.958 11.958h-8.604c.4.885.623 1.869.623 2.904v.008a7 7 0 0 1-.623 2.903h3.535a7.06 7.06 0 0 1 7.057 7.058v.008a7.057 7.057 0 0 1-7.057 7.057h-3.535c.4.886.623 1.87.623 2.904v.008a7 7 0 0 1-.623 2.904h3.535a7.06 7.06 0 0 1 7.057 7.058v.008a7.06 7.06 0 0 1-5.67 6.921c.44.92.686 1.951.686 3.04v.008a7.06 7.06 0 0 1-5.671 6.921 7 7 0 0 1 .686 3.04v.008a7.057 7.057 0 0 1-7.057 7.057H39.872a7.057 7.057 0 0 1-7.057-7.057v-.008a7.06 7.06 0 0 1 5.67-6.922 7 7 0 0 1-.686-3.039v-.008a7.06 7.06 0 0 1 5.67-6.922 7 7 0 0 1-.685-3.039v-.008c0-1.036.223-2.019.623-2.904h-3.535a7.06 7.06 0 0 1-7.057-7.058v-.008a7.06 7.06 0 0 1 7.057-7.058h3.535a7 7 0 0 1-.623-2.903v-.008c0-1.035.223-2.018.623-2.904h-3.535a7.057 7.057 0 0 1-7.057-7.057v-.008a7.06 7.06 0 0 1 5.67-6.922 7 7 0 0 1-.686-3.04V69.9c0-1.089.246-2.12.686-3.04m44.176-9.834H39.87a2.904 2.904 0 0 0-2.903 2.904v.008c0 1.604 1.3 2.904 2.904 2.904h42.789zm11.957 15.785h30.085a7.804 7.804 0 0 0 7.804-7.804V34.922a7.804 7.804 0 0 0-7.804-7.803H94.618a7.804 7.804 0 0 0-7.803 7.803v30.085a7.803 7.803 0 0 0 7.803 7.804m15.047 9.97c1.603 0 2.903-1.3 2.903-2.904v-.008c0-1.604-1.3-2.904-2.903-2.904H39.872a2.904 2.904 0 0 0-2.904 2.904v.008c0 1.604 1.3 2.903 2.904 2.903zm-59.823 9.968h69.792c1.603 0 2.904-1.3 2.904-2.903v-.008a2.905 2.905 0 0 0-2.904-2.904H49.841a2.904 2.904 0 0 0-2.904 2.904v.008c0 1.604 1.3 2.903 2.905 2.903m59.823 9.97c1.603 0 2.903-1.3 2.903-2.904v-.008c0-1.603-1.3-2.904-2.903-2.904H39.872a2.904 2.904 0 0 0-2.904 2.904v.008c0 1.604 1.3 2.904 2.904 2.904zm-59.823 9.969h69.792c1.603 0 2.904-1.3 2.904-2.903v-.008a2.904 2.904 0 0 0-2.904-2.904H49.841a2.904 2.904 0 0 0-2.904 2.904v.008c0 1.603 1.3 2.903 2.905 2.903m-4.985 9.969h69.793c1.603 0 2.903-1.3 2.903-2.903v-.008c0-1.604-1.3-2.904-2.903-2.904H44.856a2.904 2.904 0 0 0-2.903 2.904v.008c0 1.603 1.3 2.903 2.904 2.903m64.808 4.154H39.872a2.904 2.904 0 0 0-2.904 2.904v.008c0 1.604 1.3 2.903 2.904 2.903h69.793a2.903 2.903 0 0 0 2.903-2.903v-.008c0-1.604-1.3-2.904-2.903-2.904M44.856 66.996a2.904 2.904 0 0 0-2.903 2.904v.008c0 1.603 1.3 2.903 2.904 2.903h40.7a11.9 11.9 0 0 1-2.732-5.815zm62.728-14.954H94.707a2.078 2.078 0 0 1 0-4.154h12.877V35.01a2.077 2.077 0 0 1 4.154 0v12.877h12.876a2.077 2.077 0 0 1 0 4.154h-12.876v12.877a2.078 2.078 0 0 1-4.154 0z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMoreOffers;
