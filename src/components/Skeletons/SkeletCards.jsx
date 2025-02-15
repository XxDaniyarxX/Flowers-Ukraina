import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={340}
    height={544}
    viewBox="0 0 340 544"
    backgroundColor="#ababab"
    foregroundColor="#1c1c1c"
    {...props}
  >
    <rect x="0" y="0" rx="21" ry="21" width="340" height="544" />
  </ContentLoader>
)

export default MyLoader


