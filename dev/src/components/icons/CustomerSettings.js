import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgCustomerSettings = (props) =>{const {layerProps}=useLayerContext
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
      d="M84.753 21.125c2.854.265 5.316 2.264 6.103 5.05.295.983.59 2.065.886 3.01a3 3 0 0 0 2.066 1.988c3.346.974 6.495 2.303 9.546 3.966v.01a3.02 3.02 0 0 0 2.854.01v-.02a93 93 0 0 0 2.756-1.476 7.13 7.13 0 0 1 7.971.777v.01c2.362 2.047 4.625 4.271 6.593 6.672v.01c1.87 2.224 2.166 5.364.788 7.912-.492.916-.984 1.9-1.476 2.766a2.87 2.87 0 0 0 0 2.814v.01c1.673 3.042 3.051 6.26 4.035 9.596v.02c.295.954.984 1.702 1.968 1.988.984.295 1.968.6 2.952.885 2.854.817 4.822 3.268 5.117 6.17v.02c.197 3.13.197 6.28 0 9.409v.02c-.295 2.892-2.263 5.323-5.117 6.15-.984.295-2.066.61-2.952.886-.984.285-1.772 1.043-1.968 2.008-.984 3.336-2.362 6.554-4.035 9.604v.02a2.85 2.85 0 0 0 0 2.805v.019c.492.866.984 1.841 1.476 2.727 1.476 2.558 1.082 5.708-.788 7.952v.009c-1.968 2.392-4.231 4.615-6.593 6.653 0 0-.098-.001-.098.009-2.165 1.86-5.314 2.165-7.873.778-.885-.482-1.87-1.023-2.756-1.505a3.02 3.02 0 0 0-2.854.009v.01a47.7 47.7 0 0 1-9.546 3.985c-.984.276-1.77 1.024-2.066 1.978v.03c-.295.935-.59 1.998-.886 2.973-.787 2.804-3.249 4.812-6.103 5.078h-.098c-3.05.246-6.2.245-9.349-.02-2.952-.256-5.411-2.264-6.199-5.039-.295-.994-.59-2.067-.886-3.022-.295-.964-.984-1.712-1.968-1.987a48 48 0 0 1-9.645-3.966v-.01a3 3 0 0 0-2.855 0v.01c-.885.452-1.77.994-2.754 1.476-2.46 1.407-5.61 1.093-7.873-.767v-.02c-2.46-2.038-4.626-4.261-6.693-6.662v-.011a7.09 7.09 0 0 1-.786-7.922c.492-.905.984-1.889 1.476-2.765a2.87 2.87 0 0 0 0-2.815v-.01c-1.673-3.04-2.952-6.259-3.936-9.585v-.02c-.295-.964-1.084-1.712-2.068-1.988v-.01c-.886-.285-1.969-.6-2.953-.886-2.755-.816-4.821-3.257-5.117-6.16v-.03c-.196-3.13-.197-6.278.099-9.407v-.01c.196-2.894 2.263-5.334 5.018-6.15.984-.306 2.068-.621 3.052-.897a3.09 3.09 0 0 0 1.969-1.998v-.01c.984-3.336 2.263-6.553 3.936-9.604v-.01a2.85 2.85 0 0 0 0-2.805v-.03c-.492-.866-.984-1.83-1.476-2.725-1.378-2.56-1.084-5.709.786-7.943v-.019c2.067-2.391 4.233-4.615 6.693-6.643v-.01c2.264-1.86 5.314-2.175 7.873-.787a43 43 0 0 1 2.754 1.506 3 3 0 0 0 2.855-.01 48.6 48.6 0 0 1 9.645-3.996 3.06 3.06 0 0 0 1.968-1.978v-.03c.295-.935.591-1.997.886-2.971.788-2.795 3.247-4.813 6.2-5.069a59.4 59.4 0 0 1 9.446.01m-.392 4.153a55.4 55.4 0 0 0-8.759-.01 2.79 2.79 0 0 0-2.46 2.086c-.295.984-.69 2.067-.886 3.022-.69 2.312-2.56 4.123-4.823 4.793a43.3 43.3 0 0 0-8.759 3.63 7.17 7.17 0 0 1-6.889.02c-.886-.472-1.869-1.003-2.754-1.476v-.01c-1.083-.58-2.363-.452-3.249.315-2.263 1.88-4.23 3.937-6.198 6.161-.69.916-.887 2.205-.297 3.258.493.895 1.083 1.889 1.477 2.764a6.97 6.97 0 0 1 0 6.801c-1.477 2.785-2.755 5.728-3.64 8.76-.591 2.341-2.462 4.172-4.823 4.85-.886.276-1.969.591-2.953.887v.01a2.82 2.82 0 0 0-2.066 2.52 43 43 0 0 0 0 8.718c.098 1.19.885 2.195 2.066 2.53.984.285 2.067.6 3.05.895 2.264.68 4.135 2.509 4.725 4.822.886 3.04 2.165 5.984 3.64 8.75a7.07 7.07 0 0 1 0 6.849c-.393.856-.983 1.83-1.475 2.725v.02c-.591 1.053-.393 2.342.296 3.257a69 69 0 0 0 6.198 6.181c.886.758 2.265.875 3.249.305a187 187 0 0 1 2.754-1.505c2.165-1.152 4.724-1.143 6.791.028a48.4 48.4 0 0 0 8.76 3.612c2.361.669 4.23 2.49 4.92 4.823.295.944.59 2.008.886 2.982v.019c.295 1.152 1.28 1.968 2.46 2.087 2.953.236 5.807.236 8.76.009 1.18-.118 2.164-.945 2.558-2.086.295-.994.59-2.076.886-3.021.689-2.322 2.458-4.133 4.82-4.793a43.3 43.3 0 0 0 8.759-3.641c2.067-1.181 4.725-1.19 6.791-.019.886.472 1.871 1.003 2.757 1.485v.01c1.082.571 2.36.443 3.246-.315a49.5 49.5 0 0 0 6.201-6.161c.787-.925.884-2.213.294-3.257-.492-.905-.984-1.89-1.476-2.766a6.97 6.97 0 0 1 0-6.8c1.574-2.785 2.756-5.727 3.642-8.768.689-2.332 2.461-4.173 4.823-4.852.885-.276 1.968-.59 2.952-.885 1.181-.335 1.968-1.339 2.164-2.53a64 64 0 0 0 0-8.72c-.098-1.19-.983-2.184-2.164-2.518-.984-.296-2.067-.61-2.952-.896-2.362-.689-4.134-2.52-4.823-4.832-.886-3.041-2.068-5.974-3.642-8.749a7.05 7.05 0 0 1 0-6.84c.492-.866.984-1.84 1.476-2.736v-.02c.59-1.042.493-2.331-.294-3.246a49.7 49.7 0 0 0-6.201-6.181c-.886-.758-2.164-.886-3.246-.315a95 95 0 0 1-2.757 1.506c-2.165 1.161-4.724 1.15-6.791-.02a43.2 43.2 0 0 0-8.759-3.622c-2.362-.669-4.132-2.489-4.82-4.821-.296-.945-.591-2.008-.886-2.973v-.03c-.394-1.141-1.378-1.967-2.559-2.076m-4.33 15.313c5.314 0 10.43 1.132 15.056 3.18 13.187 5.806 22.34 18.963 22.34 34.247 0 20.646-16.73 37.415-37.396 37.415-20.667 0-37.495-16.769-37.495-37.416 0-20.656 16.828-37.426 37.495-37.426m21.944 62.394c6.889-6.092 11.318-15.028 11.318-24.967 0-18.354-14.958-33.254-33.262-33.254-18.404 0-33.265 14.9-33.265 33.253 0 9.94 4.33 18.876 11.318 24.968 1.18-10.993 10.63-19.545 21.947-19.545s20.665 8.552 21.944 19.545m-39.857 3.041c5.118 3.316 11.319 5.245 17.913 5.245s12.694-1.929 17.91-5.245c-.295-9.694-8.266-18.413-17.91-18.413-9.743 0-17.716 8.719-17.913 18.413m17.913-50.565c6.593 0 12.005 5.412 12.005 12.085 0 6.662-5.412 12.075-12.005 12.075-6.692 0-12.106-5.413-12.106-12.075 0-6.673 5.414-12.085 12.106-12.085m0 4.163c-4.429 0-7.971 3.552-7.971 7.922s3.542 7.912 7.97 7.912c4.33 0 7.874-3.543 7.874-7.912 0-4.37-3.543-7.922-7.873-7.922"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgCustomerSettings;
