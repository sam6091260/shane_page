import me from "../assets/sss.png";
import ok from "../assets/ok_hand.png";
import React, { useEffect } from "react";
import AOS from "aos";
import Sphere from "./SphereWithTexture";

function Landing() {
	useEffect(() => {
		AOS.init();
	}, []);

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
