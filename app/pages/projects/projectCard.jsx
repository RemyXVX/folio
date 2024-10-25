import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

const ProjectCard = ({ title, description, images, codeLink, liveLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="flex flex-col bg-white p-6 sm:p-8 rounded-lg shadow-lg">
      {/* Carousel */}
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
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Project Description */}
      <div className="flex flex-col flex-grow justify-between pt-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 py-4">{title}</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex justify-center space-x-4 pt-6">
          {codeLink && (
            <a
              href={codeLink}
              className="text-gray-900 bg-gray-300 py-2 px-4 sm:px-6 rounded-md shadow-md font-medium hover:scale-105 transition-transform"
            >
              Code Base
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              className="text-gray-900 bg-gray-300 py-2 px-4 sm:px-6 rounded-md shadow-md font-medium hover:scale-105 transition-transform"
            >
              Webpage
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
