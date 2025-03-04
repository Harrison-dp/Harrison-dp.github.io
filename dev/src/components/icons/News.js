import * as React from "react";
import { useLayerContext } from "../../context/brandLayers";

const SvgNews = (props) =>{const {layerProps}=useLayerContext
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
      d="M114.967 127.084h-70c-6.6 0-12-5.41-12-12.08v-75c0-3.91 3.1-7.08 7-7.08h60c4 0 7.099 3.17 7.099 7.08v12.92h12.901c4 0 7.099 3.17 7.099 7.08v55c0 6.67-5.399 12.08-12.099 12.08m-12-12.08v-75c0-1.61-1.3-2.92-3-2.92h-60c-1.6 0-2.9 1.31-2.9 2.92v75c0 4.37 3.6 7.92 7.9 7.92h60.9c-1.8-2.12-2.9-4.89-2.9-7.92m4.099-57.92v57.92c0 4.37 3.601 7.92 7.901 7.92 4.4 0 8-3.55 8-7.92v-55c0-1.61-1.3-2.92-3-2.92zm-14.6-14.16c2.6 0 4.6 2.05 4.6 4.58v5c0 2.53-2 4.58-4.6 4.58h-45c-2.5 0-4.5-2.05-4.5-4.58v-5c0-2.53 2-4.58 4.5-4.58zm0 4.16h-45c-.2 0-.4.19-.4.42v5c0 .23.2.42.4.42h45c.3 0 .5-.19.5-.42v-5c0-.23-.2-.42-.5-.42m-47.5 20c-1.1 0-2-.93-2-2.08s.9-2.08 2-2.08h20c1.2 0 2.1.93 2.1 2.08s-.9 2.08-2.1 2.08zm30 40c-1.1 0-2-.93-2-2.08s.9-2.08 2-2.08h20c1.2 0 2.1.93 2.1 2.08s-.9 2.08-2.1 2.08zm-30-30c-1.1 0-2-.93-2-2.08s.9-2.08 2-2.08h20c1.2 0 2.1.93 2.1 2.08s-.9 2.08-2.1 2.08zm0 10c-1.1 0-2-.93-2-2.08s.9-2.08 2-2.08h20c1.2 0 2.1.93 2.1 2.08s-.9 2.08-2.1 2.08zm0 30c-1.1 0-2-.93-2-2.08s.9-2.08 2-2.08h20c1.2 0 2.1.93 2.1 2.08s-.9 2.08-2.1 2.08zm47.5-54.16c1.3 0 2.4.48 3.3 1.34.8.86 1.3 2.03 1.3 3.24v25c0 1.22-.5 2.38-1.3 3.24-.9.86-2 1.34-3.3 1.34h-15c-1.2 0-2.3-.48-3.2-1.34s-1.3-2.02-1.3-3.24v-25c0-1.21.4-2.38 1.3-3.24s2-1.34 3.2-1.34zm0 4.16h-15c-.1 0-.2.05-.3.13 0 .07-.1.18-.1.29v25c0 .11.1.22.1.3.1.07.2.12.3.12h15c.2 0 .3-.05.3-.12.1-.08.2-.19.2-.3v-25c0-.11-.1-.22-.2-.29 0-.08-.1-.13-.3-.13m-17.5 50c-1.1 0-2-.93-2-2.08s.9-2.08 2-2.08h20c1.2 0 2.1.93 2.1 2.08s-.9 2.08-2.1 2.08zm-30-10c-1.1 0-2-.93-2-2.08s.9-2.08 2-2.08h20c1.2 0 2.1.93 2.1 2.08s-.9 2.08-2.1 2.08zm0-10c-1.1 0-2-.93-2-2.08s.9-2.08 2-2.08h20c1.2 0 2.1.93 2.1 2.08s-.9 2.08-2.1 2.08z"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgNews;
