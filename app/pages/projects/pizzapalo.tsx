import React from 'react';
import { useSwipeable } from 'react-swipeable';

import pizzaPage from "./../../assets/images/pizzacarousel/pizzalandingpage.jpg"
import menu1 from "./../../assets/images/pizzacarousel/pizzamenu1.jpg"
import menu2 from "./../../assets/images/pizzacarousel/pizzamenu2.jpg"
import pizzaContact from "./../../assets/images/pizzacarousel/pizzacontact.jpg"
import pizzaOrder from "./../../assets/images/pizzacarousel/pizzaordering.jpg"

const Pizzapalo = () => {
  const images = [
    pizzaPage,
    menu1,
    menu2,
    pizzaContact,
    pizzaOrder,
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

export default Pizzapalo;
