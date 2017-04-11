import React from "react"

import Page from "../Page"
// import styles from "./index.css"
import Gallery from 'react-grid-gallery'
import ImageSlider from '../../components/ImageSlider'
import images from '../../../content/assets/center-photos/images.js'

const CenterPhotos = (props) => {
  return (
    <div>
      <Page
        { ...props }
      >
      </Page>
      <Gallery images={images} enableImageSelection={false} backdropClosesModal={true} rowHeight={500} lightboxWidth={1536} />
    </div>
  )
}

export default CenterPhotos
