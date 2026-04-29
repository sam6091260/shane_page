/**
 * @file Work.jsx
 * @description 作品展示區塊組件。渲染所有作品的首圖卡片並連結至詳情頁。
 *   含一個滴動的‘指向下’指示圖示，捲動超過閾值後騎著頁面移動；
 *   滯動到底部時圖示翻轉並變成「回到頂部」按鈕。
 */
import poinDdown from "../assets/point_down.png";
import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { PRODUCT_DATA } from "../../constants";

/**
 * Work — 作品展示區塊
 *
 * @param {React.RefObject} workRef - 父層傳入的 ref，用於挘動定位
 */
function Work({ workRef }) {
	const [atBottom, setAtBottom] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [className, setClassName] = useState("point-down");

	/**
	 * handleScroll — 監聽滞動事件，更新指向圖示的狀態
	 *
	 * - 遍查当前 scrollY 與閾値的關係，切換圖示樣式（正常/固定投影）
	 * - 偽測是否滞動到頁面底部，畫面底部時展示「回到頂部」功能
	 * - 手機與桁面版使用不同的滞動閾値與位移調整
	 */
	const handleScroll = useCallback(() => {
		const currentScrollY = window.scrollY;
		const isBottom = currentScrollY >= document.body.scrollHeight - window.innerHeight - 100;
		const isMobile = window.innerWidth <= 768;
		const scrollThreshold = isMobile ? 768 : 1180;
		const positionOffset = isMobile ? 180 : 0;

		setAtBottom(isBottom);
		setScrollY(currentScrollY + positionOffset);
		setClassName(currentScrollY >= scrollThreshold ? "point-down-scroll" : "point-down");
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);


	return (
		<>
			{/* WORK */}
			<div className="container">
				<div className="work" ref={workRef}>
					<div className="work-top">
						<h3 data-aos="fade-up"
							data-aos-duration="800"
							data-aos-easing="ease-out-back">" Hey! Check this out! "</h3>
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
											data-aos-easing="ease-out-back"
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
