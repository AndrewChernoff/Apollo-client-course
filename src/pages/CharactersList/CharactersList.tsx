import { Link } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import s from "./CharactersList.module.css";

export const CharactersList = () => {
  const { loading, error, data } = useCharacters();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  console.log(data);

  return (
    <div className={s.characterList}>
      {data?.characters.results.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.image} alt={el.name} />
            <Link to={`character/${el.id}`}>
              <h2>{el.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
