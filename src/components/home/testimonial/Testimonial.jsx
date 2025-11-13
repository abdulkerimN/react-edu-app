import React from "react";
import Title from "../../common/title/Title";
import { testimonal } from "../../../dummydata"; // adjust to { testimonial } if that's the exact export

const Testimonial = () => {
  return (
    <div>
      <section className="testimonial padding">
        <div className="container">
          <Title subtitle="testimonial" title="our succeeful students" />
          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow" key={val.id}>
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt={val.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
