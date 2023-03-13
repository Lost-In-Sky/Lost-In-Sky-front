import React from 'react'
import image1 from '../../assets/GalleryImg/image1.jpeg'
import image2 from '../../assets/GalleryImg/image2.jpeg'
import image3 from '../../assets/GalleryImg/image3.jpeg'
import image4 from '../../assets/GalleryImg/image4.jpeg'
import image5 from '../../assets/GalleryImg/image5.jpeg'
import image6 from '../../assets/GalleryImg/image6.jpeg'
import image7 from '../../assets/GalleryImg/image7.jpeg'
import image8 from '../../assets/GalleryImg/image8.jpeg'
import image9 from '../../assets/GalleryImg/image9.jpeg'
import image10 from '../../assets/GalleryImg/image10.jpeg'
import image11 from '../../assets/GalleryImg/image11.jpeg'
import image12 from '../../assets/GalleryImg/image12.jpeg'
import image13 from '../../assets/GalleryImg/image13.jpeg'
import image14 from '../../assets/GalleryImg/image14.jpeg'
import image15 from '../../assets/GalleryImg/image15.jpeg'
import image16 from '../../assets/GalleryImg/image16.jpeg'
import image17 from '../../assets/GalleryImg/image17.jpeg'
import image18 from '../../assets/GalleryImg/image18.jpeg'
import image19 from '../../assets/GalleryImg/image19.jpeg'
import { ImagesWrapper } from './Gallery.style'

function Gallery() {
  const images = [
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19
  ]
  return(
    <ImagesWrapper>
    {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} className="gallery-image" />
      ))}
    </ImagesWrapper>
  )
}

export default Gallery