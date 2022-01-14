import { OBTENER_TODOS, FILTER, OBTENER_EPISODIOS } from "./actions";

const initialState = {
  personajes: [], // todos los personajes guardados
  filtrados: [], // estado que vamos a renderizar
  detalle: {}, // estado para renderizar el detalle
  episodios: [], // estado con los episodios para poder renderizarlos
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case OBTENER_TODOS:
      return {
        ...state,
        personajes: action.payload, // arreglo de obj personajes
        filtrados: action.payload, // que viene del back
      };
    case OBTENER_EPISODIOS:
      return {
        ...state,
        episodios: action.payload,
      };
    case FILTER:
      if (action.payload === "Default") {
        return {
          ...state,
          filtrados: state.personajes, // vuelvo a cargar todos los pjs
        };
      } else if (action.payload) {
        return {
          ...state,
          filtrados: state.personajes.filter(
            (pj) => pj.species === action.payload
          ), // "Human" o "Alien"
        };
      } else {
        return {
          ...state,
        };
      }
    default:
      return state;
  }
}

// reducer --> modifica el estado a traves de una copia
// redux: estado anterior <--> estado nuevo
