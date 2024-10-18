import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; // اضافه کردن useNavigate

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // وضعیت نمایش رمز
  const navigate = useNavigate(); // استفاده از useNavigate برای هدایت به صفحات مختلف

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // تغییر وضعیت نمایش رمز
  };

  const goToRegister = () => {
    navigate('/register'); // هدایت به مسیر /register
  };

  const inputStyle = "border border-gray-300 rounded text-sm p-2 w-full text-right"; // Input style with smaller font

  return (
    <div className="p-4 h-screen flex items-center justify-center bg-gray-100 rtl">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-center mb-6 text-gray-700">ایمیل یا شماره موبایل</h2>

        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="mb-6">
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputStyle}
              placeholder="ایمیل یا شماره موبایل"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-600">رمز عبور</label>
              <a href="#" className="text-sm text-orange-500">فراموشی رمز عبور</a>
            </div>
            <InputText
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              placeholder="رمز عبور"
              type={showPassword ? 'text' : 'password'} // تغییر نوع فیلد
            />
            {/* Icon for toggling password visibility */}
            <span
              className="absolute top-10 left-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>

          {/* Login Button */}
          <Button
            label="ورود"
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded text-sm font-medium mb-4"
          />

          <div className="text-center my-6 text-gray-500">یا</div>

          {/* Google Login Button */}
          <Button
            label="ورود با حساب گوگل"
            type="button"
            icon="pi pi-google"
            className="w-full border border-gray-300 text-gray-600 hover:bg-gray-100 p-3 rounded text-sm font-medium mb-6"
          />

          <div className="text-center mt-6 text-gray-600 text-sm">
            حساب کاربری ندارید؟{' '}
            <a href="#" className="text-orange-500" onClick={goToRegister}>ثبت نام</a> {/* کلیک به مسیر /register */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
