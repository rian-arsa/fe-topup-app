import jwtDecode from "jwt-decode";
import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent.js";

function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar active="transactions" />
      <TransactionContent />
    </section>
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

export default Transaction;
