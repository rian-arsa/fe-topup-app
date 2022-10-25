import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MenuItem(props) {
  const { title, icon, active = false, href, onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem} onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          alt="Icon menu"
          width={25}
          height={25}
        />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
