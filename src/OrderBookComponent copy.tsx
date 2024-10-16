import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles.css'; // فایل CSS

interface Order {
    price: string;
    weight: number;
    totalPrice: string;
    highlight?: boolean;
    isRed?: boolean;
}

const OrderBookComponent = () => {
    const orders: Order[] = [
        { price: '4,093,000', weight: 0, totalPrice: '4,000,000' },
        { price: '4,090,000', weight: 14, totalPrice: '270,197,671' },
        { price: '4,093,000', weight: 32, totalPrice: '19,898,294' },
        { price: '4,090,500', weight: 18, totalPrice: '23,891,855' },
        { price: '4,089,043', weight: 19, totalPrice: '1,050,000' },
        { price: '4,088,453', weight: 20, totalPrice: '3,996,710' },
    ];

    const maxWeight = Math.max(...orders.map(order => order.weight));

    // محاسبه درصد بر اساس وزن و افزودن کلاس مناسب برای هر ردیف
    const rowClassName = (rowData: Order) => {
        const widthPercentage = Math.floor((rowData.weight / maxWeight) * 100); // درصد وزنی برای استایل نوار
        return `row-with-bar-${widthPercentage}`; // تولید نام کلاس بر اساس درصد
    };

    return (
        <div className="p-4">
            <DataTable value={orders} scrollable rowClassName={rowClassName}>
                <Column field="totalPrice" header="قیمت کل (تومان)"></Column>
                <Column field="weight" header="مقدار (گرم)"></Column>
                <Column field="price" header="قیمت (تومان)"></Column>
            </DataTable>
        </div>
    );
}

export default OrderBookComponent;
