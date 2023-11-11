// import post from "../assets/post.png";
// import mamba from "../assets/mamba.png";
// import fangzui from "../assets/fengzui.jpg";
// import fangzui2 from "../assets/fengzui2.jpg";
import poinDdown from "../assets/point_down.png";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { PRODUCT_DATA } from "../pages/constans";

function Work({ workRef }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* WORK */}
      <div className="container">
        <div className="work" ref={workRef}>
          <div className="work-top">
            <h3>" Hey! Check this out! "</h3>
            <div className="animate">
              <img src={poinDdown} alt="poinDdown" className="point-down " />
            </div>
          </div>
          <div className="work-bottom">
            {PRODUCT_DATA.map((product) => {
              return product.homeImages.map((homeImage) => (
                <div className="hover" key={homeImage.id}>
                  <NavLink to={`/detail/${product.key}`}>
                    <img
                      src={homeImage.src}
                      alt="post"
                      data-aos="fade-down"
                      data-aos-delay="150"
                    />
                  </NavLink>
                </div>
              ));
            })}
          </div>
        </div>
        {/* 黑！來聯繫吧 */}
        <div className="contact">
          <h3>" Hey! Let's meet to create your own design! "</h3>
        </div>
      </div>
    </>
  );
}

export default Work;
