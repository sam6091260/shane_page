import "./styles/App.css";
import React, { useEffect, useRef, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/Loading";

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
	const location = useLocation();
	const scrollToWork = () => workRef.current?.scrollIntoView({ behavior: "smooth" });
	const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

	useEffect(() => {
		if (location.pathname === "/" && location.state?.scrollTarget === "work") {
			scrollToWork();
		}
		if (location.pathname === "/" && location.state?.scrollTarget === "contect") {
			scrollToForm();
		}
	}, [location]);
	

	
	return (
		<Suspense fallback={<div><Loading /></div>}>
			<Nav scrollToWork={scrollToWork} scrollToForm={scrollToForm} />

			<Routes>
				<Route path="/" element={<AllComponents workRef={workRef} formRef={formRef} />} />
				<Route path="/detail/:key" element={<Products />} />
				<Route path="/gallery" element={<Gallery />} />
			</Routes>

			<Footer />
		</Suspense>
	);
}

function AllComponents({ workRef, formRef }) {
	return (
		<div>
			<ToastProvider />
			{/* <Landing /> */}
			<ZoomInComponent />
			<Skill />
			<Work workRef={workRef} />
			<Form formRef={formRef} />
			{/* <GrooveBg /> */}
		</div>
	);
}

export default App;
