import React, { useEffect, useRef } from 'react';
import "../grooveBg/grooveStyle.css";
const MIN_SPEED = 0.5;
const MAX_SPEED = 2;

const randomNumber = (min, max) => Math.random() * (max - min) + min;

const useBlobs = (blobRefs) => {
	useEffect(() => {
		const blobs = blobRefs.current.map((ref) => {
			const boundingRect = ref.current.getBoundingClientRect();
			const size = boundingRect.width;

			const blob = {
				el: ref.current,
				size,
				initialX: randomNumber(0, window.innerWidth - size),
				initialY: randomNumber(0, window.innerHeight - size),
				vx: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
				vy: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
			};

			blob.x = blob.initialX;
			blob.y = blob.initialY;

			ref.current.style.top = `${blob.initialY}px`;
			ref.current.style.left = `${blob.initialX}px`;

			return blob;
		});

		const update = () => {
			requestAnimationFrame(update);

			blobs.forEach((blob) => {
				blob.x += blob.vx;
				blob.y += blob.vy;

				if (blob.x >= window.innerWidth - blob.size) {
					blob.x = window.innerWidth - blob.size;
					blob.vx *= -1;
				}

				if (blob.y >= window.innerHeight - blob.size) {
					blob.y = window.innerHeight - blob.size;
					blob.vy *= -1;
				}

				if (blob.x <= 0) {
					blob.x = 0;
					blob.vx *= -1;
				}

				if (blob.y <= 0) {
					blob.y = 0;
					blob.vy *= -1;
				}

				blob.el.style.transform = `translate(${blob.x - blob.initialX}px, ${blob.y - blob.initialY}px)`;
			});
		};

		requestAnimationFrame(update);

		return () => {
			blobs.forEach((blob) => {
				blob.el.style.transform = '';
			});
		};
	}, [blobRefs]);
};

const Blob = ({ innerRef }) => {
	return <div ref={innerRef} className="blobs" style={{ position: 'absolute', width: '50px', height: '50px', backgroundColor: 'red', borderRadius: '50%' }}>
		<div class="blob"></div>
		<div class="blob"></div>
		<div class="blob"></div>
		<div class="blob"></div>
		<div class="blob"></div>
		<div class="blob"></div>
	</div>;
};

const BlobsContainer = () => {
	const blobRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

	useBlobs(blobRefs);

	return (
		<div className="groove">
			{blobRefs.current.map((ref, index) => (
				<Blob key={index} innerRef={ref} />
			))}
		</div>
	);
};

export default BlobsContainer;
