import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Input from "../../components/atoms/Input";
import Sidebar from "../../components/organisms/Sidebar";
import { setUpdateProfil } from "../../service/member";

function EditProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
    username: "",
  });
  const [preview, setPreview] = useState(null);

  const router = useRouter();

  const handleLogin = () => {
    const token = Cookies.get("token");
    if (token) {
      const jwt_token = atob(token);
      const player = jwtDecode(jwt_token);
      if (player.player.avatar) {
        player.player.avatar = `${process.env.NEXT_PUBLIC_IMG}/${player.player.avatar}`;
      }
      player.player.name = player.player.username;

      setUser(player.player);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  const onHandelSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", user.username);
    data.append("avatar", user.avatar);

    const response = await setUpdateProfil(data);
    if (response.error) {
      alert(response.error);
    } else {
      console.log(response);
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };

  return (
    <section className="edit-profile overflow-auto">
      <Sidebar active="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  {preview ? (
                    <Image
                      src={preview}
                      width={90}
                      height={90}
                      alt="avatar"
                      style={{ borderRadius: "100%" }}
                    />
                  ) : (
                    <Image
                      src={user.avatar}
                      width={90}
                      height={90}
                      alt="avatar"
                      style={{ borderRadius: "100%" }}
                    />
                  )}
                </div>
                <div className="image-upload">
                  <label for="avatar">
                    <Image
                      src="/icon/upload.svg"
                      width={90}
                      height={90}
                      className="avatar img-fluid"
                      alt="avatar"
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      setPreview(URL.createObjectURL(e.target.files[0]));
                      console.log(e.target.files[0]);
                      return setUser({
                        ...user,
                        avatar: e.target.files[0],
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  type="text"
                  value={user.username}
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  disabled
                  value={user.email}
                />
              </div>
              {/* <div className="pt-30">
                <Input
                  label="Phone"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone"
                />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  onClick={onHandelSubmit}
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

export default EditProfile;
