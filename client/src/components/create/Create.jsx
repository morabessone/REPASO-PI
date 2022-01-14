import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obternerEpisodios } from "../../redux/actions";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Create() {
  //   const history = useHistory();

  const dispatch = useDispatch();
  const stateEpisodios = useSelector((state) => state.episodios); // [{...}, {...}, {...}] arr de ep

  const [personaje, setPersonaje] = useState({
    name: "",
    species: "",
    origin: "",
    image: "",
    episode: [],
  });

  const [vacio, setVacio] = useState(false);

  // arr = [ 1, 1, 2, 3, 4, 4, 4]
  // new Set(arr)
  // [1,2,3,4]

  function handleSelect(e) {
    setPersonaje((personaje) => ({
      ...personaje,
      episode: [...personaje.episode, e.target.value], // personaje.episode.push(e.target.value)
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3001/character/create/", personaje);
    alert("Personaje creado con exito");
    // history.push("/home");
  }

  let variable;

  function handleChange(e) {
    setPersonaje({
      ...personaje,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    dispatch(obternerEpisodios());
    // console.log(personaje);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={personaje.name} onChange={handleChange} />
        {variable === "debes ingresar un nombre" ? <h1>{variable}</h1> : false}

        <label>Species</label>
        <input
          name="species"
          value={personaje.species}
          onChange={handleChange}
        />
        <label>Origin</label>
        <input name="origin" value={personaje.origin} onChange={handleChange} />
        {variable === "Debes ingresar un origen" ? (
          <h1>Debes ingresar un origen</h1>
        ) : (
          false
        )}
        <label>Image</label>
        <input name="image" value={personaje.image} onChange={handleChange} />
        <select onChange={handleSelect}>
          {stateEpisodios.length > 0 &&
            stateEpisodios.map((ep) => {
              return (
                <option key={ep.id} value={ep.id}>
                  {ep.name}
                </option>
              );
            })}
        </select>
        <button type="submit">CREATE!</button>
      </form>
    </div>
  );
}
