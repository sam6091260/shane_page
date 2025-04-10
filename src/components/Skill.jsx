
import ok from "../assets/ok_hand.png";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
function Landing() {

	const scrollRef = useRef(null);

	useEffect(() => {
		AOS.init();

		const el = scrollRef.current;
		if (!el) return;

		let isDown = false;
		let startX;
		let scrollLeft;

		const handleMouseDown = (e) => {
			isDown = true;
			startX = e.pageX;
			scrollLeft = el.scrollLeft;
			el.classList.add("active");
		};

		const handleMouseMove = (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX;
			const walk = x - startX;
			el.scrollLeft = scrollLeft - walk;
		};

		const handleMouseUp = () => {
			isDown = false;
			el.classList.remove("active");
		};

		const handleMouseLeave = () => {
			isDown = false;
			el.classList.remove("active");
		};

		el.addEventListener("mousedown", handleMouseDown);
		el.addEventListener("mousemove", handleMouseMove);
		el.addEventListener("mouseup", handleMouseUp);
		el.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			el.removeEventListener("mousedown", handleMouseDown);
			el.removeEventListener("mousemove", handleMouseMove);
			el.removeEventListener("mouseup", handleMouseUp);
			el.removeEventListener("mouseleave", handleMouseLeave);
		};
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
				<div className="section-bottom" ref={scrollRef}>
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
