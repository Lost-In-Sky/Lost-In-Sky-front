import React, { useState } from "react";
import image1 from "../../assets/GalleryImg/image1.jpeg";
import image2 from "../../assets/GalleryImg/image2.jpeg";
import image3 from "../../assets/GalleryImg/image3.jpeg";
import image4 from "../../assets/GalleryImg/image4.jpeg";
import image5 from "../../assets/GalleryImg/image5.jpeg";
import image6 from "../../assets/GalleryImg/image6.jpeg";
import image7 from "../../assets/GalleryImg/image7.jpeg";
import image8 from "../../assets/GalleryImg/image8.jpeg";
import image9 from "../../assets/GalleryImg/image9.jpeg";
import image10 from "../../assets/GalleryImg/image10.jpeg";
import image11 from "../../assets/GalleryImg/image11.jpeg";
import image12 from "../../assets/GalleryImg/image12.jpeg";
import image13 from "../../assets/GalleryImg/image13.jpeg";
import image14 from "../../assets/GalleryImg/image14.jpeg";
import image15 from "../../assets/GalleryImg/image15.jpeg";
import image16 from "../../assets/GalleryImg/image16.jpeg";
import image17 from "../../assets/GalleryImg/image17.jpeg";
import image18 from "../../assets/GalleryImg/image18.jpeg";
import image19 from "../../assets/GalleryImg/image19.jpeg";
import {
  ImagesWrapper,
  SelectedImageWrapper,
  GalleryWrapper,
} from "./Gallery.style";
import { Modal } from "@mui/material";

function Gallery() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleClick = (index) => {
    setSelectedImage(index);
    setShowImage(true);
    document.body.style.overflow = 'auto !important';
  };

  const previousImage = () => {
    if (selectedImage !== 0) {
      setSelectedImage(selectedImage - 1)
    }
    else {
      setSelectedImage(images.length - 1)
    }
  }

  const nextImage = () => {
    if (selectedImage !== images.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
    else {
      setSelectedImage(0)
    }
  }
  return (
    <GalleryWrapper>
      <ImagesWrapper>
        {images.map((image, index) => (
          <div key={index} className="gallery-image-wrapper">
            <img
              src={image}
              alt={`${index + 1}`}
              className="gallery-image"
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </ImagesWrapper>
      <Modal
        open={showImage}
        onClose={() => setShowImage(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="image-modal"
        BackdropProps={{ onClick: () => setShowImage(false) }}
        disableScrollLock={true}
      >
        <SelectedImageWrapper
          className={selectedImage !== null ? "fade-in" : ""}
        >
          <button className="slick-left" onClick={previousImage}></button>
          <img
            src={images[selectedImage]}
            alt={`${selectedImage + 1}`}
            className="selected"
          />
          <button className="slick-right" onClick={nextImage}></button>
        </SelectedImageWrapper>
      </Modal>
    </GalleryWrapper>
  );
}

export default Gallery;
