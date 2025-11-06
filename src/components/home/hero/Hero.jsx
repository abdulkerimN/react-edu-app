import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              deserunt aperiam nihil sequi, distinctio provident velit quos
              impedit. Iusto eos fugiat magnam voluptates accusamus id aliquid
              voluptatum? Sequi, accusamus fuga!
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="primary-btn">
                VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
