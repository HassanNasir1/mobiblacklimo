import React, { useState, useEffect } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/suv-1.webp", "/suv-2.jpg", "/suv-3.jpg", "suv-4.webp"];

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    // Automatically change slide every 2 to 3 seconds
    const intervalId = setInterval(handleNextSlide, 3000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        className="block w-full"
        alt={`Slide ${currentIndex + 1}`}
        style={{  maxHeight: "85vh" }}
      />
      {/* Slide content */}
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        {/* <h5 className="text-xl">Slide {currentIndex + 1} label</h5> */}
        {/* <p>
          Some representative placeholder content for slide {currentIndex + 1}.
        </p> */}
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-0 top-1/2 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 text-white bg-gray-800 rounded-full shadow-lg opacity-80 transition-opacity duration-150 ease-linear hover:opacity-100 focus:outline-none"
        onClick={handlePrevSlide}
      >
        {"<"}
      </button>

      {/* Next Button */}
      <button
        className="absolute right-0 top-1/2 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 text-white bg-gray-800 rounded-full shadow-lg opacity-80 transition-opacity duration-150 ease-linear hover:opacity-100 focus:outline-none"
        onClick={handleNextSlide}
      >
        {">"}
      </button>
    </div>
  );
}
