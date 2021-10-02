import React, { useRef } from "react";

import Masonry from "react-masonry-css";
import { isEmpty } from "../tools/Fonctions";
var database = require("../db.json");

const Illustrations = () => {
	let illustrations = database.images.illustrations;
	let modal = useRef(null);

	const handleModal = (element) => {
		let imgModal = modal.current.childNodes[0];
		let imgElement = element.childNodes[0];

		imgModal.src = imgElement.src;
		imgModal.alt = imgElement.alt;

		modal.current.classList.add("display");
	};

	const closeModal = () => {
		modal.current.classList.remove("display");
	};
	return (
		<section className="illustration container gallery">
			<picture className="modal" ref={modal}>
				<img src="#" alt="modal" />
				<svg
					width="24"
					height="24"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
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
					illustrations
						// .sort((a, b) => a.order > b.order)
						.map((illustration) => {
							let url = encodeURI(illustration.name.replace(" ", "-"));
							return (
								<picture
									key={illustration.order}
									id={url}
									onClick={(e) => {
										handleModal(e.currentTarget);
									}}
								>
									<img
										src={illustration.images[0].path}
										alt={illustration.images[0].alt}
										title={illustration.name}
									/>
									<h3>{illustration.name}</h3>
								</picture>
							);
						})}
			</Masonry>
		</section>
	);
};

export default Illustrations;
