import Image from "next/image";
import { useEffect, useState } from "react";
import { getOverview } from "../../../service/member";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState([]);

  const getDataOverviewAPI = async () => {
    const response = await getOverview();
    const data = response.data;

    if (data) {
      setHistory(data.history);
      setCount(data.count);
    }

    console.log(history);
  };

  useEffect(() => {
    getDataOverviewAPI();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((data) => {
                return (
                  <Category
                    key={data._id}
                    icon="icon-dekstop"
                    nominal={data.value}
                  >
                    {data.name}
                  </Category>
                );
              })}
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((data) => {
                  return (
                    <TableRow
                      key={data._id}
                      title={data.historyVoucherTopup.gameName}
                      categori={data.historyVoucherTopup.category}
                      itemName={data.historyVoucherTopup.coinName}
                      item={data.historyVoucherTopup.coinQuantity}
                      price={data.value}
                      status={data.status}
                      image={data.historyVoucherTopup.thumbnail}
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
