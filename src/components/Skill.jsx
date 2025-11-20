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

	const handleDOM = (mobilePosition, desktopPosition) => {
		// 判斷是否為手機版（螢幕寬度小於 768px）
		const isMobile = window.innerWidth < 768;
		const scrollPosition = isMobile ? mobilePosition : desktopPosition;
		window.scrollTo({ top: scrollPosition, behavior: "smooth" });
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
							<p onClick={() => handleDOM(0, 0)}>user Interface Design</p>
							<p onClick={() => handleDOM(500, 1000)}>graphic Design</p>
							<p onClick={() => handleDOM(1000, 2200)}>logo</p>
							<p onClick={() => handleDOM(1200, 2600)}>brand</p>
							<p onClick={() => handleDOM(840, 1700)}>digital illustration</p>
						</React.Fragment>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Landing;