const { messageTable } = require("../airtable");

module.exports = async (event) => {
  const { identity, email, message } = event.queryStringParameters;
  let res = messageTable
    .create([
      {
        fields: { author: identity, email: email, message: message },
      },
    ])
    .then((res) => {
      return "success";
    })
    .catch((err) => {
      return err;
    });

  return res;
};
