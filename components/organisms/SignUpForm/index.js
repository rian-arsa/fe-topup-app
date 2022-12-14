import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    const formLocal = localStorage.getItem("form-signup");
    const form = JSON.parse(formLocal);

    if (form) {
      setName(form.name);
      setEmail(form.email);
      setPassword(form.password);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputForm = {
      name,
      email,
      password,
    };

    localStorage.setItem("form-signup", JSON.stringify(inputForm));
    router.push("/sign-up-photo");
  };

  return (
    <>
      <h2 class="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p class="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div class="pt-50">
        <label
          for="name"
          class="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Full Name
        </label>
        <input
          type="text"
          class="form-control rounded-pill text-lg"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="pt-30">
        <label
          for="email"
          class="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          class="form-control rounded-pill text-lg"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="pt-30">
        <label
          for="password"
          class="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          class="form-control rounded-pill text-lg"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div class="button-group d-flex flex-column mx-auto pt-50">
        <button
          onClick={handleSubmit}
          class="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
        >
          Continue
        </button>
        <Link href="/sign-in">
          <a
            class="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </div>
    </>
  );
};
