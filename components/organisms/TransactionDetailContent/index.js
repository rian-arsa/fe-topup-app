import Link from "next/link";
import React from "react";
import { Row } from "./Row";

export default function TransactionDetailContent({ data }) {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG;

  return (
    <section className="transactions-detail overflow-auto mt-10">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                  Details #GG001
                </h2>
                <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                  <div className="game-checkout d-flex flex-row align-items-center">
                    <div className="pe-4">
                      <div className="cropped">
                        <img
                          src={`${IMG_URL}/${data.historyVoucherTopup.thumbnail}`}
                          width="200"
                          height="130"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <p className="fw-bold text-xl color-palette-1 mb-10">
                        {data.historyVoucherTopup.gameName}
                      </p>
                      <p className="color-palette-2 m-0">
                        Category: {data.historyVoucherTopup.category}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="fw-medium text-center label Pending m-0 rounded-pill">
                      {data.status}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="purchase pt-30">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">
                    Purchase Details
                  </h2>
                  <Row title="Your Game ID" value={data.accountUser} />
                  <Row title="Order ID" value="#GG001" />
                  <Row
                    title="Item"
                    value={`${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName}`}
                  />
                  <Row
                    title="Price"
                    value={data.historyVoucherTopup.price}
                    isPrice={true}
                  />
                  <Row title="Tax (10%)" value={data.tax} isPrice={true} />
                  <Row
                    title="Total"
                    value={data.value}
                    className="color-palette-4"
                    isPrice={true}
                  />
                </div>
                <div className="payment pt-10 pb-10">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">
                    Payment Informations
                  </h2>
                  <Row title="Your Account Name" value={data.name} />
                  <Row title="Type" value={data.historyPayment.type} />
                  <Row title="Bank Name" value={data.historyPayment.bankName} />
                  <Row
                    title="Bank Account Name"
                    value={data.historyPayment.name}
                  />
                  <Row
                    title="Bank Number"
                    value={data.historyPayment.noRekening}
                  />
                </div>
                <div className="d-md-block d-flex flex-column w-100">
                  <Link href="/">
                    <a
                      className="btn btn-primary rounded-pill fw-medium text-white border-0 text-lg px-5 py-3 mb-3"
                      role="button"
                    >
                      Kembali ke Home
                    </a>
                  </Link>
                  <span style={{ width: 20, display: "inline-block" }}></span>
                  <Link href="#">
                    <a
                      className="btn btn-success rounded-pill fw-medium text-white border-0 text-lg px-5 py-3 mb-3"
                      role="button"
                    >
                      WhatsApp ke Admin
                    </a>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
