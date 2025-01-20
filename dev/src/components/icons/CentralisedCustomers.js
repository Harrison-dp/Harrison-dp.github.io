import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgCentralisedCustomers = (props) =>{const {layerProps}=useLayerContext
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
      d="M37.401 64.133c-2.887-.889-5.01-3.585-5.01-6.77 0-3.91 3.17-7.083 7.104-7.083 3.905 0 7.075 3.173 7.075 7.084 0 3.184-2.123 5.88-5.01 6.769v3.04c0 .772.312 1.513.85 2.06a2.97 2.97 0 0 0 2.066.854h16.98a2.08 2.08 0 0 1 2.065 2.083 2.08 2.08 0 0 1-2.065 2.086h-16.98a7.1 7.1 0 0 1-5.01-2.078 7.06 7.06 0 0 1-2.065-5.006zm2.094-3.854c1.585 0 2.915-1.308 2.915-2.915 0-1.61-1.33-2.918-2.915-2.918-1.613 0-2.943 1.308-2.943 2.918 0 1.607 1.33 2.915 2.943 2.915m-2.717 24.456a7.06 7.06 0 0 1-6.764 5c-3.905 0-7.074-3.175-7.074-7.083 0-3.91 3.169-7.083 7.074-7.083a7.06 7.06 0 0 1 6.764 5h25.668c1.16 0 2.094.931 2.094 2.083a2.087 2.087 0 0 1-2.094 2.083zm-3.849-2.083a2.915 2.915 0 1 0-5.83 0 2.914 2.914 0 1 0 5.83 0m89.71-18.519v3.04c0 1.876-.736 3.678-2.066 5.005a7.1 7.1 0 0 1-5.009 2.078h-16.98a2.08 2.08 0 0 1-2.065-2.086c0-1.149.934-2.083 2.066-2.083h16.979c.765 0 1.501-.306 2.067-.855a2.95 2.95 0 0 0 .849-2.06v-3.039a7.07 7.07 0 0 1-5.01-6.77c0-3.91 3.17-7.083 7.075-7.083s7.103 3.173 7.103 7.084c0 3.184-2.122 5.88-5.009 6.769m-2.094-3.854a2.914 2.914 0 0 0 2.915-2.915 2.915 2.915 0 1 0-5.829 0 2.914 2.914 0 0 0 2.914 2.915m2.689 24.456h-25.64a2.087 2.087 0 0 1-2.094-2.083c0-1.152.934-2.082 2.094-2.082h25.64c.905-2.896 3.594-5.001 6.791-5.001 3.906 0 7.075 3.172 7.075 7.083 0 3.908-3.169 7.084-7.075 7.084-3.197 0-5.886-2.109-6.791-5m3.877-2.083a2.915 2.915 0 1 0 5.83 0 2.915 2.915 0 1 0-5.83 0M40.91 99.68c.424.906.65 1.91.65 2.972 0 3.908-3.169 7.083-7.074 7.083s-7.075-3.175-7.075-7.083c0-3.912 3.17-7.084 7.075-7.084 1.33 0 2.575.368 3.65 1.008l4.019-4.03a7.1 7.1 0 0 1 5.01-2.075h8.29c1.133 0 2.067.934 2.067 2.083a2.08 2.08 0 0 1-2.066 2.083h-8.292a2.93 2.93 0 0 0-2.066.855zm-4.245 1.039a2.9 2.9 0 0 0-2.18-.985 2.915 2.915 0 0 0-2.914 2.918 2.915 2.915 0 1 0 5.83 0c0-.716-.255-1.373-.68-1.882-.028-.017-.028-.034-.056-.051m82.465-1.039-4.188-4.188a2.98 2.98 0 0 0-2.066-.855h-8.292a2.08 2.08 0 0 1-2.066-2.083c0-1.149.934-2.083 2.066-2.083h8.292c1.868 0 3.679.745 5.009 2.075l4.019 4.03a7.1 7.1 0 0 1 3.65-1.008c3.906 0 7.075 3.172 7.075 7.084 0 3.908-3.169 7.083-7.075 7.083-3.905 0-7.074-3.175-7.074-7.083 0-1.062.226-2.066.65-2.972m4.189 1.09a2.93 2.93 0 0 0-.68 1.882 2.915 2.915 0 1 0 5.83 0 2.914 2.914 0 0 0-2.915-2.918c-.877 0-1.641.382-2.179.985-.028.017-.028.034-.056.051M80.02 53.928c6.679 0 12.084 5.414 12.084 12.084 0 6.667-5.405 12.084-12.084 12.084s-12.084-5.417-12.084-12.084c0-6.67 5.405-12.084 12.084-12.084m0 4.166c-4.358 0-7.924 3.548-7.924 7.918s3.566 7.915 7.924 7.915 7.924-3.546 7.924-7.915c0-4.37-3.566-7.918-7.924-7.918m-17.914 45.908a2.09 2.09 0 0 1-2.094 2.085 2.087 2.087 0 0 1-2.094-2.085c0-12.192 9.905-22.091 22.102-22.091s22.102 9.9 22.102 22.091a2.09 2.09 0 0 1-2.094 2.085 2.09 2.09 0 0 1-2.094-2.085c0-9.891-8.009-17.925-17.914-17.925s-17.914 8.034-17.914 17.925"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgCentralisedCustomers;
