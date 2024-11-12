import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

const ProjectCard = ({ title, description, images = [], codeLink, liveLink }) => {
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
      <div className="relative" {...handlers}>
        {images.length > 0 ? (
          <>
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-green-300 rounded p-2 z-auto"
              onClick={prevImage}
            >
              <svg
                className="w-6 h-6 fill-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4l-8 8 8 8"
                />
              </svg>
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-green-300 rounded p-2 z-auto"
              onClick={nextImage}
            >
              <svg
                className="w-6 h-6 fill-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 4l8 8-8 8"
                />
              </svg>
            </button>
            <div className="mx-auto z-auto">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={600}
                height={400}
              />
            </div>
          </>
        ) : (
          <p>No images available</p>
        )}
      </div>

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
