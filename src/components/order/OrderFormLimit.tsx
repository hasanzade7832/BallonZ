import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";

// Define the props interface
interface TransactionComponentProps {
  isBuy?: boolean; // Optional prop for buy
  isSell?: boolean; // Optional prop for sell
}

const TransactionComponent: React.FC<TransactionComponentProps> = ({
  isBuy,
  isSell,
}) => {
  const [buyVolume, setBuyVolume] = useState(0);
  const [sellVolume, setSellVolume] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const price = 4100698; // Fixed price value, can be changed as needed
  const totalBuyAmount = buyVolume * price; // Calculate total buy amount
  const totalSellAmount = sellVolume * price; // Calculate total sell amount
  const inputStyle = "border border-gray-300 rounded"; // Input style

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h4
          className={`text-lg font-semibold text-left ${
            isBuy ? "text-green-500" : isSell ? "text-red-500" : ""
          }`}
        >
          {isBuy ? "بهترین پیشنهاد خرید" : isSell ? "بهترین پیشنهاد فروش" : ""}
        </h4>
        <p className="text-xl font-bold text-right">
          TMN {price.toLocaleString()}
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <p className="text-gray-700 mb-2">
          {isBuy ? "حجم خرید (GOLD18)" : isSell ? "حجم فروش (GOLD18)" : ""}
        </p>
        <InputText
          className={`w-full mb-4 p-3 ${inputStyle}`}
          placeholder={isBuy ? "حجم خرید" : isSell ? "حجم فروش" : ""}
          value={
            isBuy ? buyVolume.toString() : isSell ? sellVolume.toString() : ""
          }
          onChange={(e) =>
            isBuy
              ? setBuyVolume(Number(e.target.value))
              : isSell
              ? setSellVolume(Number(e.target.value))
              : null
          }
        />
        <p className="text-gray-700 mb-2">
          قیمت {isBuy ? "خرید" : isSell ? "فروش" : ""} (TMN)
        </p>
        <InputText
          value={price.toLocaleString()}
          readOnly
          className={`w-full mb-4 p-3 ${inputStyle}`}
        />
        {/* Slider */}
        <Slider
          value={sliderValue}
          onChange={(e) => setSliderValue(e.value as number)}
          className="my-4"
        />
        <p className="text-gray-700 mb-2">جمع (TMN)</p>
        {/* Display calculated total */}
        <InputText
          value={(isBuy
            ? totalBuyAmount
            : isSell
            ? totalSellAmount
            : 0
          ).toLocaleString()}
          readOnly
          className={`w-full p-3 ${inputStyle}`}
        />
      </div>
    </div>
  );
};

export default TransactionComponent;
