import React from "react";

interface CharacterPagePros {
  name: string;
}
const CharacterPage = ({ name }: CharacterPagePros) => {
  return <div>CharacterPage - {name} </div>;
};

export default CharacterPage;
