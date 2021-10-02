import formattedReturn from "./helpers/formattedReturn";

export default handler = async (event) => {
	return formattedReturn(200, "Hello World");
};
