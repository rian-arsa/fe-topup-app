import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { signUp } from "../service/auth";
import { getGameCategories } from "../service/player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const getCategoryAPI = useCallback(async () => {
    const response = await getGameCategories();
    setCategories(response);
    setFavorite(response[0]._id);
  }, [getGameCategories]);

  useEffect(() => {
    getCategoryAPI();
  }, [getCategoryAPI]);

  useEffect(() => {
    const localData = localStorage.getItem("form-signup");
    setLocalForm(JSON.parse(localData));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formLocal = localStorage.getItem("form-signup");
    const form = JSON.parse(formLocal);

    const data = new FormData();
    data.append("avatar", image);
    data.append("favorite", favorite);
    data.append("email", form.email);
    data.append("password", form.password);
    data.append("name", form.name);
    data.append("username", form.name);
    data.append("phoneNumber", "0822121998219882");

    const response = await signUp(data);

    if (response.error) {
      return toast.error(response.message);
    }

    console.log(response);
    const tokenBase64 = btoa(response.data.token);
    Cookies.set("token", tokenBase64, { expires: 1 });
    router.push("/sign-up-success");
    localStorage.removeItem("form-signup");
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label for="avatar">
                    {imagePreview ? (
                      <img src={imagePreview} className="image-preview" />
                    ) : (
                      <Image
                        src="/icon/upload.svg"
                        width={120}
                        height={120}
                        alt="Upload"
                      />
                    )}
                  </label>
                  <input
                    type="file"
                    id="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setImagePreview(URL.createObjectURL(e.target.files[0]));
                      return setImage(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  for="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(e) => setFavorite(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                role="button"
                type="submit"
              >
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default SignUpPhoto;
