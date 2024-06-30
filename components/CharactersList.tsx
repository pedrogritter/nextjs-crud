import Link from "next/link";
import React from "react";
import ReactCountryFlag from "react-country-flag";

async function getCharacters() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/characters/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

const CharactersList = async () => {
  const characters = await getCharacters();

  return (
    <div className="w-screen flex flex-row mx-5 gap-3 items-stretch px-8 py-8">
      {characters?.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </div>
  );
};

function CharacterCard({ character }: any) {
  const { id, name, description, country, style, created } = character || {};
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  return (
    <Link href={`/characters/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 ">
        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
        <div className="px-6 py-4">
          <div className="text-white font-bold text-xl mb-2">{name}</div>
          <div className="flex flex-row items-center">
            <p className="text-white text-base px-2">
              {regionNamesInEnglish.of(country)}
            </p>
            <ReactCountryFlag countryCode={country} />
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {style}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CharactersList;
