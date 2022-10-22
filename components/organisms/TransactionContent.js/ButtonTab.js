import cx from "classnames";
import Link from "next/link";

export default function ButtonTab(props) {
  const { title, active = false, href = "/member" } = props;

  const btnClas = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <Link href={href}>
      <a data-filter="*" className={btnClas}>
        {title}
      </a>
    </Link>
  );
}
