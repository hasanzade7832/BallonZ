// فایل: Navbar.jsx
import React from 'react';
import { Menubar } from 'primereact/menubar'; // استفاده از Menubar از PrimeReact

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
      <a href="#" className="text-gray-500 hover:text-blue-600 transition">ورود</a>
      <a href="#" className="text-gray-500 hover:text-blue-600 transition">ثبت نام</a>
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
