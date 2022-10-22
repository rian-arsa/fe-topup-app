export const Row = (props) => {
  const { title, value, className } = props;
  return (
    <>
      <p className="text-lg color-palette-1 mb-20">
        {title} <span className={`purchase-details ${className}`}>{value}</span>
      </p>
    </>
  );
};
