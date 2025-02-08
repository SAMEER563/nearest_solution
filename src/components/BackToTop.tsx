"use client"
import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Function to check scroll position and toggle button visibility
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show the button when scrolled down more than 300px
    } else {
      setIsVisible(false); // Hide the button if scrolled up
    }
  };

  // Scroll to top function when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'  });

  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []); // Empty dependency array to ensure it's set up once

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop }
          className="fixed bottom-[70px] md:bottom-24 right-4 p-3 rounded-full  transition-all duration-300 ease-in-out"
          aria-label="Back to top"
        >
          {/* Image for the Up Arrow */}
          <img
            src="/assets/top.png" // Path to your image inside the public folder
            alt="Back to top"
            className="h-28 w-24" // You can adjust the size of  image
          />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
