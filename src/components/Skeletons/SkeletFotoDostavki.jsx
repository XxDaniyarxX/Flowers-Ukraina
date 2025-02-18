import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={359}
    height={494}
    viewBox="0 0 359 494"
    backgroundColor="#d4d4d4"
    foregroundColor="#1c1c1c"
    {...props}
  >
    <rect x="0" y="0" rx="9" ry="9" width="359" height="494" />
  </ContentLoader>
)

export default MyLoader

