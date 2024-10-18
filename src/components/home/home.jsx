import React from "react";
import ChartComponent from "../chart/ChartComponent"
import OrderBookComponent from "../pricelists/PriceListsTable";
import BuySellComponent from "../order/OrderForm";
import PriceComponent from "../header/PriceChanges";
import Navbar from "../header/MainMenu";
import TableOrder from "../order/OrderTables";
import LatestTrades from "../order/LatestTrades";
import TestSocket from "../TestSocket/testsocket";

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

      {/* TableOrder و LatestTrades در کنار هم */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100">
        {/* TableOrder */}
        <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
          <TableOrder />
        </div>

        {/* LatestTrades */}
        <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
          <LatestTrades />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
