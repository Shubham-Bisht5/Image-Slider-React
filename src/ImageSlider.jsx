import { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
  "https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?auto=format&fit=crop&w=1632&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1474&q=80",
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1470&q=80",
];

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={img} alt={`Slide ${index}`} />
        </div>
      ))}

      <div className="btn prev" onClick={prevSlide}>
        &lt;
      </div>
      <div className="btn next" onClick={nextSlide}>
        &gt;
      </div>
    </div>
  );
}

export default ImageSlider;