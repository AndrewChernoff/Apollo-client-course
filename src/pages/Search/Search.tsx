import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

type CharactersType = {
  results: {
    name: string;
    gender: string;
  }[]
};

type DataType = {
  characters: CharactersType;
};

type VarsType = {
  name: string;
};

const GET_CHARACTER_LOCATION = gql`
  query ($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        gender
      }
    }
  }
`;

export const Search = () => {
  const [name, setName] = useState("");

  const [getCharacters, { loading, error, data }] = useLazyQuery<
    DataType,
    VarsType
  >(GET_CHARACTER_LOCATION/* , {
    variables: {
      name,
    },
  } */);

  if (error) return <div>Something went wrong!</div>;

  if (loading) return <div>Loading...</div>;

  const handleSearch = () => {
    getCharacters({
      variables: {
        name,
      },
    });
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <button onClick={handleSearch}>Search</button>

      <div>{data?.characters.results.map(el => {
        return <li>{el.name}</li>
      })}</div>
    </div>
  );
};
