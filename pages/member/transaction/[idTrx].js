import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { getTransactionDetail } from "../../../service/member";

function TransactionDetail(props) {
  const { data } = props;

  return <TransactionDetailContent data={data} />;
}

export const getServerSideProps = async ({ req, params }) => {
  const { token } = req.cookies;
  const { idTrx } = params;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");

  const response = await getTransactionDetail(idTrx, jwtToken);

  return {
    props: {
      data: response.data,
    },
  };
};

export default TransactionDetail;
