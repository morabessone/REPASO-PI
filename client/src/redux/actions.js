import axios from "axios";

export const OBTENER_TODOS = "OBTENER TODOS";
export const OBTENER_EPISODIOS = "OBTENER EP";
export const RUTA_GET = "http://localhost:3001/character/getCharacters";
export const FILTER = "FILTER";
export const RUTA_GET_EPISODE = "http://localhost:3001/episode/getEpisodes";

export function obtener() {
  return async function pedido(dispatch) {
    let pedidoAlBack = await axios.get(RUTA_GET);
    return dispatch({
      type: OBTENER_TODOS,
      payload: pedidoAlBack.data, // [{...}, {...}, {...}, etc] viene del back
    });
  };
}

export function obternerEpisodios() {
  return async (dispatch) => {
    let pedidoAlBack = await axios.get(RUTA_GET_EPISODE);
    return dispatch({
      type: OBTENER_EPISODIOS,
      payload: pedidoAlBack.data,
    });
  };
}

export function filter(value) {
  return (dispatch) => {
    dispatch({ type: FILTER, payload: value });
  };
}
