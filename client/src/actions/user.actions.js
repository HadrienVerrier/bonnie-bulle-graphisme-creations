export const GET_USER = "GET_USER";

export const getUser = () => {
  return async (dispatch) => {
    fetch("/api/server?" + new URLSearchParams({ table: "user" }), {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`erreur HTTP! statut: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: GET_USER, payload: data });
      })
      .catch((err) => {
        console.log("Fetch Error : ", err);
      });
  };
};
