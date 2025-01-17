import * as React from "react";
const SvgTimeCalculation = (props) =>{const {layerProps}=useLayerConstext();return(
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
      d="M73.3 127.16H45c-6.6 0-12-5.41-12-12.08v-80C33 28.41 38.4 23 45 23h60c6.7 0 12.102 5.41 12.102 12.08V83.3c6.2 5.67 10 13.8 10 22.809 0 17.14-13.9 31.051-31 31.051-9 0-17.201-3.85-22.801-10m39.7-47.1V35.08c0-4.37-3.6-7.92-8-7.92H45c-4.3 0-7.898 3.55-7.898 7.92v80c0 4.37 3.598 7.92 7.898 7.92h25c-3.1-4.86-5-10.661-5-16.891a30.4 30.4 0 0 1 3.602-14.399c-1.9-1.76-3.102-4.27-3.102-7.06 0-5.29 4.3-9.59 9.5-9.59 2.9 0 5.501 1.26 7.201 3.25 4.2-2.08 8.9-3.25 13.9-3.25 6.201 0 11.999 1.84 16.899 5m-42.2 7.98c2.1-2.94 4.7-5.49 7.7-7.54-.9-.79-2.1-1.27-3.5-1.27-2.9 0-5.398 2.42-5.398 5.42 0 1.28.499 2.46 1.199 3.39M52.5 98c5.3 0 9.602 4.29 9.602 9.58s-4.302 9.58-9.602 9.58c-5.2 0-9.5-4.29-9.5-9.58S47.3 98 52.5 98m0 4.16c-2.9 0-5.398 2.43-5.398 5.42S49.6 113 52.5 113c3 0 5.5-2.43 5.5-5.42s-2.5-5.42-5.5-5.42m0-27.1c5.3 0 9.602 4.3 9.602 9.59 0 5.28-4.302 9.58-9.602 9.58-5.2 0-9.5-4.3-9.5-9.58 0-5.29 4.3-9.59 9.5-9.59m0 4.17c-2.9 0-5.398 2.42-5.398 5.42 0 2.98 2.498 5.41 5.398 5.41 3 0 5.5-2.43 5.5-5.41 0-3-2.5-5.42-5.5-5.42M100 33c4 0 7.102 3.17 7.102 7.08v15c0 3.91-3.102 7.08-7.102 7.08H50c-3.9 0-7-3.17-7-7.08v-15c0-3.91 3.1-7.08 7-7.08zm0 4.16H50c-1.6 0-2.898 1.31-2.898 2.92v15C47.102 56.69 48.4 58 50 58h50c1.7 0 3-1.31 3-2.92v-15c0-1.61-1.3-2.92-3-2.92m-3.898 42.07c-14.9 0-26.9 12.05-26.9 26.879 0 14.84 12 26.891 26.9 26.891 14.8 0 26.898-12.051 26.898-26.891 0-14.83-12.098-26.88-26.898-26.88m1.5 28.36-8.702 8.63c-.8.82-2.1.82-2.9 0-.8-.81-.8-2.131 0-2.941l8-8.029V85.76c0-1.15.902-2.08 2.102-2.08 1.1 0 2.1.93 2.1 2.08v20.349c0 .56-.3 1.081-.6 1.481"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgTimeCalculation;
