import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

export type ResultItem = {
  id: string;
  name: string;
  image: string;
};

export type CharactersData = {
  characters: {
    results: ResultItem[];
  };
};

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS);
  return { loading, error, data };
};
