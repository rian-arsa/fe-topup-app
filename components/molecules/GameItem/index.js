import Image from "next/image";
import Link from "next/link";

function GameItem(props) {
  const { title, category, thumbnail } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <Image
              src={`/img/${thumbnail}.png`}
              width={205}
              height={270}
              alt=""
              className="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto"></div>
              <Image
                src="/icon/console.svg"
                width={54}
                height={36}
                alt="console"
              />
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default GameItem;
