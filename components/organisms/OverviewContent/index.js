import Image from "next/image";
import React from "react";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
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
              <Category icon="icon-dekstop" nominal={18500000}>
                Game <br /> Desktop
              </Category>
              <Category icon="icon-mobile" nominal={8455000}>
                Game <br /> Mobile
              </Category>
              <Category icon="icon-categories" nominal={5000000}>
                Other <br /> Categories
              </Category>
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
                <TableRow
                  title="Mobile Legend"
                  categori="Mobile"
                  item={200}
                  price={850000}
                  status={"Pending"}
                  image="overview-1"
                />
                <TableRow
                  title="Call of Duty:Modern"
                  categori="Dekstop"
                  item={550}
                  price={740000}
                  status={"Success"}
                  image="overview-2"
                />
                <TableRow
                  title="Clash of Clans"
                  categori="Mobile"
                  item={100}
                  price={120000}
                  status={"Failed"}
                  image="overview-3"
                />
                <TableRow
                  title="The Royal Game"
                  categori="Mobile"
                  item={225}
                  price={200000}
                  status={"Pending"}
                  image="overview-4"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
