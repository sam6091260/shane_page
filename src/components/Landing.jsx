/**
 * @file Landing.jsx
 * @description 首頁英雄區塊組件。左側顯示職稱標願與名字（霸光動畫效果），
 *   右側呈現以 Three.js 渲染的可互動 3D 球體。
 */
import React from "react";
import Sphere from "./SphereWithTexture";

/** Landing — 首頁英雄區塊，不接受任何 props。 */
function Landing() {

	return (
		<>
			<div className="container">
				<div className="landing" data-aos="fade-up" data-aos-delay="200">
					<div className="landing-left">
						<h2>
							Front End Developer
							<br />
							Graphic Designer
						</h2>
						<div className="neon">
							<h1 data-aos="flip-up" data-aos-delay="500">
								"SHANE LIN"
							</h1>
						</div>
					</div>
					<div className="landing-right">
						{/* <img src={me} alt="me" /> */}
						<Sphere />
					</div>
				</div>
			</div>

			{/* <section>
				<div className="section-top">
					<img src={ok} alt="ok" data-aos="fade-down" data-aos-delay={50} />
					<img src={ok} alt="ok" data-aos="fade-down" data-aos-delay={150} />
					<img src={ok} alt="ok" data-aos="fade-down" data-aos-delay={250} />
				</div>
				<div className="section-bottom">
					<p>user Interface Design</p>
					<p>graphic Design</p>
					<p>logo</p>
					<p>brand</p>
					<p>digital illustration</p>
				</div>
			</section> */}
		</>
	);
}

export default Landing;
