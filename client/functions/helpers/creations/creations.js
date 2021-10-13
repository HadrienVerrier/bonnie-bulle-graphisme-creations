const { creationsTable, imagesTable } = require("../airtable");
const formattedReturn = require("../formattedReturn");

module.exports = async (event) => {
	const creations = await creationsTable.select().firstPage();

	let query = event.queryStringParameters.query
		? event.queryStringParameters.query
		: null;

	switch (query) {
		case "illustrations":
			const formattedCreations = await creations
				.sort((a, b) => a.fields.order - b.fields.order)
				.filter(
					(creation) =>
						creation.fields.visibility === "yes" &&
						creation.fields.category === "illustration"
				)
				.map((creation) => ({
					id: creation.id,
					name: creation.fields.name,
					description: creation.fields.description,
					order: creation.fields.order,
					category: creation.fields.category,
					creationDate: creation.fields.creationDate,
					imgsPaths: creation.fields.images_x_path,
					imgsDescription: creation.fields.images_x_description,
					imgsName: creation.fields.images_x_name,
					imgsOrder: creation.fields.images_x_order,
					imgsUploadedDate: creation.fields.images_x_uploadedDate,
					imgsVisibility: creation.fields.images_x_visibility,
				}));

			return formattedReturn(200, formattedCreations);
		default:
			return formattedReturn(400, { message: "No query" });
	}
};
