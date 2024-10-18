import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const LatestTrades = () => {
  // داده‌های نمونه برای نمایش
  const trades = [
    { time: '23:12', amount: '0.0714376', price: '4,199,468', increase: true },
    { time: '23:11', amount: '0.24', price: '4,164,626', increase: false },
    { time: '23:11', amount: '0.3333579', price: '4,199,468', increase: true },
    { time: '23:11', amount: '0.1062027', price: '4,199,468', increase: true },
    { time: '23:10', amount: '0.1164618', price: '4,197,000', increase: false },
    { time: '23:04', amount: '0.1218036', price: '4,197,000', increase: false },
    { time: '23:01', amount: '0.07363', price: '4,197,000', increase: false },
    { time: '23:01', amount: '0.219415', price: '4,193,000', increase: false },
    { time: '23:01', amount: '0.5739557', price: '4,185,869', increase: false },
  ];

  // تعیین رنگ براساس افزایش یا کاهش قیمت
  const priceTemplate = (rowData) => {
    return (
      <span className={rowData.increase ? "text-green-500" : "text-red-500"}>
        {rowData.price}
      </span>
    );
  };

  return (
    <div className="w-full bg-gray-50 shadow-sm rounded-lg p-4 overflow-x-auto">
      {/* عنوان جدول */}
      <h4 className="text-lg font-semibold mb-4 text-gray-600 text-right">آخرین معاملات</h4>
      
      {/* جدول ریسپانسیو */}
      <DataTable value={trades} rows={10} responsiveLayout="scroll" className="rtl w-full">
        <Column
          field="time"
          header="زمان"
          headerClassName="text-right px-2"  // فاصله داخلی برای هدر ستون
          bodyClassName="text-right px-2"    // فاصله داخلی برای سلول‌های بدنه
        />
        <Column
          field="amount"
          header="مقدار (گرم)"
          headerClassName="text-right px-2"  // فاصله داخلی برای هدر ستون
          bodyClassName="text-right px-2"    // فاصله داخلی برای سلول‌های بدنه
        />
        <Column
          field="price"
          header="قیمت (تومان)"
          body={priceTemplate}
          headerClassName="text-right px-2"  // فاصله داخلی برای هدر ستون
          bodyClassName="text-right px-2"    // فاصله داخلی برای سلول‌های بدنه
        />
      </DataTable>
    </div>
  );
};

export default LatestTrades;
