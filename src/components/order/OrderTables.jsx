import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const ExampleTableWithTabs = () => {
  const [activeTab, setActiveTab] = useState('openOrders');

  // داده‌های نمونه برای سفارشات باز
  const openOrders = [
    {
      symbol: 'BTCUSDT',
      time: '22:36',
      type: 'Limit',
      side: 'Buy',
      price: '4,198,000',
      stop: '4,100,000',
      completion: '100%',
      volume: '6.1950676',
      totalAmount: '25,982,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    }
  ];

  // داده‌های نمونه برای تاریخچه سفارشات
  const orderHistory = [
    {
      symbol: 'ADAUSDT',
      time: '21:15',
      type: 'Limit',
      side: 'Sell',
      price: '100,000',
      stop: '95,000',
      completion: '100%',
      volume: '2.3820867',
      totalAmount: '10,000,000',
      operation: 'Completed',
    },
    {
      symbol: 'SOLUSDT',
      time: '21:10',
      type: 'Market',
      side: 'Buy',
      price: '500,000',
      stop: '490,000',
      completion: '100%',
      volume: '0.1191043',
      totalAmount: '1,000,000',
      operation: 'Completed',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
    {
      symbol: 'ETHUSDT',
      time: '22:35',
      type: 'Market',
      side: 'Sell',
      price: '3,333,000',
      stop: '3,200,000',
      completion: '75%',
      volume: '3.3332792',
      totalAmount: '10,000,000',
      operation: 'Cancel',
    },
  ];

  // قالب برای نمایش دکمه عملیات
  const operationTemplate = (rowData) => {
    return (
      <button className="text-blue-500 hover:underline">{rowData.operation}</button>
    );
  };

  return (
    <div className="w-full bg-gray-50 shadow-sm rounded-lg p-4 overflow-x-auto">
      {/* تب‌های سفارشات */}
      <div className="flex flex-row-reverse mb-4 border-b-2 border-gray-200">
        <button
          className={`px-4 py-2 ${activeTab === 'openOrders' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('openOrders')}
        >
          سفارشات باز
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'orderHistory' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('orderHistory')}
        >
          تاریخچه سفارشات
        </button>
      </div>

      {/* محتوای تب‌ها */}
      {activeTab === 'openOrders' && (
        <DataTable value={openOrders} rows={5}  className="rtl w-full">
          <Column field="symbol" header="نماد" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="time" header="زمان" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="type" header="نوع" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="side" header="سمت" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="price" header="قیمت" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="stop" header="Stop" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="completion" header="درصد تکمیل" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="volume" header="حجم" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="totalAmount" header="مقدار کل" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="operation" header="عملیات" body={operationTemplate} headerClassName="text-right px-2" bodyClassName="text-right px-2" />
        </DataTable>
      )}

      {activeTab === 'orderHistory' && (
        <DataTable value={orderHistory} rows={5}  className="rtl w-full">
          <Column field="symbol" header="نماد" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="time" header="زمان" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="type" header="نوع" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="side" header="سمت" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="price" header="قیمت" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="stop" header="Stop" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="completion" header="درصد تکمیل" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="volume" header="حجم" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="totalAmount" header="مقدار کل" headerClassName="text-right px-2" bodyClassName="text-right px-2" />
          <Column field="operation" header="عملیات" body={operationTemplate} headerClassName="text-right px-2" bodyClassName="text-right px-2" />
        </DataTable>
      )}
    </div>
  );
};

export default ExampleTableWithTabs;
