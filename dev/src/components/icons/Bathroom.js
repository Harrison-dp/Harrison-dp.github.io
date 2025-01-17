import * as React from "react";
const SvgBathroom = (props) =>{const {layerProps}=useLayerConstext();return(
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
      d="M42.784 106.793a22.054 22.054 0 0 1-19.938-21.95v-.003a7.02 7.02 0 0 1 7.021-7.022h22.886v-7.892a2.908 2.908 0 0 0-5.815 0v2.492a2.078 2.078 0 0 1-4.154 0v-2.492a7.06 7.06 0 0 1 7.062-7.062c3.9 0 7.061 3.161 7.061 7.062v7.892h12.917a7.02 7.02 0 0 1 7.022 7.022v.003a22.05 22.05 0 0 1-19.939 21.95v27.933a2.078 2.078 0 0 1-4.154 0v-27.831h-5.815v27.831a2.078 2.078 0 0 1-4.154 0zm27.04-24.821H29.867A2.867 2.867 0 0 0 27 84.84v.003a17.897 17.897 0 0 0 17.861 17.898h9.969a17.9 17.9 0 0 0 17.862-17.898v-.003a2.87 2.87 0 0 0-2.868-2.868m17.397 21.144a22.1 22.1 0 0 1-4.56-13.442V64.87a7.06 7.06 0 0 1 7.062-7.062H129.6a7.064 7.064 0 0 1 7.061 7.062v24.804c0 4.886-1.618 9.606-4.559 13.442a7.022 7.022 0 0 1 4.559 6.575v.005a22.05 22.05 0 0 1-10.943 19.049v5.981a2.078 2.078 0 0 1-4.154 0v-4.104a22 22 0 0 1-6.954 1.125h-9.898c-2.737 0-5.422-.509-7.928-1.475v4.454a2.078 2.078 0 0 1-4.154 0v-6.584a22.051 22.051 0 0 1-9.97-18.446v-.005a7.02 7.02 0 0 1 4.56-6.575m39.776-.446a2 2 0 0 1 .255-.31 17.94 17.94 0 0 0 5.255-12.686V64.87a2.91 2.91 0 0 0-2.907-2.908H89.723a2.91 2.91 0 0 0-2.908 2.908v24.804c0 4.758 1.89 9.321 5.255 12.686q.144.144.255.31zm-4.271 22.977a17.896 17.896 0 0 0 9.781-15.951v-.005a2.865 2.865 0 0 0-2.867-2.867H89.683a2.867 2.867 0 0 0-2.868 2.867v.005a17.9 17.9 0 0 0 17.897 17.897h9.898c2.83 0 5.591-.671 8.071-1.924zM72.692 25.064a2.078 2.078 0 0 1 4.154 0v29.908c0 1.147-.93 2.077-2.077 2.077H24.923a2.077 2.077 0 0 1-2.077-2.077V25.064a2.078 2.078 0 0 1 4.154 0v27.831h45.692z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgBathroom;
