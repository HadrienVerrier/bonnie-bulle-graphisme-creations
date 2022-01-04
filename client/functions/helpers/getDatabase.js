const { creationsTable, imagesTable } = require("./airtable");
const getCreations = require("./creations/creations");
const formattedReturn = require("./formattedReturn");

module.exports = async (event) => {
	let table = event.queryStringParameters
		? event.queryStringParameters.table
		: null;

	switch (table) {
		case "creations":
			return await getCreations(event);
		case "images":
			const images = await imagesTable.select().firstPage();
			return formattedReturn(200, images);
		default:
			return formattedReturn(400, { message: "No table found" });
	}
};
