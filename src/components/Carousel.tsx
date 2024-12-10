import React, { useState, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode | ReactNode[];
  showControls?: boolean;
  showIndicators?: boolean;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  className?: string;
}

const ChevronLeftIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Carousel = ({
  children,
  showControls = true,
  showIndicators = true,
  autoSlide = false,
  autoSlideInterval = 3000,
  className = '',
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Convert children to array
  const slides = React.Children.toArray(children);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide functionality
  React.useEffect(() => {
    if (!autoSlide) return;
    
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main carousel container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {showControls && slides.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            aria-label="Next slide"
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-[#003399]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;