const { messageTable } = require("../airtable");

module.exports = async (event) => {
  const { identity, email, message } = event.queryStringParameters;
  messageTable.create(
    [
      {
        fields: { author: identity, email: email, message: message },
      },
    ],
    (err, records) => {
      if (err) {
        return "error";
      }
      return "success";
    }
  );
  return "success";
};
