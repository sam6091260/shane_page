import "./styles/App.css";
import React, { useEffect, useRef, lazy, Suspense, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor";

const Work = lazy(() => import("./components/Work"));
const Nav = lazy(() => import("./components/Nav"));
const Footer = lazy(() => import("./components/Footer"));
const Landing = lazy(() => import("./components/Landing"));
const Products = lazy(() => import("./pages/Products"));
const Form = lazy(() => import("./components/Form"));
const ToastProvider = lazy(() => import("./components/ToasterProvider"));
const ZoomInComponent = lazy(() => import("./components/framer/ZoomIn"));
const Skill = lazy(() => import("./components/Skill"));
const Gallery = lazy(() => import("./pages/Gallery"));

function App() {
	const workRef = useRef(null);
	const formRef = useRef(null);
	const landingRef = useRef(null);
	const location = useLocation();
	const [activeSection, setActiveSection] = useState("index");
	const scrollToWork = () => workRef.current?.scrollIntoView({ behavior: "smooth" });
	const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

	useEffect(() => {
		// 處理首頁的滾動目標
		if (location.pathname === "/" && location.state?.scrollTarget === "work") {
			scrollToWork();
		} else if (location.pathname === "/" && location.state?.scrollTarget === "contect") {
			scrollToForm();
		} else {
			// 其他所有情況（包括返回首頁、切換到其他頁面）都滾動到頂部
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [location.pathname, location.state?.scrollTarget]);

	// 監聽滾動位置來更新 active section
	useEffect(() => {
		if (location.pathname !== "/") {
			return; // 只在首頁監聽
		}

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;

			// 如果在頁面頂部（滾動距離小於 50px），直接設為 index
			if (scrollPosition < 50) {
				setActiveSection("index");
				return;
			}

			// 添加偏移量使切換更靈敏
			const scrollWithOffset = scrollPosition + 150;

			// 獲取各個區塊的位置
			const workTop = workRef.current?.offsetTop || 0;
			const formTop = formRef.current?.offsetTop || 0;

			// 檢查是否接近頁面底部（距離底部小於 100px）
			const isNearBottom = windowHeight + scrollPosition >= documentHeight - 100;

			// 判斷當前滾動位置在哪個區塊
			if (isNearBottom || scrollWithOffset >= formTop) {
				setActiveSection("contact");
			} else if (scrollWithOffset >= workTop) {
				setActiveSection("work");
			} else {
				setActiveSection("index");
			}
		};

		// 延遲執行，確保 DOM 已經渲染完成
		const timer = setTimeout(() => {
			handleScroll();
		}, 100);

		// 添加滾動監聽
		window.addEventListener("scroll", handleScroll);

		return () => {
			clearTimeout(timer);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname]);
	

	
	return (
		<Suspense fallback={<div><Loading /></div>}>
			<CustomCursor />
			<Nav 
				scrollToWork={scrollToWork} 
				scrollToForm={scrollToForm} 
				activeSection={activeSection}
			/>

			<Routes>
				<Route path="/" element={<AllComponents workRef={workRef} formRef={formRef} landingRef={landingRef} />} />
				<Route path="/detail/:key" element={<Products />} />
				<Route path="/gallery" element={<Gallery />} />
			</Routes>

			<Footer />
		</Suspense>
	);
}

function AllComponents({ workRef, formRef, landingRef }) {
	return (
		<div>
			<ToastProvider />
			<div ref={landingRef}>
				<Landing />
			</div>
			{/* <ZoomInComponent /> */}
			<Skill />
			<Work workRef={workRef} />
			<Form formRef={formRef} />
			{/* <GrooveBg /> */}
		</div>
	);
}

export default App;
