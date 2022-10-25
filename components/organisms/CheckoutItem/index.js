import Image from "next/image";
import { useEffect, useState } from "react";

export const CheckoutItem = () => {
  const [detailGame, setDetailGame] = useState({
    name: "",
    category: {
      name: "",
      id: "",
    },
    thhumbnail: "",
    _id: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("detailGame");
    if (data) {
      setDetailGame(JSON.parse(data));
      return;
    }

    console.log("error");
  }, []);

  const URL_IMG = process.env.NEXT_PUBLIC_IMG;

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <Image
            loader={myLoader}
            src={`${URL_IMG}/${detailGame.thumbnail}`}
            width={281}
            height={381}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          {detailGame.name}
        </p>
        <p className="color-palette-2 m-0">
          Category: {detailGame.category.name}
        </p>
      </div>
    </div>
  );
};
