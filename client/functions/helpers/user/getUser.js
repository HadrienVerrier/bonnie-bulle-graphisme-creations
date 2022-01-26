const { userTable } = require("../airtable");
const formattedReturn = require("../formattedReturn");

module.exports = async () => {
  const user = await userTable.select().firstPage();

  const formatedUser = user.map((elm) => ({
    name: elm.fields.name,
    pictureArray: elm.fields.profilPicture,
  }));
  return formattedReturn(200, formatedUser[0]);
};
