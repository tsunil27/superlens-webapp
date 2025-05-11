
import React, { useState, useEffect } from 'react';

interface VideoCarouselProps {
  images: string[];
  interval?: number;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  images,
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);
  
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image} 
            alt={`SuperLens Platform View ${index + 1}`} 
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
