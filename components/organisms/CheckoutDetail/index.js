import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { setCheckout } from "../../../service/player";

export const CheckoutDetail = () => {
  const [bankAccount, setBankAccount] = useState("");
  const [verifyID, setVerifyID] = useState("");
  const [payment, setPayment] = useState({
    _id: "",
    type: "",
  });
  const [nominal, setNominal] = useState({
    _id: "",
    coinName: "",
    coinQuantity: 0,
    price: 0,
  });
  const [bank, setBank] = useState({
    _id: "",
    name: "",
    bankName: "",
    noRekening: "",
  });
  const [detailGame, setDetailGame] = useState({
    name: "",
    category: {
      name: "",
      id: "",
    },
    thhumbnail: "",
    id: "",
  });
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [checkbox, setCheckbox] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const dataDetailGame = localStorage.getItem("detailGame");
    if (dataDetailGame) {
      setDetailGame(JSON.parse(dataDetailGame));
    }

    const dataPayment = localStorage.getItem("payment");
    if (dataPayment) {
      setPayment(JSON.parse(dataPayment));
    }

    const dataNominal = localStorage.getItem("nominal");
    if (dataNominal) {
      setNominal(JSON.parse(dataNominal));
    }

    const dataBank = localStorage.getItem("bank");
    if (dataBank) {
      setBank(JSON.parse(dataBank));
    }

    const dataBankAccount = localStorage.getItem("bankAccount");
    if (dataBankAccount) {
      setBankAccount(dataBankAccount);
    }

    const dataVerifyID = localStorage.getItem("verifyID");
    if (dataVerifyID) {
      setVerifyID(dataVerifyID);
    }

    setTax(nominal.price * 0.1);
    setTotal(nominal.price + tax);
  }, [nominal.price, tax]);

  const handleConfirm = async () => {
    if (!checkbox) {
      return alert("Please check the checkbox");
    }

    const data = {
      voucher: detailGame.id,
      nominal: nominal._id,
      payment: payment._id,
      bank: bank._id,
      name: bankAccount,
      accountUser: verifyID,
    };

    const response = await setCheckout(data);
    localStorage.removeItem("detailGame");
    localStorage.removeItem("payment");
    localStorage.removeItem("nominal");
    localStorage.removeItem("bank");
    localStorage.removeItem("bankAccount");
    localStorage.removeItem("verifyID");

    router.push("/complete-checkout");
  };

  return (
    <>
      {" "}
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID <span className="purchase-details">{verifyID}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {nominal.coinQuantity} {nominal.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <NumericFormat
              value={nominal.price}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              prefix="Rp "
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <NumericFormat
              value={tax}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              prefix="Rp "
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <NumericFormat
              value={total}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              prefix="Rp "
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{bankAccount}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type <span className="payment-details">{payment.type}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name <span className="payment-details">{bank.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name <span className="payment-details">{bank.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number <span className="payment-details">{bank.noRekening}</span>
        </p>
      </div>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          onClick={handleConfirm}
          type="button"
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          role="button"
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
};
