import React from "react";

// Define the props type
interface TradeComponentProps {
  isBuy?: boolean; // Optional prop
  isSell?: boolean; // Optional prop
}

// Use the props type in the functional component
const TradeComponent: React.FC<TradeComponentProps> = ({ isBuy, isSell }) => {
  return (
    <div>
      {isBuy && <span>Buy</span>}
      {isSell && <span>Sell</span>}
    </div>
  );
};

export default TradeComponent;
