import React from 'react';
import { Card } from 'primereact/card'; // کامپوننت Card از PrimeReact

const PriceComponent = () => {
  return (
    <div className="mt-5 p-4 overflow-x-auto">
      <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-center">
        <Card className="text-center bg-gray-50 shadow-sm hover:bg-gray-100 hover:shadow-lg transition duration-300 w-full md:min-w-[200px] p-4 rounded">
          <p className="text-gray-600 text-sm">قیمت اتحاد</p>
          <p className="font-bold text-md">4,104,300 TMN</p>
        </Card>

        <Card className="text-center bg-gray-50 shadow-sm hover:bg-gray-100 hover:shadow-lg transition duration-300 w-full md:min-w-[200px] p-4 rounded">
          <p className="text-gray-600 text-sm">حجم معاملات 24 ساعت گذشته</p>
          <p className="font-bold text-md">27,180,948 TMN (7 GOLD18)</p>
        </Card>

        <Card className="text-center bg-gray-50 shadow-sm hover:bg-gray-100 hover:shadow-lg transition duration-300 w-full md:min-w-[200px] p-4 rounded">
          <p className="text-gray-600 text-sm">بیشترین قیمت 24 ساعت گذشته</p>
          <p className="font-bold text-md">4,110,002</p>
        </Card>

        <Card className="text-center bg-gray-50 shadow-sm hover:bg-gray-100 hover:shadow-lg transition duration-300 w-full md:min-w-[200px] p-4 rounded">
          <p className="text-gray-600 text-sm">کمترین قیمت 24 ساعت گذشته</p>
          <p className="font-bold text-md">4,105,000</p>
        </Card>

        <Card className="text-center bg-gray-50 shadow-sm hover:bg-gray-100 hover:shadow-lg transition duration-300 w-full md:min-w-[200px] p-4 rounded">
          <p className="text-gray-600 text-sm">درصد تغییرات 24 ساعته</p>
          <p className="font-bold text-md text-green-500">0.27%</p>
        </Card>

        <Card className="text-center bg-gray-50 shadow-sm hover:bg-gray-100 hover:shadow-lg transition duration-300 w-full md:min-w-[200px] p-4 rounded">
          <p className="text-gray-600 text-sm">آخرین قیمت</p>
          <p className="font-bold text-md text-red-500">4,105,695</p>
        </Card>
      </div>
    </div>
  );
};

export default PriceComponent;
