import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";

const BuySellComponent = () => {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [sliderValue, setSliderValue] = useState(50);
  const [sellVolume, setSellVolume] = useState<number>(0); // حجم فروش
  const [buyVolume, setBuyVolume] = useState<number>(0); // حجم خرید
  const price = 4100698; // قیمت ثابت

  // تعیین رنگ بر اساس حالت فعال
  const inputStyle =
    activeTab === "buy"
      ? "bg-green-100 border-green-500"
      : "bg-red-100 border-red-500";

  // محاسبه جمع برای خرید و فروش
  const totalSellAmount = sellVolume * price;
  const totalBuyAmount = buyVolume * price;

  return (
    <div className="p-4 shadow rounded-lg w-full bg-white">
      {/* دکمه‌های خرید و فروش */}
      <div className="relative flex items-center justify-between mb-4">
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
      {activeTab === "buy" ? (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-semibold text-left text-green-500">
              بهترین پیشنهاد فروش
            </h4>
            <p className="text-xl font-bold text-right">TMN 4,100,698</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 mb-2">حجم خرید (GOLD18)</p>
            <InputText
              className={`w-full mb-4 p-3 ${inputStyle}`}
              placeholder="حجم خرید"
              value={buyVolume.toString()} // تبدیل به رشته برای نمایش در اینپوت
              onChange={(e) => setBuyVolume(Number(e.target.value))} // به روزرسانی حجم خرید
            />
            <p className="text-gray-700 mb-2">قیمت خرید (TMN)</p>
            <InputText
              value={price.toLocaleString()}
              readOnly
              className={`w-full mb-4 p-3 ${inputStyle}`}
            />
            {/* اسلایدر */}
            <Slider
              value={sliderValue}
              onChange={(e) => setSliderValue(e.value as number)}
              className="my-4"
            />
            <p className="text-gray-700 mb-2">جمع (TMN)</p>
            {/* نمایش جمع محاسبه شده برای خرید */}
            <InputText
              value={totalBuyAmount.toLocaleString()}
              readOnly
              className={`w-full p-3 ${inputStyle}`}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-semibold text-left text-red-500">
              بهترین پیشنهاد خرید
            </h4>
            <p className="text-xl font-bold text-right">TMN 4,100,698</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 mb-2">حجم فروش (GOLD18)</p>
            <InputText
              className={`w-full mb-4 p-3 ${inputStyle}`}
              placeholder="حجم فروش"
              value={sellVolume.toString()} // تبدیل به رشته برای نمایش در اینپوت
              onChange={(e) => setSellVolume(Number(e.target.value))} // به روزرسانی حجم فروش
            />
            <p className="text-gray-700 mb-2">قیمت فروش (TMN)</p>
            <InputText
              value={price.toLocaleString()}
              readOnly
              className={`w-full mb-4 p-3 ${inputStyle}`}
            />
            {/* اسلایدر */}
            <Slider
              value={sliderValue}
              onChange={(e) => setSliderValue(e.value as number)}
              className="my-4"
            />
            <p className="text-gray-700 mb-2">جمع (TMN)</p>
            {/* نمایش جمع محاسبه شده برای فروش */}
            <InputText
              value={totalSellAmount.toLocaleString()}
              readOnly
              className={`w-full p-3 ${inputStyle}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BuySellComponent;
