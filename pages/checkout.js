import jwtDecode from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { CheckoutConfirmation } from "../components/organisms/CheckoutConfirmation";
import { CheckoutDetail } from "../components/organisms/CheckoutDetail";
import { CheckoutItem } from "../components/organisms/CheckoutItem";

function Checkout(props) {
  const { user } = props;
  console.log(user);
  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <Link href="/">
              <a>
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </a>
            </Link>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />

          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload = jwtDecode(jwtToken);
  const userFromPayload = payload.player;

  if (userFromPayload.avatar) {
    userFromPayload.avatar = `${process.env.NEXT_PUBLIC_IMG}/${userFromPayload.avatar}`;
  }
  return {
    props: {
      user: userFromPayload,
    },
  };
};

export default Checkout;
