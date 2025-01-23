
import ok from "../assets/ok_hand.png";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
function Landing() {
	useEffect(() => {
		AOS.init();
	}, []);

	const handleDOM = (position) => {
		if (window.innerWidth > 767) {
			window.scrollTo({ top: position, behavior: "smooth" });
		}
	};

	return (
		<>
			<section>
				<div className="section-top">
					<img src={ok} alt="ok" data-aos="fade-down" data-aos-delay={50} />
					<img src={ok} alt="ok" data-aos="fade-down" data-aos-delay={150} />
					<img src={ok} alt="ok" data-aos="fade-down" data-aos-delay={250} />
				</div>
				<div className="section-bottom">
					<p onClick={() => handleDOM(0)}>user Interface Design</p>
					<p onClick={() => handleDOM(1400)}>graphic Design</p>
					<p onClick={() => handleDOM(1860)}>logo</p>
					<p onClick={() => handleDOM(2310)}>brand</p>
					<p onClick={() => handleDOM(900)}>digital illustration</p>
				</div>
			</section>
		</>
	);
}

export default Landing;
