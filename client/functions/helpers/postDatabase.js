const formattedReturn = require("./formattedReturn");
const postMessages = require("./messages/messages");
module.exports = async (event) => {
  let table = event.queryStringParameters
    ? event.queryStringParameters.table
    : null;

  switch (table) {
    case "message":
      const res = await postMessages(event);
      return formattedReturn(200, { message: res });
    default:
      return formattedReturn(400, { message: "No table found" });
  }
};
