import React from 'react';
import { useSwipeable } from 'react-swipeable';
import Pizzapalo from './pizzapalo';
import Distro from './distro';

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
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Distro />
        <p className="text-xl">Distro Project Description</p>
      </div>
      <div>
        <Pizzapalo />
        <p className="text-xl">Pizzapalo Project Description</p>
      </div>
    </div>
  );
};

export default Projects;
