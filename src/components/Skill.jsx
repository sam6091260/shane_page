/**
 * @file Skill.jsx
 * @description 技能展示區塊。包含：
 *   - 上方：三個 "ok_hand" 手勢図示，使用 AOS 淡入動畫
 *   - 下方：可點擊滞動的距马燈文字區（支持滑鼠拖曳）
 *   滞動區和浮動動畫效果均透過 CSS marquee 動畫實作。
 */
import ok from "../assets/ok_hand.png";
import React, { useEffect, useRef } from "react";
/**
 * Skill — 技能展示區塊，不接受任何 props。
 *
 * useEffect 內初始化鼠標拖曳事件，讓滞動區在桶型機上也可水平拖曳瀏覽。
 */
function Skill() {

	const scrollRef = useRef(null);

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		// --- 鼠標拖曳滞動實作 ---
		// isDown: 記錄當前是否按下左鍵
		// startX: 按下時的起始 X 坐標
		// scrollLeft: 按下時廞動區的初始 scrollLeft 屬性
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

	/**
	 * handleDOM — 點擊跑马燈項目時滞動到對應區塊
	 *
	 * @param {number} mobilePosition  - 手機版的滞動目標（px）
	 * @param {number} desktopPosition - 桁面版的滞動目標（px）
	 */
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

export default Skill;