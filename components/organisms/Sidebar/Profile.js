import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    id: "",
  });

  const handleLogin = () => {
    const token = Cookies.get("token");
    if (token) {
      const jwt_token = atob(token);
      const player = jwtDecode(jwt_token);
      if (player.player.avatar) {
        player.player.avatar = `${process.env.NEXT_PUBLIC_IMG}/${player.player.avatar}`;
      }

      setUser(player.player);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={user.avatar}
        width={90}
        height={90}
        alt="Avatar"
        className="img-fluid mb-20"
        style={{ borderRadius: "100%" }}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
