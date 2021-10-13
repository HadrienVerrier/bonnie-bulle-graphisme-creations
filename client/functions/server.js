const formattedReturn = require("./helpers/formattedReturn");
const getDatabase = require("./helpers/getDatabase");

exports.handler = async (event) => {
	switch (event.httpMethod) {
		case "GET":
			return await getDatabase(event);
		default:
			return formattedReturn(405, { message: "No event provided" });
	}
};
