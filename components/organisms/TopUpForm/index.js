import React from "react";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

export const TopUpForm = (props) => {
  const { nominals, payments } = props;

  return (
    <form action="./checkout.html" method="POST">
      <div class="pt-md-50 pt-30">
        <div class="">
          <label
            for="ID"
            class="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            class="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div class="pt-md-50 pb-md-50 pt-30 pb-20">
        <p class="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div class="row justify-content-between">
          {nominals.map((item) => (
            <NominalItem
              key={item._id}
              id={item._id}
              coinQuantity={item.coinQuantity}
              price={item.price}
              coinName={item.coinName}
            />
          ))}
          <div class="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div class="pb-md-50 pb-20">
        <p class="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div class="row justify-content-between">
            {payments.map((item) => {
              return item.banks.map((bank) => {
                return (
                  <PaymentItem
                    key={bank._id}
                    type={item.type}
                    bankName={bank.bankName}
                  />
                );
              });
            })}
            <div class="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div class="pb-50">
        <label
          for="bankAccount"
          class="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          class="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>
      <div class="d-sm-block d-flex flex-column w-100">
        <a
          href="./checkout.html"
          type="submit"
          class="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </a>
      </div>
    </form>
  );
};
