import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Styles
import "./Slider.scss";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "/img/vinos/mf-syrah.jpeg",
    "/img/vinos/mf-syrahcabernet.jpeg",
    "/img/vinos/mf-chardonnay.jpeg",
    "/img/vinos/mf-bonardamalbec.jpeg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (next) => next + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
