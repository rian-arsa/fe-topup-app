import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { getTransaction } from "../../../service/member";
import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";

export default function TransactionContent() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  const getDataTransactionAPI = async (status) => {
    const response = await getTransaction(status);
    const dataRes = response.data;
    setTotal(dataRes.total);
    setData(dataRes.history);
  };

  useEffect(() => {
    getDataTransactionAPI(filter);
  }, [filter]);

  const onClickFilter = (data) => {
    setFilter(data);
    // getDataTransactionAPI(data);
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumericFormat
              value={total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              prefix="Rp "
            />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                onClick={() => onClickFilter("all")}
                title="All trx"
                active={filter === "all"}
              />
              <ButtonTab
                onClick={() => onClickFilter("success")}
                title="Success"
                active={filter === "success"}
              />
              <ButtonTab
                onClick={() => onClickFilter("pending")}
                title="Pending"
                active={filter === "pending"}
              />
              <ButtonTab
                onClick={() => onClickFilter("failed")}
                active={filter === "failed"}
                title="Failed"
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {data.map((data) => {
                  return (
                    <TableRow
                      key={data._id}
                      id={data._id}
                      image={data.historyVoucherTopup.thumbnail}
                      title={data.historyVoucherTopup.gameName}
                      category={data.historyVoucherTopup.category}
                      item={data.historyVoucherTopup.coinQuantity}
                      itemName={data.historyVoucherTopup.coinName}
                      price={data.value}
                      status={data.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
