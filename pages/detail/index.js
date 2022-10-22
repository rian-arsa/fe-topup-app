import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import { TopUpForm } from "../../components/organisms/TopUpForm";
import { TopUpItem } from "../../components/organisms/TopUpItem";

function Detail() {
  return (
    <>
      <Navbar />
      <section class="detail pt-lg-60 pb-50">
        <div class="container-xxl container-fluid">
          <div class="detail-header pb-50">
            <h2 class="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p class="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem type="mobile" />
            </div>
            <div class="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" />
              <hr />
              <TopUpForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Detail;
