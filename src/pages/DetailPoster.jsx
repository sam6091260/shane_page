import finger from "../assets/detail/point_right.png";
import back from "../assets/detail/back_page.png";
import post from "../assets/post.png";
import postOne from "../assets/detail/poster1.jpg";
import postTwo from "../assets/detail/poster2.jpg";
import "../styles/Detail.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function DetailPoster() {
	useEffect(() => {
		AOS.init();
		window.scrollTo(0, 0);
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
							<li className="titleH2">
								basketball team | 籃球隊海報設計 poster
							</li>
							<li>Flyer</li>
							<li>Client</li>
							<li className="title">
								New Taipei City Haishan Basketball team 2021-2022
							</li>
							<li>Designer</li>
							<li className="title">
								{" "}
								<a target="_blank" href="https://www.instagram.com/__ssshane/">
									shane
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="post">
					<img
						src={post}
						alt="post"
						data-aos="fade-down"
						data-aos-delay="150"
					/>
					<img
						src={postOne}
						alt="post"
						data-aos="fade-down"
						data-aos-delay="200"
						className="imgSize"
					/>
					<img
						src={postTwo}
						alt="post"
						data-aos="fade-down"
						data-aos-delay="250"
						className="imgSize"
					/>
				</div>
				<div className="meet">
					<Link target="_blank" to="https://www.instagram.com/__ssshane/">
						<h3>" Meet Me "</h3>
					</Link>
				</div>
			</div>
		</>
	);
}

export default DetailPoster;
