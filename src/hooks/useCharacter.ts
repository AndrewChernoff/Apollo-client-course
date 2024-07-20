import { gql, useQuery } from "@apollo/client";

type EpisodesType = {
    id: string;
    name: string;
    episode: any
  }

type CharacterType = {
  character: {
    id: string;
    name: string;
    image: string;
    episode: EpisodesType[];
  };
};

export const GET_CHARACTER = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;
type CharacterVar = {
  id: string;
};

export const useCharacter = (id: string) => {
  const { loading, error, data } = useQuery<CharacterType, CharacterVar>(
    GET_CHARACTER,
    {
      variables: { id },
    }
  );

  return { loading, error, data };
};
