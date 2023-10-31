import finger from "./assets/detail/point_right.png";
import back from "./assets/detail/back_page.png";
import mamba from "../src/assets/mamba.png";
import mamba1 from "../src/assets/detail/mamba1.jpg";
import mamba2 from "../src/assets/detail/mamba2.jpg";
import mamba3 from "../src/assets/detail/mamba3.jpg";
import "./styles/Detail.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // 导入 AOS 库
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 样式

function DetailMamba() {
  useEffect(() => {
    // 进入Detail页面后，滚动到页面顶部
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // 在页面加载后初始化 AOS 库
    AOS.init();
  }, []); // 空数组表示只在组件加载时运行一次

  return (
    <>
      <div className="container">
        <div className="back">
          <Link to="/">
            <img src={back} alt="back"></img>
          </Link>
        </div>
        <div className="intro">
          <div className="introLeft">
            <h2>Hey! Check this out! </h2>
            <div className="animate_right">
              <img src={finger} alt="finger" className="point_right" />
            </div>
          </div>
          <div className="introRight">
            <ul>
              <li className="titleH2">fried chicken shop | 品牌商標設計</li>
              <li>Logo / Brand / Font</li>
              <li>Client</li>
              <li className="title">Mamba Chicken Shop 2021</li>
              <li>Designer</li>
              <li className="title">
                <a target="_blank" href="https://www.instagram.com/__ssshane/">
                  shane
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="post">
          <img
            src={mamba}
            alt="mamba"
            data-aos="fade-down"
            data-aos-delay="150"
          />
          <img
            src={mamba1}
            alt="mamba"
            data-aos="fade-down"
            data-aos-delay="200"
            className="imgSize"
          />
          <div className="postTwo">
            <img
              src={mamba2}
              alt="mamba"
              data-aos="fade-down"
              data-aos-delay="250"
              className="imgSize"
            />
            <img
              src={mamba3}
              alt="mamba"
              data-aos="fade-down"
              data-aos-delay="250"
              className="imgSize"
            />
          </div>
        </div>
        <div className="meet">
          <Link target="_blank" to="https://www.instagram.com/__ssshane/">
            <h3>" Meet Me "</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DetailMamba;
