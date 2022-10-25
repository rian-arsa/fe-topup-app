import jwtDecode from "jwt-decode";
import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/Sidebar";

function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar active="overview" />
      <OverviewContent />
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

export default Member;
