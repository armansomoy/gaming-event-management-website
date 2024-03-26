import React from "react";
import bg from "../../assets/bg.jpg";

const Banner = () => {
  return (
    <div
      className="hero h-[600px] "
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className="hero-overlay h-[600px] bg-opacity-60"></div>
      <div className="hero-content h-[600px] text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-7xl text-[#fff] font-bold">Biggest Gaming Event</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
