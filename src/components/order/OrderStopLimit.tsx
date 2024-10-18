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
  const inputStyle = "border border-gray-300 rounded text-sm p-2"; // Input style with smaller font

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h4
          className={`text-md font-medium text-left ${
            isBuy ? "text-green-400" : isSell ? "text-red-400" : ""
          }`}
        >
          {isBuy ? "بهترین پیشنهاد خرید" : isSell ? "بهترین پیشنهاد فروش" : ""}
        </h4>
        <p className="text-md font-bold text-right">
          TMN {price.toLocaleString()}
        </p>
      </div>
      <div className="bg-gray-50 p-3 rounded shadow-sm">
        <p className="text-gray-600 mb-1 text-sm">
          {isBuy ? "STOP (TMN)" : isSell ? "STOP (TMN)" : ""}
        </p>
        <InputText
          className={`w-full mb-3 ${inputStyle}`}
          placeholder={isBuy ? " " : isSell ? " " : ""}
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
        <p className="text-gray-600 mb-1 text-sm">
          {isBuy ? "حجم (GOLD18)" : isSell ? "حجم (GOLD18)" : ""}
        </p>
        <InputText
          value={price.toLocaleString()}
          readOnly
          className={`w-full mb-3 ${inputStyle}`}
        />
        {/* Slider */}
        <Slider
          value={sliderValue}
          onChange={(e) => setSliderValue(e.value as number)}
          className="my-3"
        />
        <p className="text-gray-600 mb-1 text-sm">Limit (TMN)</p>
        {/* Display calculated total */}
        <InputText
          value={(isBuy
            ? totalBuyAmount
            : isSell
            ? totalSellAmount
            : 0
          ).toLocaleString()}
          readOnly
          className={`w-full ${inputStyle}`}
        />
        <p className="text-gray-600 mb-1 text-sm">Limit (TMN)</p>
        <InputText
          value={(isBuy
            ? totalBuyAmount
            : isSell
            ? totalSellAmount
            : 0
          ).toLocaleString()}
          readOnly
          className={`w-full ${inputStyle}`}
        />
      </div>
      {/* Buttons for Buy and Sell */}
      {isBuy && (
        <button className="bg-green-400 text-white w-full py-2 mt-3 rounded text-center font-medium text-sm">
          خرید
        </button>
      )}
      {isSell && (
        <button className="bg-red-400 text-white w-full py-2 mt-3 rounded text-center font-medium text-sm">
          فروش
        </button>
      )}
    </div>
  );
};

export default TransactionComponent;
