import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

export default function Sidebar(props) {
  const { active } = props;

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="icon-menu-overview"
            {...(active === "overview" && { active: true })}
            href="/member"
          />
          <MenuItem
            title="Transaction"
            icon="icon-menu-transaction"
            href="/member/transaction"
            {...(active === "transactions" && { active: true })}
          />
          <MenuItem title="Messages" icon="icon-menu-messages" href="/member" />
          <MenuItem title="Rewards" icon="icon-menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="icon-menu-settings"
            href="/member/edit-profile"
            {...(active === "settings" && { active: true })}
          />
          <MenuItem
            title="Log Out"
            icon="icon-menu-logout"
            onClick={handleLogout}
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
