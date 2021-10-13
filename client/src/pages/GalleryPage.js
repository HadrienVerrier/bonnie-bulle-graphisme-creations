import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Gallery from "../components/Gallery";
import { isEmpty } from "../tools/Fonctions";

const GalleryPage = ({ match }) => {
	const illustrations = useSelector(
		(state) => state.imagesReducer.illustrationsReducer
	);
	const graphicDesigns = useSelector(
		(state) => state.imagesReducer.graphicDesignReducer
	);

	const [elements, setElements] = useState(null);
	const { params } = match;
	let { type } = params;

	useEffect(() => {
		switch (type) {
			case "illustration":
				setElements(illustrations);
				break;
			case "design-graphique":
				setElements(graphicDesigns);
				break;
			default:
				window.location = "/";
		}
	}, [illustrations, graphicDesigns, type, elements]);

	return <>{!isEmpty(elements) && <Gallery elements={elements} />}</>;
};

export default GalleryPage;
