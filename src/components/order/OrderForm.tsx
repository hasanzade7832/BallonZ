import { useState } from "react";
import OrderFormLimit from "./OrderFormLimit";
import OrderStopLimit from "./OrderStopLimit";

const BuySellComponent = () => {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [activeLimitTab, setActiveLimitTab] = useState<"limit" | "stop-limit">(
    "limit"
  );

  // Button styles based on active state
  const buttonStyle = (isActive: boolean, isSell: boolean) =>
    `flex-1 py-2 px-4 text-white transition-all relative ${
      isActive
        ? isSell
          ? "bg-red-500 z-20"
          : "bg-green-500 z-20"
        : "bg-gray-300 z-10"
    }`;

  // Clip path styles based on active tab
  const getClipPath = (isActive: boolean, isBuy: boolean) => {
    if (isActive) {
      return isBuy
        ? "polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)"
        : "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)";
    } else {
      return isBuy
        ? "polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)"
        : "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)";
    }
  };

  // Rendering the limit buttons
  const renderLimitButtons = () => {
    const limitTabs: Array<"limit" | "stop-limit"> = ["stop-limit", "limit"]; // Explicitly define the array type
    return (
      <div className="flex items-center justify-between -mt-5 space-x-0">
        {limitTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveLimitTab(tab)}
            className={`py-2 px-4 w-full border border-gray-300 ${
              activeLimitTab === tab ? "bg-white" : "bg-gray-400"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    );
  };

  // Rendering the content based on the selected tabs
  const renderContent = () => {
    const isBuy = activeTab === "buy";
    const OrderComponent =
      activeLimitTab === "stop-limit" ? OrderStopLimit : OrderFormLimit;

    return <OrderComponent isBuy={isBuy} isSell={!isBuy} />;
  };

  return (
    <div className="p-4 shadow rounded-lg w-full bg-white">
      {renderLimitButtons()}

      <div className="relative flex items-center justify-between mt-4">
        <button
          onClick={() => setActiveTab("sell")}
          className={buttonStyle(activeTab === "sell", true)}
          style={{
            clipPath: getClipPath(activeTab === "sell", false),
            marginRight: activeTab === "buy" ? "-42px" : "0",
          }}
        >
          فروش
        </button>

        <button
          onClick={() => setActiveTab("buy")}
          className={buttonStyle(activeTab === "buy", false)}
          style={{
            clipPath: getClipPath(activeTab === "buy", true),
            marginLeft: activeTab === "sell" ? "-42px" : "0",
          }}
        >
          خرید
        </button>
      </div>

      {/* نمایش محتوای مربوط به هر بخش */}
      {renderContent()}
    </div>
  );
};

export default BuySellComponent;
