import React from 'react';
import { Menubar } from 'primereact/menubar'; // استفاده از Menubar از PrimeReact
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  const items = [
    { label: 'دیده بان' },
    { label: 'معامله آسان' },
    { label: 'معامله پیشرفته' },
    { label: 'مرحم' },
    { label: 'کد هدیه' },
    { label: 'اپلیکیشن' },
    { label: 'بلاگ' },
    { label: 'راهنمای استفاده' },
  ];

  const start = (
    <div className="flex space-x-4">
      {/* Use Link instead of <a> for routing */}
      <Link to="/login" className="text-gray-500 hover:text-blue-600 transition">ورود</Link>
      <Link to="/register" className="text-gray-500 hover:text-blue-600 transition">ثبت نام</Link>
    </div>
  );

  return (
    <Menubar
      model={items}
      className="bg-white shadow-md py-2 justify-between"
      start={start}
    />
  );
};

export default Navbar;
