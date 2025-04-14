import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Landing from '../Landing';
import AOS from "aos";
import me from "@/assets/sss.png";

const ZoomInComponent = () => {
	const [scale, setScale] = useState(1)
	const [offsetX, setOffsetX] = useState(0);
	const [offsetY, setOffsetY] = useState(0);
	useEffect(() => {
		AOS.init();
		const handleMouseMove = (e) => {
			const winWidth = window.innerWidth;
			const winHeight = window.innerHeight;
			const mouseY = e.clientY;
			const mouseX = e.clientX;
			const ratio = (mouseY - winHeight / 2) / (winHeight / 2); // -1 ~ 1
			const ratioX = (mouseX - winWidth / 2) / (winWidth / 2);

			setOffsetY(ratio * 4);
			setOffsetX(ratioX * 4);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useEffect(() => {
		const handleScroll = (e) => {
			const newScale = scale + e.deltaY * +0.01
			setScale(Math.min(Math.max(1, newScale), 1.4))
		}
		window.addEventListener('wheel', handleScroll) // 清理事件 
		return () => { window.removeEventListener('wheel', handleScroll) }
	}, [scale])


	return (



		<div className="container">
			<div className="landing"
				data-aos="fade-up"
				data-aos-delay="200"
			>

				<div className="landing-left">
					<h2>
						<div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" data-aos-easing="ease-out-back">Front End Developer</div>
						<div data-aos="fade-up" data-aos-delay="450" data-aos-duration="800" data-aos-easing="ease-out-back">Graphic Designer</div>
					</h2>
					<div className="neon">
						<h1 data-aos="flip-up" data-aos-delay="500">
							"SHANE LIN"
						</h1>
					</div>
				</div>

				<motion.div
					initial={{ scale: 0.1 }} // 初始縮放為0.5
					animate={{ scale: scale }} // 使用 state 變量來控制縮放 
					transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}

				>
					<div className="landing-right"
						style={{
							transform: `translate(${offsetX}px, ${offsetY}px)`,
							transition: "transform 0.1s ease-out",
						}}>
						<img src={me} alt="me" />
					</div>
				</motion.div >
			</div>
		</div>

	)
}

export default ZoomInComponent
