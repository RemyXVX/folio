import React from 'react';
import { useSwipeable } from 'react-swipeable';


const Projects = () => {
  const images = [
    'https://example.com/image-url-1.jpg',
    'https://example.com/image-url-2.jpg',
    'https://example.com/image-url-3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
  });

  return (
    <div className="relative" {...handlers}>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
        onClick={prevImage}
      >
        Previous
      </button>

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={nextImage}
      >
        Next
      </button>

      <img
        src={images[currentImageIndex]}
        alt="carousel image"
        className="mx-auto"
      />
    </div>
  );
};

export default Projects;
