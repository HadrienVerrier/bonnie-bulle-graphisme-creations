require("dotenv").config();

import Airtable from "airtable";
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
);

const images = base("images");
const creations = base("creations");

export default { images, creations };
