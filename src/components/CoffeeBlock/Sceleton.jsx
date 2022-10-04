import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="418" y="560" rx="3" ry="3" width="380" height="6" />
    <rect x="446" y="567" rx="3" ry="3" width="178" height="6" />
    <circle cx="143" cy="141" r="130" />
    <rect x="0" y="290" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="327" rx="0" ry="0" width="280" height="84" />
    <rect x="0" y="437" rx="0" ry="0" width="90" height="27" />
    <rect x="151" y="428" rx="0" ry="0" width="126" height="44" />
  </ContentLoader>
);

export default MyLoader;
