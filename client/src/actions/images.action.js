export const GET_ILLUSTRATIONS = "GET_ILLUSTRATIONS";
export const GET_GRAPHICDESIGN = "GET_GRAPHICDESIGN";
export const GET_PROFILPICTURE = "GET_PROFILPICTURE";

export const getIllustrations = () => {
  return async (dispatch) => {
    fetch(
      "/api/server?" +
        new URLSearchParams({
          table: "creations",
          query: "illustration",
        }),
      {
        method: "GET",
      }
    )
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`erreur HTTP! statut: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: GET_ILLUSTRATIONS, payload: data });
      })

      .catch(function (err) {
        console.log("Fetch Error :", err);
      });
  };
};

export const getGraphicDesign = () => {
  return async (dispatch) => {
    fetch(
      "/api/server?" +
        new URLSearchParams({
          table: "creations",
          query: "graphicDesign",
        }),
      {
        method: "GET",
      }
    )
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`erreur HTTP! statut: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: GET_GRAPHICDESIGN, payload: data });
      })

      .catch(function (err) {
        console.log("Fetch Error :", err);
      });
  };
};
export const getProfilPicture = () => {
  return async (dispatch) => {
    fetch(
      "/api/server?" +
        new URLSearchParams({
          table: "user",
        }),
      {
        method: "GET",
      }
    )
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`erreur HTTP! statut: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: GET_PROFILPICTURE, payload: data });
      })

      .catch(function (err) {
        console.log("Fetch Error :", err);
      });
  };
};
