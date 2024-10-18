import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../src/components/home/home';
import Login from '../src/components/authentications/Login';
import Register from '../src/components/authentications/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* مسیر صفحه اصلی */}
        <Route path="/" element={<MainLayout />} />

        {/* مسیرهای ورود و ثبت‌نام */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
