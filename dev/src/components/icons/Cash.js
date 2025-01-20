import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgCash = (props) =>{const {layerProps}=useLayerContext
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
      d="m27.762 84.402-3.557-20.171c-.14-.801.199-1.611.869-2.072 0 0 .906-.629 2.688-1.566v-5.8c0-.813.475-1.551 1.215-1.89 0 0 19.707-9.1 51.359-.108q1.814.515 3.567.954.252-.06.522-.055c26.219.619 39.223-8.885 39.223-8.885a2.076 2.076 0 0 1 3.282 1.309l1.268 7.192c.576-.232.869-.375.869-.375a2.076 2.076 0 0 1 3.004 1.858v20.483l3.526 20a2.08 2.08 0 0 1-.809 2.03s-.903.675-2.717 1.672v5.732c0 .787-.445 1.506-1.15 1.858 0 0-18.765 9.502-51.72.139q-1.65-.468-3.251-.869a2 2 0 0 1-.524.055c-25.517-.561-39.33 8.846-39.33 8.846-.582.4-1.328.477-1.98.205a2.08 2.08 0 0 1-1.243-1.555l-1.26-7.153c-.603.224-.912.363-.912.363a2.075 2.075 0 0 1-2.939-1.889zm29.624 18.609c-9.835-.491-17.28.813-21.775 1.985l.837 4.744c3.574-1.879 10.642-4.983 20.938-6.729m70.531-27.585V57.843c-6.521 2.215-23.447 6.128-48.717-1.052-25.436-7.226-42.704-2.231-47.284-.583v45.529c6.595-2.11 23.932-5.982 48.42.975 26.451 7.515 43.2 2.327 47.581.626V75.426M78.953 81.73c.767 3.922.312 6.78-.598 8.848a10 10 0 0 1-1.088 1.894h12.637a2.078 2.078 0 0 1 0 4.154H70.243a2.077 2.077 0 0 1-.283-4.135s3.218-.464 4.593-3.587c.736-1.672.936-3.978.168-7.174h-3.962a2.078 2.078 0 0 1 0-4.154h2.6a43 43 0 0 0-.474-1.126c-4.539-10.368 9.933-18.798 15.909-9.187a2.078 2.078 0 0 1-3.528 2.194c-3.284-5.283-11.07-.37-8.576 5.328q.639 1.46 1.107 2.79h7.922a2.078 2.078 0 0 1 0 4.155zm23.577-25.1c9.936.534 17.272-.794 21.682-2.004l-.844-4.785c-3.53 1.937-10.463 5.062-20.838 6.79"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgCash;
