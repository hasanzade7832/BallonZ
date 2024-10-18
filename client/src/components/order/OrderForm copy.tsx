import { useState } from "react";
import OrderFormLimit from "./OrderFormLimit";
import OrderStopLimit from "./OrderStopLimit";

const BuySellComponent = () => {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [sellVolume, setSellVolume] = useState<number>(0); // حجم فروش
  const [buyVolume, setBuyVolume] = useState<number>(0); // حجم خرید
  const [activeLimitTab, setActiveLimitTab] = useState<"limit" | "stop-limit">(
    "limit"
  ); // تعیین تب فعال Limit یا Stop-Limit
  const price = 4100698; // قیمت ثابت

  // تعیین رنگ بر اساس حالت فعال
  const inputStyle =
    activeTab === "buy"
      ? "bg-green-100 border-green-500"
      : "bg-red-100 border-red-500";

  return (
    <div className="p-4 shadow rounded-lg w-full bg-white">
      {/* دکمه‌های Limit و Stop-Limit */}
      <div className="flex items-center justify-between -mt-5 space-x-0">
        <button
          onClick={() => setActiveLimitTab("stop-limit")}
          className={`py-2 px-4 w-full border border-gray-300 ${
            activeLimitTab === "stop-limit" ? "bg-white" : "bg-gray-400"
          }`}
        >
          Stop-Limit
        </button>
        <button
          onClick={() => setActiveLimitTab("limit")}
          className={`py-2 px-4 w-full border border-gray-300 ${
            activeLimitTab === "limit" ? "bg-white" : "bg-gray-400"
          }`}
        >
          Limit
        </button>
      </div>

      {/* دکمه‌های خرید و فروش در هر حالت */}
      <div className="relative flex items-center justify-between mt-4">
        <button
          onClick={() => setActiveTab("sell")}
          className={`flex-1 py-2 px-4 text-white transition-all relative ${
            activeTab === "sell" ? "bg-red-500 z-20" : "bg-gray-300 z-10"
          }`}
          style={{
            clipPath:
              activeTab === "sell"
                ? "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)"
                : "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
            marginRight: activeTab === "buy" ? "-42px" : "0",
          }}
        >
          فروش
        </button>

        <button
          onClick={() => setActiveTab("buy")}
          className={`flex-1 py-2 px-4 text-white transition-all relative ${
            activeTab === "buy" ? "bg-green-500 z-20" : "bg-gray-300 z-10"
          }`}
          style={{
            clipPath:
              activeTab === "buy"
                ? "polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)"
                : "polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)",
            marginLeft: activeTab === "sell" ? "-42px" : "0",
          }}
        >
          خرید
        </button>
      </div>

      {/* نمایش محتوای مربوط به هر بخش */}
      {activeLimitTab === "stop-limit" ? (
        activeTab === "buy" ? (
          <OrderStopLimit isBuy={true} />
        ) : (
          <OrderStopLimit isSell={true} />
        )
      ) : (
        <>
          {/* محتوای مربوط به Limit */}
          {activeTab === "buy" ? (
            <OrderFormLimit isBuy={true} />
          ) : (
            <OrderFormLimit isSell={true} />
          )}
        </>
      )}
    </div>
  );
};

export default BuySellComponent;
