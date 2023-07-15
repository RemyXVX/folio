import React from 'react';
import { useSwipeable } from 'react-swipeable';

import coffeePage1 from "./../../assets/images/coffeecarousel/coffeelanding1.jpg";
import coffeePage2 from "./../../assets/images/coffeecarousel/coffeelanding2.jpg";
import coffeeAbout from "./../../assets/images/coffeecarousel/coffeeabout.jpg";
import coffeeContact from "./../../assets/images/coffeecarousel/coffeecontact.jpg";
import coffeeLogin from "./../../assets/images/coffeecarousel/coffeelogin.jpg";

const Distro = () => {
  const images = [
    coffeePage1,
    coffeePage2,
    coffeeAbout,
    coffeeContact,
    coffeeLogin
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
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white rounded p-2"
        onClick={prevImage}
      >
        Previous
      </button>

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white rounded p-2"
        onClick={nextImage}
      >
        Next
      </button>
      
      <img
        src={images[currentImageIndex].src}
        alt="carousel image"
        className="mx-auto"
      />
    </div>
  );
};

export default Distro;