import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";
import s from "./Character.module.css";

export const Character = () => {
  const { id } = useParams();

  const { loading, error, data } = useCharacter(id as string);

  if (error) return <div>Something went wrong!</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className={s.character}>
      <img src={data?.character.image} alt="" />
      <div className={s.character__content}>
        <h1>{data?.character.name}</h1>
        <div className={s.character__episode}>
          <div>
            {data?.character.episode.map((el) => {
              return <div key={el.id}>
                {el.name} - <b>{el.episode}</b>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
