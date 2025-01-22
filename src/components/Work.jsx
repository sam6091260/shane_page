import poinDdown from "../assets/point_down.png";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { PRODUCT_DATA } from "../../constans";

function Work({ workRef }) {
	const [atBottom, setAtBottom] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [className, setClassName] = useState("point-down");

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		const isBottom = currentScrollY >= document.body.scrollHeight - window.innerHeight - 100;

		setAtBottom(isBottom);
		setScrollY(currentScrollY);
		setClassName(currentScrollY >= 1100 ? "point-down-scroll" : "point-down");
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		AOS.init();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);


	return (
		<>
			{/* WORK */}
			<div className="container">
				<div className="work" ref={workRef}>
					<div className="work-top">
						<h3>" Hey! Check this out! "</h3>
						<div className="animate">
							<img
								src={poinDdown}
								alt="poinDdown"
								className={className}
								style={{
									top: scrollY,
									transform: atBottom ? 'rotate(-180deg)' : 'none',
									cursor: atBottom ? 'pointer' : 'none',
								}}
								onClick={scrollToTop}
							/>
						</div>
					</div>
					<div className="work-bottom">
						{PRODUCT_DATA.map((product) => {
							return product.homeImages.map((homeImage) => (
								<div className="hover" key={homeImage.id}>
									<NavLink to={`/detail/${product.key}`}>
										<img
											src={homeImage.src}
											alt="post"
											data-aos="fade-right"
											data-aos-delay="300"
										/>
									</NavLink>
								</div>
							));
						})}
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
