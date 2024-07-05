import React from "react";
import { data } from "../data";

export default function Header() {
  return (
    <header className="blink-header">
      <img src={data.image} alt="Realms DAO Platform" />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </header>
  );
}
