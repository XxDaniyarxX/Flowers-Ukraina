import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={336}
    height={321}
    viewBox="0 0 336 321"
    backgroundColor="#d4d4d4"
    foregroundColor="#1c1c1c"
    {...props}
  >
    <rect x="0" y="0" rx="25" ry="25" width="336" height="321" />
  </ContentLoader>
)

export default MyLoader

