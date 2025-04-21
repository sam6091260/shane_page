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

		el.addEventListener("mousedown", handleMouseDown);
		el.addEventListener("mousemove", handleMouseMove);
		el.addEventListener("mouseup", handleMouseUp);
		return () => {
			el.removeEventListener("mousedown", handleMouseDown);
			el.removeEventListener("mousemove", handleMouseMove);
			el.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);

	const handleDOM = (position) => {
		if (window.innerWidth) {
			window.scrollTo({ top: position, behavior: "smooth" });
		}
	};

	const images = [
        { delay: 50 },
        { delay: 150 },
        { delay: 250 },
    ];


	return (
		<>
			<section>
				<div className="section-top">
				{images.map((img, index) => (
                        <img
                            key={index}
                            src={ok}
                            alt="ok"
                            data-aos="fade-down"
                            data-aos-delay={img.delay}
                        />
                    ))}
				</div>
				<div className="section-bottom" ref={scrollRef}>
					<div className="marquee-content">
						{[...Array(3)].map((_, i) => (
						<React.Fragment key={i}>
							<p onClick={() => handleDOM(0)}>user Interface Design</p>
							<p onClick={() => handleDOM(1400)}>graphic Design</p>
							<p onClick={() => handleDOM(1860)}>logo</p>
							<p onClick={() => handleDOM(2310)}>brand</p>
							<p onClick={() => handleDOM(900)}>digital illustration</p>
						</React.Fragment>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Landing;