import post from "../assets/post.png";
import poinDdown from "../assets/point_down.png";
import mamba from "../assets/mamba.png";
import fangzui from "../assets/fengzui.jpg";
import fangzui2 from "../assets/fengzui2.jpg";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

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
            <div className="hover">
              <NavLink to="/detail/poster">
                <img
                  src={post}
                  alt="post"
                  data-aos="fade-down"
                  data-aos-delay="150"
                />
              </NavLink>
            </div>

            <div className="hover">
              <NavLink to="/detail/mamba">
                <img
                  src={mamba}
                  alt="mamba"
                  data-aos="fade-down"
                  data-aos-delay="200"
                  className="hover"
                />
              </NavLink>
            </div>
            <div className="hover">
              <NavLink to="/detail/fangzui">
                <img
                  src={fangzui}
                  alt="fangzui"
                  data-aos="fade-down"
                  data-aos-delay="250"
                />
              </NavLink>
            </div>

            <div className="hover">
              <NavLink to="/detail/fangzui">
                <img
                  src={fangzui2}
                  alt="fangzui2"
                  data-aos="fade-down"
                  data-aos-delay="300"
                />
              </NavLink>
            </div>
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
