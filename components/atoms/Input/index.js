import React from "react";

export default function Input(props) {
  const { label, ...nativeProps } = props;
  return (
    <>
      <label
        for="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input className="form-control rounded-pill text-lg" {...nativeProps} />
    </>
  );
}
