import React from "react";

export default function PaymentItem(props) {
  const { type, bankName, onChange } = props;

  return (
    <label
      class="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      for={bankName._id}
      onChange={onChange}
    >
      <input
        class="d-none"
        type="radio"
        id={bankName._id}
        name="paymentMethod"
        value={bankName._id}
      />
      <div class="detail-card">
        <div class="d-flex justify-content-between">
          <p class="text-3xl color-palette-1 fw-medium m-0">{type}</p>
          <svg
            id="icon-check"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
            <path
              d="M5.83301 10L8.46459 12.5L14.1663 7.5"
              stroke="#00BAFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p class="text-lg color-palette-1 m-0">{bankName}</p>
      </div>
    </label>
  );
}
