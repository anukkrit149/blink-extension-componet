import React from "react";
import { data } from "../data";
import { connect } from "starknetkit";

export default function ActionButtons() {
  const handleActionClick = async (action) => {
    console.log("action-" + action.label);
    console.log("action-calldata-" + action.data);

    const { wallet } = await connect();

    if (wallet && wallet.isConnected) {
      console.log("Wallet connected");
    } else {
      console.log("Wallet not connected");
    }
  };

  return (
    <div className="blink-actions">
      {data.links.actions.map((action, index) => (
        <button
          key={index}
          className="action-button"
          style={{
            backgroundColor: action.color,
            borderColor: action.color,
          }}
          onClick={() => handleActionClick(action)}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}