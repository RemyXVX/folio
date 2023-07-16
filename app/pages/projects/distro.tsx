import React from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

import coffeePage1 from "../../assets/images/coffeecarousel/coffeelanding1.jpg";
import coffeePage2 from "../../assets/images/coffeecarousel/coffeelanding2.jpg";
import coffeeAbout from "../../assets/images/coffeecarousel/coffeeabout.jpg";
import coffeeContact from "../../assets/images/coffeecarousel/coffeecontact.jpg";
import coffeeLogin from "../../assets/images/coffeecarousel/coffeelogin.jpg";

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
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white rounded p-2 z-10"
        onClick={prevImage}
      >
        Previous
      </button>

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white rounded p-2 z-10"
        onClick={nextImage}
      >
        Next
      </button>
      
      <div className="mx-auto">
        <Image
          src={images[currentImageIndex]}
          alt="carousel image"
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default Distro;
