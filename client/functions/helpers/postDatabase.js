const formattedReturn = require("./formattedReturn");
const postMessages = require("./messages/messages");
module.exports = async (event) => {
	let table = event.queryStringParameters
		? event.queryStringParameters.table
		: null;

	switch (table) {
		case "message":
			return await postMessages(event);
		default:
			return formattedReturn(400, { message: "No table found" });
	}
};
