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

export default Transaction;
