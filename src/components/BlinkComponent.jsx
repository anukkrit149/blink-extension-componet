import React from "react";
import Header from "./Header";
import ActionButtons from "./ActionButtons";
import "../component.css";

export default function BlinkComponent() {
  return (
    <div className="blink-container">
      <Header />
      <ActionButtons />
    </div>
  );
}