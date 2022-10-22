import Image from "next/image";
import cx from "classnames";
import Link from "next/link";
import { useState } from "react";

function Auth(props) {
  const [show, setShow] = useState(true);
  const { isLogin } = props;

  const classTitle = cx({
    "dropdown-menus": true,
    show: show,
  });
  const showNav = (show) => {
    let temp = show ? false : true;
    setShow(temp);
  };
  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div onClick={() => showNav(show)}>
          <Link href="/#">
            <a className="ms-lg-40" role="button">
              <Image
                src="/img/avatar-1.png"
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            </a>
          </Link>

          <ul className={classTitle}>
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">
                  Account Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sign-in">
                <a className="dropdown-item text-lg color-palette-2">Log Out</a>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href={"/sign-in"}>
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}

export default Auth;
