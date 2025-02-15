import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={1420}
    height={650}
    viewBox="0 0 1420 650"
    backgroundColor="#d4d4d4"
    foregroundColor="#1c1c1c"
    {...props}
  >
    <rect x="0" y="0" rx="28" ry="28" width="1420" height="650" />
  </ContentLoader>
)

export default MyLoader

