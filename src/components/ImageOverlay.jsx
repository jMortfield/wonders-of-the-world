import "../styles/ImgOverlay.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ImageOverlay = ({ imgSrc, altText, imgTitle, onClick }) => {
  return (
    <div className="overlayContainer">
      <h2 className="pageTitle">{ imgTitle }</h2>
      <div className="overlayImageContainer">
        <img src={ imgSrc } alt={ altText } />
      </div>
      <FontAwesomeIcon className="exitButton" icon={ faXmark } onClick={ onClick } />
    </div>
  )
}

export default ImageOverlay