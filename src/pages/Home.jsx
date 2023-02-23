import React, { useState } from 'react'

import { ImageOverlay, ImageShape } from '../components'

import "../styles/Home.scss"
import "../styles/constants.scss"

import petra from '../assets/petra.jpg'
import machuPicchu from '../assets/machu-picchu.jpg'
import tajMahal from '../assets/taj-mahal.jpeg'
import colosseum from '../assets/colosseum.jpeg'

const images = [
  {
    imgSrc: machuPicchu,
    altText: "An aerial view of Machu Picchu in Peru",
    imgTitle: "Machu Picchu",
    shape: "square",
  },
  {
    imgSrc: tajMahal,
    altText: "A front view of the front of the Taj Mahal in Agra, India",
    imgTitle: "Taj Mahal",
    shape: "triangle",
  },
  {
    imgSrc: colosseum,
    altText: "A view of the front of the Colosseum in Rome, Italy",
    imgTitle: "Colosseum",
    shape: "circle",
  },
  {
    imgSrc: petra,
    altText: "A front view of the of Petra in Jordan",
    imgTitle: "Petra",
    shape: "rectangle",
  },
]

const Home = () => {
  const [imgOverlay, setImgOverlay] = useState(false)
  const [altText, setAltText] = useState("")
  const [imgTitle, setImgTitle] = useState("")

  const closeOverlay = () => {
    setImgOverlay(false)
    setAltText("")
    setImgTitle("")
  }

  return (
    <div className="homeContainer">
      <h1 className="pageTitle">Wonders of the World</h1>
      <div className="imageFlexBox">
        { images.map(({ imgSrc, altText, shape, imgTitle }, i) => {
          const handleClick = () => {
            setImgOverlay(imgSrc)
            setAltText(altText ? altText : imgSrc)
            setImgTitle( imgTitle )
            window.scrollTo(0, 0)
          }
          return (
            <ImageShape
              imgSrc={ imgSrc }
              altText={ altText ? altText : imgSrc }
              shape={ shape }
              key={ i }
              onClick={ handleClick }
            />
          )
        }) }
      </div>
      { imgOverlay ? <ImageOverlay imgSrc={ imgOverlay } altText={ altText } imgTitle={ imgTitle } onClick={ closeOverlay } /> : null }
    </div>
  )
}

export default Home