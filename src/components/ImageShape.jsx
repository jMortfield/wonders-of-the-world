import "../styles/ImgOverlay.scss"

const ImageShape = ({ imgSrc, shape, className, onClick }) => {
  return (
    <div className="imageContainer">
      <div 
        className={`image ${shape} ${ className ? className : "" }`}
        style={{ backgroundImage: `url(${imgSrc})` }}  
        onClick={ onClick }
      />
    </div>
  )
}

export default ImageShape