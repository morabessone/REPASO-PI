import React, { useEffect } from "react";
import Individual from "./Individual";
import { useDispatch, useSelector } from "react-redux";
import { obtener } from "../../redux/actions";
import Filter from "../filtro/Filtro";

export default function Cards() {
  const dispatch = useDispatch();
  const personajesRenderizar = useSelector((state) => state.filtrados); // [{...}, {...}]

  useEffect(() => {
    dispatch(obtener());
  }, []);

  return (
    <div>
      <h2>Personajes de Rick & Morty</h2>
      {/* mapear el estado donde tengo los personajes, y renderizar una carta individual por cada uno */}

      <Filter />

      {personajesRenderizar.length > 0 ? (
        personajesRenderizar.map((pj, posicion) => (
          <>
            <Individual
              key={posicion}
              name={pj.name}
              image={pj.image}
              species={pj.species}
            />
          </>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
