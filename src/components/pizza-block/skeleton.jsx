import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="10" y="236" rx="0" ry="0" width="260" height="27" />
        <rect x="10" y="290" rx="0" ry="0" width="260" height="88" />
        <rect x="10" y="427" rx="0" ry="0" width="90" height="27" />
        <rect x="113" y="419" rx="10" ry="10" width="153" height="45" />
        <circle cx="120" cy="81" r="2" />
        <circle cx="140" cy="110" r="110" />
    </ContentLoader>
)

export default Skeleton