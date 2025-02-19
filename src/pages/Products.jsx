import finger from "../assets/detail/point_right.png";
import back from "../assets/detail/back_page.png";
import "../styles/Detail.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { PRODUCT_DATA } from "../../constans";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Products = () => {
	// 從 URL 中獲取 key 參數的值
	const { key } = useParams();
	const [selectedProduct, setSelectedProduct] = useState({
		title: "",
		category: "",
		customer: "",
		homeImages: [],
		images: [],
	});
	const [open, setOpen] = React.useState(false);
	const allImages = [...selectedProduct.homeImages, ...selectedProduct.images];

	// 初始化 selectedProduct 狀態。透過 PRODUCT_DATA 中的資料，根據給定的 key，找到對應的 product 資訊
	useEffect(() => {
		setSelectedProduct(
			PRODUCT_DATA.filter((product) => product.key === key)[0]
		);
	}, []);
	// 將視窗的捲軸滾動到頁面頂部
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// 在 component 第一次渲染後執行，它使用 AOS套件，初始化該套件以啟用滾動時的動畫效果
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<div className="container">
				<div className="back">
					<Link to="/">
						<img src={back} alt="back"></img>
					</Link>
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

					{selectedProduct.images.map((image, idx) => {
						const delay = 200 + 50 * (idx + 1);

						if (image.style === "postTwo") {
							const nextImage = selectedProduct.images[idx + 1];
							const isNextImagePostTwo =
								nextImage && nextImage.style === "postTwo";

							if (isNextImagePostTwo) {
								return (
									<div key={idx} className="postTwo">
										<img
											src={image.src}
											alt="image"
											data-aos="fade-down"
											data-aos-delay={delay}
											onClick={() => setOpen(true)}
										/>
										<img
											src={nextImage.src}
											alt="image"
											data-aos="fade-down"
											data-aos-delay={delay}
											onClick={() => setOpen(true)}
										/>
									</div>
								);
							}
							return;
						}

						return (
							<img
								key={image.id}
								src={image.src}
								alt="image"
								className="imgSize"
								data-aos="fade-down"
								data-aos-delay={delay}
								onClick={() => setOpen(true)}
							/>
						);
					})}
					<Lightbox
						open={open}
						close={() => setOpen(false)}
						plugins={[Zoom]}
						slides={allImages.map((image) => ({ src: image.src }))}
					/>
					{/* {selectedProduct.images.map((image, idx) => {
            const delay = 200 + 50 * (idx + 1);
            const classNames = image.style
              ? `postTwo ${image.style}`
              : "postTwo";
            return (
              <img
                key={image.id}
                src={image.src}
                alt="image"
                className={classNames}
                data-aos="fade-down"
                data-aos-delay={delay}
              />
            );
          })} */}
				</div>
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
