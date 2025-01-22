
import ok from "../assets/ok_hand.png";
import React, { useEffect } from "react";
import AOS from "aos";
function Landing() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<section>
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
			</section>
		</>
	);
}

export default Landing;
