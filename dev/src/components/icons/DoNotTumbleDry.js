import * as React from "react";
const SvgDoNotTumbleDry = (props) =>{const {layerProps}=useLayerConstext();return(
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
      d="m58.747 61.692-5.176-5.177c-.753-.847-.753-2.164 0-2.917.847-.847 2.164-.847 2.917 0l5.176 5.082c1.036-.47 2.165-.753 3.294-.753h30.024a6.96 6.96 0 0 1 3.388.848l5.177-5.271c.753-.848 2.071-.848 2.918 0 .847.846.847 2.165 0 2.918l-5.177 5.27c.471.941.847 2.07.847 3.294V95.01c0 1.13-.376 2.258-.847 3.2l5.271 5.271c.753.753.753 2.07 0 2.917a2.103 2.103 0 0 1-3.012 0l-5.177-5.177a6.96 6.96 0 0 1-3.388.848H64.96a7.3 7.3 0 0 1-3.2-.753l-5.176 5.177c-.847.752-2.166.752-2.919 0a2.103 2.103 0 0 1 0-3.012l5.083-5.083c-.47-1.035-.847-2.164-.847-3.388V64.986c0-1.224.282-2.353.847-3.294m36.235.377H65.053l4.423 4.424c2.918-2.353 6.589-3.578 10.448-3.578h.188c3.765 0 7.529 1.224 10.447 3.578zM97.9 94.915V65.081l-4.424 4.422c2.353 2.918 3.577 6.589 3.577 10.353v.095c0 3.953-1.318 7.624-3.577 10.542zm-32.753 3.012h29.929L90.56 93.41c-2.918 2.259-6.589 3.67-10.542 3.67s-7.623-1.318-10.446-3.576zM62.04 64.986V95.01h.094l4.424-4.424c-2.26-2.917-3.671-6.588-3.671-10.635v-.094c0-3.765 1.318-7.436 3.67-10.447zm25.6 4.517c-2.258-1.6-4.8-2.446-7.529-2.446h-.188c-2.73 0-5.271.846-7.436 2.447l7.53 7.529zm2.918 17.978c1.506-2.071 2.353-4.706 2.353-7.53v-.094c0-2.636-.847-5.27-2.353-7.435l-7.53 7.53zm-18.071 3.012c2.165 1.505 4.706 2.446 7.53 2.446s5.458-.941 7.529-2.541l-7.53-7.435zm-3.012-18.071c-1.506 2.164-2.353 4.8-2.353 7.435v.094c0 2.824.848 5.459 2.448 7.623l7.529-7.623z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgDoNotTumbleDry;
