import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { getFeaturedGames } from "../../../service/player";
import GameItem from "../../molecules/GameItem";

function FeaturedGame() {
  const [gameList, setGameList] = useState([]);
  const API_IMG = process.env.NEXT_PUBLIC_IMG;

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGames();
    setGameList(data);
  }, []);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((game) => (
            <GameItem
              key={game._id}
              title={game.name}
              category={game.category.name}
              thumbnail={`${API_IMG}/${game.thumbnail}`}
              id={game._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedGame;
