const formattedReturn = require("./helpers/formattedReturn");
const getDatabase = require("./helpers/getDatabase");
const postDatabase = require("./helpers/postDatabase");

exports.handler = async (event) => {
	switch (event.httpMethod) {
		case "GET":
			return await getDatabase(event);
		case "POST":
			return await postDatabase(event);
		default:
			return formattedReturn(405, { message: "No event provided" });
	}
};
