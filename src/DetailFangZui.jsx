import finger from "./assets/detail/point_right.png";
import back from "./assets/detail/back_page.png";
import fangzui from "../src/assets/fengzui.jpg";
import fangzui2 from "../src/assets/fengzui2.jpg";
import fangzui3 from "../src/assets/detail/fangzui1.jpg";
import fangzui4 from "../src/assets/detail/fangzui2.jpg";
import fangzui5 from "../src/assets/detail/fangzui3.jpg";
import fangzui6 from "../src/assets/detail/fangzui4.jpg";
import "./styles/Detail.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // 导入 AOS 库
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 样式

function DetailFangZui() {
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
              <li className="titleH2">
                fangzui tea | 品牌識別設計 visual design
              </li>
              <li>Logo / VI / Menu</li>
              <li>Client</li>
              <li className="title">方最 fangzui tea shop — 2020</li>
              <li>Designer</li>
              <li className="title">
                <Link target="_blank" to="https://www.instagram.com/__ssshane/">
                  shane
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="post">
          <img
            src={fangzui}
            alt="fangzui"
            data-aos="fade-down"
            data-aos-delay="150"
          />
          <img
            src={fangzui2}
            alt="fangzui"
            data-aos="fade-down"
            data-aos-delay="200"
            className="imgSize"
          />
          <div className="postTwo">
            <img
              src={fangzui3}
              alt="fengzui"
              data-aos="fade-down"
              data-aos-delay="250"
              className="imgSize"
            />
            <img
              src={fangzui4}
              alt="fengzui"
              data-aos="fade-down"
              data-aos-delay="250"
              className="imgSize"
            />
          </div>
          <img
            src={fangzui5}
            alt="fangzui"
            data-aos="fade-down"
            data-aos-delay="300"
            className="imgSize"
          />
          <img
            src={fangzui6}
            alt="fangzui"
            data-aos="fade-down"
            data-aos-delay="350"
            className="imgSize"
          />
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

export default DetailFangZui;
