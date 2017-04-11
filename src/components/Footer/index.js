import React from "react"

// import Svg from "react-svg-inline"
// import facebookSvg from "../icons/iconmonstr-facebook-3.svg"
// import instagramSvg from "../icons/iconmonstr-instagram-6.svg"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    Created by Conan
    {/* If you like Phenomic, this is a way to share the love ;)
    <ul className={ styles.socialLinks }>
      <li>
        <a
          href={ `https://www.facebook.com/brianrc` }
          className={ styles.link }
          target="_blank"
          rel="me noopener noreferrer"
        >
          <Svg svg={ facebookSvg } cleanup />
        </a>
      </li>
      <li>
        <a
          href={ `https://www.instagram.com/briancruikshank` }
          className={ styles.link }
          target="_blank"
          rel="me noopener noreferrer"
        >
          <Svg svg={ instagramSvg } cleanup />
        </a>
      </li>
    </ul> */}
  </footer>
)

export default Footer
