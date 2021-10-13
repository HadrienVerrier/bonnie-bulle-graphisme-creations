import React, { useEffect, useRef, useState } from "react";

import Masonry from "react-masonry-css";
import LazyImage from "../components/LazyImage";
import { isEmpty } from "../tools/Fonctions";

const Illustrations = () => {
	const [illustrations, setIllustrations] = useState(null);
	//GET ILLUSTRATIONS
	useEffect(() => {
		fetch(
			"/api/server?" +
				new URLSearchParams({
					table: "creations",
					query: "illustrations",
				}),
			{
				method: "GET",
			}
		)
			.then(function (response) {
				if (!response.ok) {
					throw new Error(`erreur HTTP! statut: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				return setIllustrations(data);
			})

			.catch(function (err) {
				console.log("Fetch Error :", err);
			});
	}, []);

	let modal = useRef(null);
	const handleModal = (element) => {
		let imgModal = modal.current.childNodes[0];
		let imgElement = element.childNodes[1];

		imgModal.src = imgElement.src;
		imgModal.alt = imgElement.alt;
	};

	const closeModal = () => {
		modal.current.classList.remove("display");
	};

	return (
		<section className="illustration container gallery">
			<picture className="modal" ref={modal}>
				<img
					src="#"
					alt="modal"
					onLoad={() => {
						modal.current.classList.add("display");
					}}
				/>
				<svg
					width="24"
					height="24"
					xmlns="http://www.w3.org/2000/svg"
					fillRule="evenodd"
					clipRule="evenodd"
					onClick={closeModal}
				>
					<path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
				</svg>
			</picture>
			<Masonry
				breakpointCols={3}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{!isEmpty(illustrations) &&
					illustrations.map((illustration) => {
						return (
							<LazyImage
								key={illustration.id}
								id={illustration.id}
								onClick={(e) => {
									handleModal(e.currentTarget);
								}}
								name={illustration.name}
								title={illustration.name}
								alt={illustration.imgsDescription[0]}
								src={illustration.imgsPaths[0].url}
								thumb={illustration.imgsPaths[0].thumbnails.small.url}
								height={illustration.imgsPaths[0].height}
								width={illustration.imgsPaths[0].width}
							/>
						);
					})}
			</Masonry>
		</section>
	);
};

export default Illustrations;
