import React, { useState, useEffect, } from 'react'
import { motion } from 'framer-motion'
import Landing from '../Landing';
import AOS from "aos";
import me from "@/assets/sss.png";

const ZoomInComponent = () => {
	const [scale, setScale] = useState(1)
	useEffect(() => {
		AOS.init();
	}, []);

	useEffect(() => {
		const handleScroll = (e) => {
			const newScale = scale + e.deltaY * +0.01
			setScale(Math.min(Math.max(1, newScale), 1.5))
		}
		window.addEventListener('wheel', handleScroll) // 清理事件 
		return () => { window.removeEventListener('wheel', handleScroll) }
	}, [scale])


	return (



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

				<motion.div
					initial={{ scale: 0.1 }} // 初始縮放為0.5
					animate={{ scale: scale }} // 使用 state 變量來控制縮放 
					transition={{ duration: 0.5, delay: 0.1, ease: "linear" }}

				>
					<div className="landing-right">
						<img src={me} alt="me" />
					</div>
				</motion.div >
			</div>
		</div>

	)
}

export default ZoomInComponent
