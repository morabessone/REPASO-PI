import React from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();

  function handleSelect(e) {
    dispatch(filter(e.target.value)); // dispatch(filter("Default" / "Human" / "Alien"))
  }

  return (
    <div>
      <select onChange={handleSelect}>
        <option value="Default">Default - todos</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </div>
  );
}

// SELECT ---- 2-- HUMAN --- ALIEN
