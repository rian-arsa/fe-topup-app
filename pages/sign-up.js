import Image from "next/image";
import Link from "next/link";
import { SignUpForm } from "../components/organisms/SignUpForm";

function SignUp() {
  return (
    <section class="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div class="container mx-auto">
        <form action="">
          <div class="pb-50">
            <Link href="/">
              <a className="navbar-brand">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </a>
            </Link>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}

export default SignUp;
