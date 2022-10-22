import Link from "next/link";
import React from "react";
import { Row } from "./Row";

export default function TransactionDetailContent() {
  return (
    <section className="transactions-detail overflow-auto">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Details #GG001
          </h2>
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                  <div className="game-checkout d-flex flex-row align-items-center">
                    <div className="pe-4">
                      <div className="cropped">
                        <img
                          src="/img/Thumbnail-3.png"
                          width="200"
                          height="130"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <p className="fw-bold text-xl color-palette-1 mb-10">
                        Mobile Legends:
                        <br /> The New Battle 2021
                      </p>
                      <p className="color-palette-2 m-0">Category: Mobile</p>
                    </div>
                  </div>
                  <div>
                    <p className="fw-medium text-center label pending m-0 rounded-pill">
                      Pending
                    </p>
                  </div>
                </div>
                <hr />
                <div className="purchase pt-30">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">
                    Purchase Details
                  </h2>
                  <Row title="Your Game ID" value="masayoshizero" />
                  <Row title="Order ID" value="#GG001" />
                  <Row title="Item" value="250 Diamonds" />
                  <Row title="Price" value={42000000} />
                  <Row title="Tax (10%)" value={420000} />
                  <Row
                    title="Total"
                    value={500000}
                    className="color-palette-4"
                  />
                </div>
                <div className="payment pt-10 pb-10">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">
                    Payment Informations
                  </h2>
                  <Row title="Your Account Name" value="Masayoshi Zero" />
                  <Row title="Type" value="Worldwide Transfer" />
                  <Row title="Bank Name" value="Bank Central Asia" />
                  <Row
                    title="Bank Account Name"
                    value="PT Store GG Indonesia"
                  />
                  <Row title="Bank Number" value="1800 - 9090 - 2021" />
                </div>
                <div className="d-md-block d-flex flex-column w-100">
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
