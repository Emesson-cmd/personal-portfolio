import { useState } from 'react';
import PropTypes from 'prop-types';

export function ProjectImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-xl">
      {/* Image */}
      <img
        src={images[current]}
        alt={`Project image ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-300"
      />

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

ProjectImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
