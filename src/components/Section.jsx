import ok from "../assets/ok_hand.png";

function Section() {
	return (
		<>
			<section>
				<div className="section-top">
					<img src={ok} alt="ok" />
					<img src={ok} alt="ok" />
					<img src={ok} alt="ok" />
				</div>
				<div className="section-bottom">
					<p>user interface</p>
					<p>graphic design</p>
					<p>logo</p>
					<p>brand</p>
					<p>digital illustration</p>
				</div>
			</section>
		</>
	);
}

export default Section;
