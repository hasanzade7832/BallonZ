import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic for handling registration can be added here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const inputStyle = "border border-gray-300 rounded text-sm p-2 w-full text-right";

  return (
    <div className="p-4 h-screen flex items-center justify-center bg-gray-100 rtl">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-center mb-6 text-gray-700">ثبت نام</h2>

        <form onSubmit={handleRegister}>
          {/* Username Input */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium mb-2 text-gray-600 text-right">
              نام کاربری
            </label>
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputStyle}
              placeholder="نام کاربری"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-600 text-right">
              ایمیل
            </label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
              placeholder="ایمیل"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-600">رمز عبور</label>
            </div>
            <InputText
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              placeholder="رمز عبور"
              type={showPassword ? 'text' : 'password'}
            />
            {/* Icon for toggling password visibility */}
            <span
              className="absolute top-10 left-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6 relative">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-600">تایید رمز عبور</label>
            </div>
            <InputText
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={inputStyle}
              placeholder="تایید رمز عبور"
              type={showConfirmPassword ? 'text' : 'password'}
            />
            {/* Icon for toggling confirm password visibility */}
            <span
              className="absolute top-10 left-2 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>

          {/* Register Button */}
          <Button
            label="ثبت نام"
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded text-sm font-medium mb-4"
          />

          <div className="text-center mt-6 text-gray-600 text-sm">
            قبلا حساب کاربری ساخته‌اید؟{' '}
            <a href="#" className="text-orange-500" onClick={() => navigate('/login')}>ورود</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
