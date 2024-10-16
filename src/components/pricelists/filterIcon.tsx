import React from "react";
import "./priceListsTable.css";

// تعریف نوع props
interface FilterIconProps {
  buy?: boolean; // پروپ buy به صورت اختیاری
  cell?: boolean; // پروپ cell به صورت اختیاری
  default?: boolean; // پروپ default به صورت اختیاری
}

const FilterIcon: React.FC<FilterIconProps> = ({
  buy,
  cell,
  default: defaultColor,
}) => {
  const squares = []; // آرایه‌ای برای دیوها

  // اگر defaultColor فعال باشد، دیوها به صورت متناوب ایجاد می‌شوند
  if (defaultColor) {
    for (let i = 0; i < 4; i++) {
      squares.push(
        <div
          key={i}
          className={`square ${i % 2 === 0 ? "green" : "red"}`}
        ></div>
      );
    }
  } else {
    // اگر buy یا cell مشخص شده باشد، رنگ‌ها بر اساس آن تعیین می‌شوند
    const colorClass = buy ? "green" : cell ? "red" : "default-color";
    for (let i = 0; i < 4; i++) {
      squares.push(<div key={i} className={`square ${colorClass}`}></div>);
    }
  }

  return <div className="icon">{squares}</div>;
};

export default FilterIcon;
