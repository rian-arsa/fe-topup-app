import cx from "classnames";
import Link from "next/link";

export default function ButtonTab(props) {
  const { title, active = false, onClick } = props;

  const btnClas = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active === true,
  });

  return (
    <a data-filter="*" className={btnClas} onClick={onClick}>
      {title}
    </a>
  );
}
