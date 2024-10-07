import React from "react";
import "./owncreation.css";
import Slider from "react-slick";

const OwnCreation = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
  };

  const slides = [
    { id: 1, content: "" },
    { id: 2, content: "" },
    { id: 3, content: "" },
    { id: 4, content: "" },
    { id: 5, content: "" },
  ];

  return (
    <section className="own-creation-wrapper">
      <div className="primary-color own-creation-detail">
        <div>
          <h2>
            Our <br /> Own Creation
          </h2>
          <p>Designed in our studio</p>
          <div>
            <p>More</p>
          </div>
        </div>
      </div>

      <div className="own-creation-slider">
        <Slider {...settings}>
            {slides.map((slide, index) => (
            <div
                key={index.id}
                className="own-slide"
            >
                <h3>{slide.content}</h3>
            </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default OwnCreation;
