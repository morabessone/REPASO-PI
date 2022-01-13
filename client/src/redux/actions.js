import axios from "axios";

export const OBTENER_TODOS = "OBTENER TODOS";
export const RUTA_GET = "http://localhost:3001/character/getCharacters";

export function obtener() {
  return async function pedido(dispatch) {
    let pedidoAlBack = await axios.get(RUTA_GET);
    return dispatch({
      type: OBTENER_TODOS,
      payload: pedidoAlBack.data, // [{...}, {...}, {...}, etc] viene del back
    });
  };
}
