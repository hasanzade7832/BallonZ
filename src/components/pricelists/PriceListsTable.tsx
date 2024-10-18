import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./priceListsTable.css";
import FilterIcon from "./filterIcon";

interface Order {
  price: string;
  weight: number;
  totalPrice: string;
  highlight?: boolean;
}

const OrderBookComponent = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<number>(0); // 0: Default, 1: Ascending, -1: Descending
  const [activeTab, setActiveTab] = useState<string>("both"); // To track which table to display

  const buyOrders: Order[] = [
    { price: "4,093,000", weight: 12, totalPrice: "4,000,000" },
    { price: "4,090,000", weight: 14, totalPrice: "270,197,671" },
    { price: "4,093,000", weight: 6, totalPrice: "19,898,294" },
    { price: "4,090,500", weight: 18, totalPrice: "23,891,855" },
    { price: "4,089,043", weight: 12, totalPrice: "1,050,000" },
    { price: "4,088,453", weight: 14, totalPrice: "3,996,710" },
  ];

  const sellOrders: Order[] = [
    { price: "4,093,000", weight: 12, totalPrice: "4,000,000" },
    { price: "4,090,000", weight: 14, totalPrice: "270,197,671" },
    { price: "4,093,000", weight: 6, totalPrice: "19,898,294" },
    { price: "4,090,500", weight: 18, totalPrice: "23,891,855" },
    { price: "4,089,043", weight: 12, totalPrice: "1,050,000" },
    { price: "4,088,453", weight: 34, totalPrice: "3,996,710" },
  ];

  const isValidWeight = (weight: number) => !isNaN(weight) && weight >= 0;

  const allBuyWeightsValid = buyOrders.every((order) =>
    isValidWeight(order.weight)
  );
  const allSellWeightsValid = sellOrders.every((order) =>
    isValidWeight(order.weight)
  );

  if (!allBuyWeightsValid || !allSellWeightsValid) {
    setErrorMessage("یک یا چند مقدار وزن نامعتبر است.");
    return (
      <div>
        <h4>{errorMessage}</h4>
      </div>
    );
  }

  const maxBuyWeight = Math.max(...buyOrders.map((order) => order.weight));
  const maxSellWeight = Math.max(...sellOrders.map((order) => order.weight));

  const rowClassNameBuy = (rowData: Order) => {
    const widthPercentage = Math.floor((rowData.weight / maxBuyWeight) * 100);
    return `row-with-bar-${Math.floor(widthPercentage / 10) * 10}`;
  };

  const rowClassNameSell = (rowData: Order) => {
    const widthPercentage = Math.floor((rowData.weight / maxSellWeight) * 100);
    return `row-with-bar-sell-${Math.floor(widthPercentage / 10) * 10}`;
  };

  const PriceWithArrow = () => {
    return (
      <div className="text-red-500 flex items-center text-xl direction-ltr">
        <span className="mr-2">4,091,043</span>
        <i className="pi pi-arrow-down"></i>
      </div>
    );
  };

  const sortPrice = (a: Order, b: Order) => {
    const priceA = parseInt(a.price.replace(/,/g, ""));
    const priceB = parseInt(b.price.replace(/,/g, ""));
    if (sortOrder === 1) {
      return priceA - priceB;
    } else if (sortOrder === -1) {
      return priceB - priceA;
    }
    return 0; // Default no sorting
  };

  return (
    <div className="p-4" dir="rtl">
      {/* Icons for switching between buy/sell/both */}
      <div className="flex justify-between mb-4">
        <h4>سفارشات باز</h4>
        <div className="flex space-x-2">
          <div
            onClick={() => setActiveTab("buy")}
            title="نمایش خرید"
            className="icon ml-2"
          >
            <FilterIcon buy />
          </div>
          <div
            onClick={() => setActiveTab("sell")}
            title="نمایش فروش"
            className="icon"
          >
            <FilterIcon cell />
          </div>

          <div
            onClick={() => setActiveTab("both")}
            title="نمایش هر دو"
            className="icon"
          >
            <FilterIcon default />
          </div>
        </div>
      </div>

      {/* Show buy table if activeTab is 'buy' or 'both' */}
      {(activeTab === "buy" || activeTab === "both") && (
        <>
          {activeTab === "buy" && (
            <div className="my-4">
              <PriceWithArrow />
            </div>
          )}
          <div className="w-full overflow-x-auto">
            <DataTable
              value={buyOrders.sort(sortPrice)}
              scrollable
              scrollHeight="200px"
              rowClassName={rowClassNameBuy}
              className="text-sm max-h-60"
              removableSort
            >
              <Column
                field="totalPrice"
                header="قیمت کل (تومان)"
                className="p-2"
                sortable
              ></Column>
              <Column
                field="weight"
                header="مقدار (گرم)"
                className="p-2"
              ></Column>
              <Column
                field="price"
                header="قیمت (تومان)"
                className="p-2"
              ></Column>
            </DataTable>
          </div>
        </>
      )}

      {/* Show sell table if activeTab is 'sell' or 'both' */}
      {(activeTab === "sell" || activeTab === "both") && (
        <>
          <div className="my-4">
            <PriceWithArrow />
          </div>
          <div className="w-full overflow-x-auto">
            <DataTable
              value={sellOrders.sort(sortPrice)}
              scrollable
              scrollHeight="200px"
              rowClassName={rowClassNameSell}
              className="text-sm max-h-60"
              removableSort
            >
              <Column
                field="totalPrice"
                header="قیمت کل (تومان)"
                className="p-2"
                sortable
              ></Column>
              <Column
                field="weight"
                header="مقدار (گرم)"
                className="p-2"
              ></Column>
              <Column
                field="price"
                header="قیمت (تومان)"
                className="p-2"
              ></Column>
            </DataTable>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderBookComponent;
