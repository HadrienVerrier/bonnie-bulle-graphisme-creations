const { creationsTable, imagesTable } = require("./airtable");
const getCreations = require("./creations/creations");
const formattedReturn = require("./formattedReturn");
const getUser = require("./user/getUser");

module.exports = async (event) => {
  let table = event.queryStringParameters
    ? event.queryStringParameters.table
    : null;

  switch (table) {
    case "creations":
      return await getCreations(event);
    case "user":
      return await getUser();
    default:
      return formattedReturn(400, { message: "No table found" });
  }
};
