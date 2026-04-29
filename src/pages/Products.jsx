/**
 * @file Products.jsx
 * @description 作品詳情頁面組件。根據路由參數 :key 從 PRODUCT_DATA 取得對應作品資料，
 *   展示封面圖、detail 圖組（支援單張與並排 postTwo 樣式），
 *   並整合 Lightbox 燈箱供圖片放大瀏覽。
 *   支援從 Gallery 或首頁進入，並正確返回來源頁面。
 */
import finger from "../assets/detail/point_right.png";
import back from "../assets/detail/back_page.png";
import "../styles/Detail.css";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { PRODUCT_DATA } from "../../constants";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

/**
 * 將圖片陣列中連續的 postTwo 圖片兩兩配對成群組，其餘單獨呈現。
 * @param {Array} images - selectedProduct.images
 * @returns {Array} - 每個元素為 { type: 'single'|'pair', images: [...] }
 */
function groupImages(images) {
	const groups = [];
	let i = 0;
	while (i < images.length) {
		const current = images[i];
		const next = images[i + 1];
		if (current.style === "postTwo" && next && next.style === "postTwo") {
			groups.push({ type: "pair", images: [current, next] });
			i += 2;
		} else {
			groups.push({ type: "single", images: [current] });
			i += 1;
		}
	}
	return groups;
}

const Products = () => {
	const { key } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const fromGallery = location.state?.from === 'gallery';

	const [selectedProduct, setSelectedProduct] = useState({
		title: "",
		category: "",
		customer: "",
		homeImages: [],
		images: [],
	});
	const [open, setOpen] = React.useState(false);
	const allImages = [...selectedProduct.homeImages, ...selectedProduct.images];

	useEffect(() => {
		setSelectedProduct(PRODUCT_DATA.find((product) => product.key === key));
		window.scrollTo(0, 0);
	}, [key]);
	

	const handleBack = () => {
		if (fromGallery) {
			navigate('/gallery');
		} else {
			navigate('/');
		}
	};

	return (
		<>
			<div className="container">
				<div className="back">
					<div onClick={handleBack} style={{ cursor: 'pointer' }}>
						<img src={back} alt="back" />
					</div>
				</div>
				<div className="intro">
					<div className="introLeft">
						<h2>Hey! Check this out! </h2>
						<div className="animate_right">
							<img src={finger} alt="finger" className="point_right" />
						</div>
					</div>
					<div className="introRight">
						<ul>
							<li className="titleH2">{selectedProduct.title}</li>
							<li>{selectedProduct.category}</li>
							<li>Client</li>
							<li className="title">{selectedProduct.customer}</li>
							<li>Designer</li>
							<li className="title">
								<a target="_blank" href="https://www.instagram.com/__ssshane/">
									shane
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="post">
					{selectedProduct.homeImages.map((image, idx) => {
						const delay = 150 + 50 * idx;
						return (
							<img
								key={image.id}
								src={image.src}
								alt="image"
								data-aos="fade-down"
								data-aos-delay={delay}
								onClick={() => setOpen(true)}
							/>
						);
					})}

					{groupImages(selectedProduct.images).map((group, idx) => {
						const delay = 200 + 50 * (idx + 1);
						if (group.type === "pair") {
							return (
								<div key={group.images[0].id} className="postTwo">
									{group.images.map((img) => (
										<img
											key={img.id}
											src={img.src}
											alt="image"
											data-aos="fade-down"
											data-aos-delay={delay}
											onClick={() => setOpen(true)}
										/>
									))}
								</div>
							);
						}
						return (
							<img
								key={group.images[0].id}
								src={group.images[0].src}
								alt="image"
								data-aos="fade-down"
								data-aos-delay={delay}
								onClick={() => setOpen(true)}
							/>
						);
					})}
				</div>

				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={allImages.map((image) => ({ src: image.src }))}
					plugins={[Zoom]}
				/>

				<div className="meet">
					<Link target="_blank" to="https://www.instagram.com/__ssshane/">
						<h3>" Meet Me "</h3>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Products;
