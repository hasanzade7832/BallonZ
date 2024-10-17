import React from "react";
import ChartComponent from "./components/chart/ChartComponent";
import OrderBookComponent from "./components/pricelists/PriceListsTable";
import BuySellComponent from "./components/order/OrderForm";
import PriceComponent from "./components/header/PriceChanges";
import Navbar from "./components/header/MainMenu";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <div className="fixed w-full z-10">
        <Navbar />
      </div>

      {/* PriceComponent - نمایش اطلاعات قیمت */}
      <div className="p-4 bg-gray-100">
        <PriceComponent />
      </div>

      {/* محتوای اصلی شامل چارت، دفتر سفارشات و خرید/فروش */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4 h-auto bg-white">
        {/* ChartComponent */}
        <div className="col-span-1 md:col-span-2 xl:col-span-2 bg-white p-4 rounded-md shadow-md">
          <ChartComponent />
        </div>

        {/* OrderBookComponent */}
        <div className="col-span-1 xl:col-span-1 bg-[#f3f4f6] p-4 rounded-md shadow-md">
          <OrderBookComponent />
        </div>

        {/* BuySellComponent */}
        <div className="col-span-1 xl:col-span-1 bg-white p-4 rounded-md shadow-md">
          <BuySellComponent />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
