import finger from "../assets/detail/point_right.png";
import back from "../assets/detail/back_page.png";
import "../styles/Detail.css";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { PRODUCT_DATA } from "../../constans";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

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
		AOS.init();
	}, []);
	

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

					{selectedProduct.images.map((image, idx) => {
						const delay = 200 + 50 * (idx + 1);
						if (image.style === "postTwo") {
							const nextImage = selectedProduct.images[idx + 1];
							const isNextImagePostTwo =
								nextImage && nextImage.style === "postTwo";
							if (isNextImagePostTwo) {
								return (
									<div key={image.id} className="postTwo">
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
							return null;
						}
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
