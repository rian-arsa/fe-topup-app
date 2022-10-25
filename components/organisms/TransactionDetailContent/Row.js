import { NumericFormat } from "react-number-format";

export const Row = (props) => {
  const { title, value, className, isPrice = false } = props;
  return (
    <>
      <p className="text-lg color-palette-1 mb-20">
        {title}{" "}
        <span className={`purchase-details ${className}`}>
          {isPrice ? (
            <NumericFormat
              value={value}
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              prefix="Rp "
            />
          ) : (
            value
          )}
        </span>
      </p>
    </>
  );
};
