import * as React from "react";
const SvgMoodboard = (props) =>{const {layerProps}=useLayerConstext();return(
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
      d="M32.862 104.207a22.2 22.2 0 0 1-5.255-14.367 22.2 22.2 0 0 1 5.255-14.367v-51.84c0-1.148.93-2.077 2.076-2.077h9.97c1.147 0 2.077.93 2.077 2.077v44.11a22.5 22.5 0 0 1 5.815 0v-27.75c0-1.146.93-2.076 2.077-2.076h39.017l2.907-2.908-3.515-3.515a2.077 2.077 0 0 1 0-2.938l4.984-4.984a2.076 2.076 0 0 1 2.937 0l3.516 3.515 3.516-3.515a2.08 2.08 0 0 1 2.938 0l3.515 3.515 3.517-3.515a2.077 2.077 0 0 1 2.937 0l3.516 3.515 3.516-3.515a2.077 2.077 0 0 1 2.937 0l4.985 4.984c.787.788.813 2.057.058 2.876l-3.296 3.577 3.296 3.577c.755.82.729 2.089-.058 2.877l-3.517 3.515 3.517 3.517a2.077 2.077 0 0 1 0 2.937l-3.517 3.516 3.517 3.516a2.077 2.077 0 0 1 0 2.937l-4.985 4.985a2.077 2.077 0 0 1-2.937 0l-3.516-3.516-3.516 3.516a2.077 2.077 0 0 1-2.972-.036l-3.316-3.48-3.716 3.55a2.076 2.076 0 0 1-2.939-.072l-1.403-1.475v29.79a74 74 0 0 1 5.832-4.851c.223-5.88 2.649-9.889 5.912-12.189 5.257-3.704 12.921-3.024 18.164 1.925.431.406.667.973.651 1.565v.002c-.168 6.318-2.853 10.448-6.406 12.747-4.882 3.158-11.563 2.815-16.285-.392a71 71 0 0 0-7.868 6.96v19.318c0 1.147-.93 2.077-2.077 2.077H91.846c-3.668 7.455-5.048 12.886-5.048 12.886a2.08 2.08 0 0 1-2.525 1.501 2.08 2.08 0 0 1-1.501-2.525s1.246-4.901 4.496-11.862H54.877a2.077 2.077 0 0 1-2.077-2.077v-7.811a22.5 22.5 0 0 1-5.815 0v22.765c0 1.147-.93 2.076-2.077 2.076h-9.97a2.076 2.076 0 0 1-2.076-2.076zm4.153-32.552a22.2 22.2 0 0 1 5.816-2.956V25.71h-5.816zm19.939-2.956c8.842 2.956 15.223 11.31 15.223 21.141a22.2 22.2 0 0 1-5.543 14.702c.192 1.254.29 2.524.29 3.8v9.329h15.784V85.307c0-3.252-.758-6.46-2.212-9.37l-5.317-10.634a23.1 23.1 0 0 1-2.44-10.336V42.07h-5.816V63.51a2.078 2.078 0 0 1-4.154 0V42.07h-5.815zm5.813 39.328a22.2 22.2 0 0 1-5.813 2.954v6.69h5.815v-9.329q0-.158-.002-.315m-19.936 2.954a22.2 22.2 0 0 1-5.816-2.956v24.6h5.816zm7.061-39.272c-10.006 0-18.13 8.124-18.13 18.131s8.124 18.131 18.13 18.131c10.007 0 18.131-8.124 18.131-18.131S59.9 71.709 49.893 71.709M82.708 42.07h-5.816v12.896c0 2.943.686 5.845 2.002 8.478l5.317 10.634a25.1 25.1 0 0 1 2.65 11.228v32.364h2.472c3.078-5.827 7.403-12.539 13.313-18.876V64.873l-1.402 1.475a2.08 2.08 0 0 1-2.974.038L93.286 61.4a2.077 2.077 0 0 1 0-2.937l3.515-3.516-3.515-3.516a2.077 2.077 0 0 1 0-2.937l3.515-3.517-2.907-2.907h-7.032v10.904c0 2.325.54 4.617 1.58 6.696l5.738 11.476a25.1 25.1 0 0 1 2.65 11.228v19.031a2.077 2.077 0 0 1-4.153 0V82.375c0-3.253-.758-6.461-2.212-9.37l-5.738-11.477a19.1 19.1 0 0 1-2.02-8.553zm11.32 75.6h8.618v-12.623c-3.547 4.279-6.384 8.625-8.619 12.623m3.663-87.646 3.516 3.516a2.077 2.077 0 0 1 0 2.937l-3.516 3.516 3.516 3.516a2.077 2.077 0 0 1 0 2.937l-3.516 3.516 3.516 3.516a2.077 2.077 0 0 1 0 2.938l-3.516 3.515 2.01 2.01 3.517-3.697a2.076 2.076 0 0 1 3.01 0l3.55 3.733 3.715-3.548a2.08 2.08 0 0 1 2.938.07l3.282 3.444 3.48-3.48a2.077 2.077 0 0 1 2.937 0l3.516 3.516 2.048-2.048-3.516-3.515a2.077 2.077 0 0 1 0-2.938l3.516-3.516-3.516-3.516a2.077 2.077 0 0 1 0-2.937l3.575-3.575-3.242-3.518a2.076 2.076 0 0 1 0-2.815l3.242-3.518-2.107-2.107-3.516 3.517a2.077 2.077 0 0 1-2.937 0l-3.516-3.517-3.516 3.517a2.077 2.077 0 0 1-2.937 0l-3.516-3.517-3.516 3.517a2.077 2.077 0 0 1-2.937 0l-3.516-3.517zm35.465 51.93c-3.691-2.98-8.702-3.414-12.219-.936-1.704 1.2-3.011 3.071-3.678 5.606a70 70 0 0 1 6.485-3.632 2.078 2.078 0 0 1 1.835 3.726 67 67 0 0 0-7.192 4.119c3.226 1.55 7.257 1.51 10.31-.464 2.406-1.557 4.13-4.336 4.459-8.418m-60.755-3.764a2.078 2.078 0 0 1 3.433-2.34c.99 1.455 1.868 3.138 2.578 5.153a2.078 2.078 0 0 1-3.917 1.382c-.578-1.64-1.288-3.012-2.094-4.195"
      clipRule="evenodd"
    />
  </svg>)}
export default SvgMoodboard;
