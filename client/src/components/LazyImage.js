import React, { useRef, useState } from "react";
import useInteractionObserver from "../hooks/useInteractionObserver";

const LazyImage = ({
	thumb,
	height,
	width,
	alt,
	src,
	title,
	name,
	onClick,
}) => {
	const ref = useRef();
	const [isVisible, setIsVisible] = useState(false);

	useInteractionObserver({
		target: ref,
		onIntersect: ([{ isIntersecting }], observeElement) => {
			if (isIntersecting) {
				setIsVisible(true);
				observeElement.unobserve(ref.current);
			}
		},
	});
	const aspectRatio = (height / width) * 100;

	//BLUR
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<picture
			ref={ref}
			onClick={onClick}
			className="lazy-image"
			style={{ paddingBottom: isVisible ? "0" : `${aspectRatio}%` }}
		>
			{isVisible && (
				<>
					<img
						src={thumb}
						alt={alt}
						title={title}
						className="thumb"
						style={{ display: isLoaded ? "none" : "block" }}
					/>
					<img
						onLoad={() => {
							setIsLoaded(true);
						}}
						className="full"
						src={src}
						alt={alt}
						title={title}
						style={{ opacity: isLoaded ? 1 : 0 }}
					/>
				</>
			)}
			<h3>{name}</h3>
		</picture>
	);
};

export default LazyImage;
