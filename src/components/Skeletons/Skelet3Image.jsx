import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={460}
    height={513}
    viewBox="0 0 460 513"
    backgroundColor="#ababab"
    foregroundColor="#1c1c1c"
    {...props}
  >
    <rect x="0" y="0" rx="21" ry="21" width="460" height="513" />
  </ContentLoader>
)

export default MyLoader

