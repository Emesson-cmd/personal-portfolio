import { useState } from 'react';
import PropTypes from 'prop-types';
import { close } from '../assets';

export function ImageModal({ images, isOpen, onClose, initialIndex = 0 }) {
  const [current, setCurrent] = useState(initialIndex);

  if (!isOpen) return null;

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      tabIndex={0}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-night/80 hover:bg-night p-2 rounded-full transition z-10"
          aria-label="Close modal"
        >
          <img src={close} alt="close" className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={images[current]}
            alt={`Project image ${current + 1}`}
            className="max-w-full max-h-[85vh] object-contain"
          />

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-battleGray/50 hover:bg-battleGray text-white p-3 rounded-full transition z-10"
              aria-label="Previous image"
            >
              <span className="text-2xl">‹</span>
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-battleGray/50 hover:bg-battleGray text-white p-3 rounded-full transition z-10"
              aria-label="Next image"
            >
              <span className="text-2xl">›</span>
            </button>
          )}
        </div>

        {/* Image Counter & Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition ${
                    index === current ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/70'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-white/70 text-sm">
              {current + 1} / {images.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

ImageModal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialIndex: PropTypes.number,
};
