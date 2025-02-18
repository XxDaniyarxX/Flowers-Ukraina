import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={692}
    height={396}
    viewBox="0 0 692 396"
    backgroundColor="#d4d4d4"
    foregroundColor="#1c1c1c"
    {...props}
  >
    <rect x="0" y="0" rx="9" ry="9" width="692" height="396" />
  </ContentLoader>
)

export default MyLoader

