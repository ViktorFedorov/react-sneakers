import React from "react"
import ContentLoader from "react-content-loader"
import styles from './skeleton.module.css'

const Skeleton = (props) => (
  <li className={styles.skeleton}>
    <ContentLoader
      speed={2}
      width={150}
      height={260}
      viewBox="0 0 150 260"
      backgroundColor="#cfcece"
      foregroundColor="#ffffff"
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
      <rect x="0" y="100" rx="10" ry="10" width="150" height="15" />
      <rect x="0" y="124" rx="10" ry="10" width="93" height="15" />
      <rect x="114" y="154" rx="10" ry="10" width="32" height="32" />
      <rect x="0" y="163" rx="10" ry="10" width="95" height="22" />
    </ContentLoader>
  </li>
)

export default Skeleton