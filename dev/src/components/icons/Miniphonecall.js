import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgMiniPhoneCall = (props) =>{const {layerProps}=useLayerContext
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
      d="M74.2176 85.7814C76.4499 88.0257 78.9364 89.9912 81.6418 91.6532C84.2987 88.8629 88.0595 87.116 92.2086 87.116C94.732 87.116 97.098 87.7468 99.1725 88.875C99.1725 88.875 99.1722 88.8872 99.1843 88.8872C102.557 90.7433 103.807 94.9653 102.011 98.3743C100.604 101.08 98.3719 103.288 95.6544 104.683C92.2818 106.406 89.916 107.946 84.9905 106.151C77.7842 103.53 71.3059 99.3447 65.9801 94.0189C60.6542 88.693 56.4809 82.2269 53.8483 75.0085C51.9921 69.901 53.5568 67.79 55.328 64.3446C56.711 61.627 58.9311 59.4069 61.6243 57.9875C65.0334 56.192 69.2553 57.4538 71.1236 60.8265V60.8386C72.2519 62.901 72.8948 65.2788 72.8948 67.7901C72.8948 71.9513 71.1479 75.7121 68.3454 78.369C70.0075 81.0622 71.9854 83.5612 74.2176 85.7814ZM71.2694 88.7296C68.3699 85.8301 65.8584 82.5301 63.8446 78.9149C63.3229 77.9928 63.5779 76.8404 64.4393 76.2216C67.0355 74.3169 68.7216 71.2477 68.7216 67.7901C68.7216 65.9946 68.273 64.3082 67.4723 62.8402C66.708 61.4572 64.9732 60.9356 63.578 61.6756L63.5656 61.6878C61.6245 62.6947 60.0352 64.2961 59.0404 66.2493C57.8151 68.6272 56.4808 70.0464 57.7668 73.5888C60.181 80.2249 64.0265 86.1818 68.9277 91.0831C73.829 95.9722 79.7856 99.8179 86.4217 102.244C89.8307 103.482 91.4203 102.171 93.7618 100.97C95.715 99.9756 97.304 98.3863 98.323 96.4452V96.4331C99.0631 95.0379 98.5539 93.3031 97.1709 92.5388C95.6908 91.7381 94.0041 91.2771 92.2086 91.2771C88.751 91.2771 85.6817 92.9756 83.7892 95.5718C83.1704 96.421 82.0058 96.6758 81.0838 96.1662C77.4807 94.1402 74.1689 91.6412 71.2694 88.7296ZM85.0876 57.0898C83.9473 57.0898 83.0132 56.1557 83.0132 55.0031C83.0132 53.8506 83.9473 52.9165 85.0876 52.9165C97.2316 52.9165 107.082 62.7674 107.082 74.9113C107.082 76.0638 106.16 76.9979 105.008 76.9979C103.855 76.9979 102.921 76.0638 102.921 74.9113C102.921 65.0724 94.9387 57.0898 85.0876 57.0898ZM96.9037 74.8749C96.928 76.0274 96.0057 76.9737 94.8654 76.9979C93.7128 77.0101 92.7666 76.1003 92.7423 74.9477C92.6695 70.738 89.261 67.341 85.0634 67.2682C83.9108 67.244 82.9889 66.2977 83.0132 65.1452C83.0374 63.9926 83.9837 63.0828 85.1362 63.095C91.5782 63.2163 96.7945 68.4208 96.9037 74.8749Z"    
    />
  </svg>
  )
}
export default SvgMiniPhoneCall;
