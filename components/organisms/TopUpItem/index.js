import Image from "next/image";
import React from "react";

export const TopUpItem = (props) => {
  const { type } = props;

  if (type === "mobile") {
    return (
      <div class="row align-items-center">
        <div class="col-md-12 col-4">
          <Image
            src="/img/Thumbnail-3.png"
            width={280}
            height={380}
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="col-md-12 col-8 d-md-none d-block">
          <h2 class="text-xl fw-bold color-palette-1 text-start mb-10">
            Mobile Legends:
            <br />
            The New Battle 2021
          </h2>
          <p class="text-sm color-palette-2 text-start mb-0">
            Category: Mobile
          </p>
        </div>
      </div>
    );
  }

  return (
    <div class="pb-50 d-md-block d-none">
      <h2 class="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
        Mobile Legends:
        <br />
        The New Battle 2021
      </h2>
      <p class="text-lg color-palette-2 mb-0">Category: Mobile</p>
    </div>
  );
};
