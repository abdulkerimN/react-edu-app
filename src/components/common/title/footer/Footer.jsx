import React from 'react'
import "./footer.css"
import { blog } from "../../../../dummydata"
const Footer = () => {
  return (
    <div>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Sign Up for Newsletter</h1>
            <span>
              Get E-mail updates about our latest shop and <br /> special
              offers.
            </span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ACADEMIA</h1>
            <span>online education & learning</span>
            <p>Lorem inam dolor asperiores delectus facilis pariatur?</p>
            <i className="fa-brands fa-facebook icon"></i>
            <i className="fa-brands fa-instagram icon"></i>
            <i className="fa-brands fa-twitter icon"></i>
            <i className="fa-brands fa-youtube icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Posts</h3>
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calender-alt"></i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box last">
            <h3>Have Questions ?</h3>
            <ul>
              <li>
                <i className="fa fa-map">
                  200 arada ST. Bird View, Addis Ababa, Ethiopia
                </i>
              </li>
              <li>
                <i className="fa fa-phone-alt">+123 456 789</i>
              </li>
              <li>
                <i className="fa fa-paper-plane">abcd@gmail.com</i>
              </li>
            </ul>
          </div>
        </div>
      </footer>
<div className='legal'>
<p>Copyright @2025 ANN</p>
</div>
    </div>
  );
}

export default Footer
