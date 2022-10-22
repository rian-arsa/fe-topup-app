import React from "react";

export default function Input(props) {
  const { label, placeholder, type, name, id, value, onChange } = props;
  return (
    <>
      <label
        for="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={id}
        name={name}
        aria-describedby="name"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
