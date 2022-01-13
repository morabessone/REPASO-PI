import React from "react";

export default function Individual({ name, image, species }) {
  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <img src={image} alt="character" />
      </div>
      <div>
        <h3>{species}</h3>
      </div>
      <div>{/* episode.map(ep => <h1>ep<h1/> ) */}</div>
    </div>
  );
}

/*

rick

\O/

human

episodios: 8 / 8 / 8/ 8 /

*/
