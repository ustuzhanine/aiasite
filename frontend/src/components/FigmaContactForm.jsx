import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FigmaContactForm({ isMobile = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message && formData.agree) {
      console.log('Form Submitted:', formData);
      alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
      setFormData({
        name: '',
        email: '',
        message: '',
        agree: false,
      });
    } else {
      alert('Пожалуйста, заполните все обязательные поля и согласитесь с политикой конфиденциальности.');
    }
  };

  // Позиционирование выполняется в родительском компоненте
  const containerClass = isMobile 
    ? "absolute bg-[#071a31] h-[1343px] left-[27px] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] top-0 w-[727px] z-50"
    : "absolute bg-[#071a31] h-[745px] left-[418px] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] top-0 w-[916px] z-50";

  return (
    <div className={containerClass} data-node-id="21:100">
      <form onSubmit={handleSubmit} className="relative h-full w-full">
        {/* Лейбл для имени */}
        <div className={isMobile ? "absolute left-[54px] top-[141px] w-[163px] h-[50px] font-['Montserrat',sans-serif] font-medium text-[#e4eef9] text-[40px] leading-[normal] flex flex-col justify-center z-50" : "absolute left-[73px] top-[65px] w-[163px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#e4eef9] text-[20px] leading-[normal] flex flex-col justify-center z-50"} data-node-id="21:105" style={{ color: '#e4eef9' }}>
          <p className="leading-[normal]">имя</p>
        </div>
        {/* Поле для имени */}
        <input
          type="text"
          placeholder=""
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={isMobile ? "absolute left-[54px] top-[208px] w-[620px] h-[82px] rounded-[14px] bg-white p-[15px] text-[#071a31] text-[30px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white z-50" : "absolute left-[63px] top-[111px] w-[362px] h-[59px] rounded-[14px] bg-white p-[15px] text-[#071a31] text-[18px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white z-50"}
          data-node-id="21:101"
        />

        {/* Лейбл для почты */}
        <div className={isMobile ? "absolute left-[54px] top-[349px] w-[163px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#e4eef9] text-[40px] leading-[normal] flex flex-col justify-center z-50" : "absolute left-[481px] top-[65px] w-[163px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#e4eef9] text-[20px] leading-[normal] flex flex-col justify-center z-50"} data-node-id="21:106" style={{ color: '#e4eef9' }}>
          <p className="leading-[normal]">почта</p>
        </div>
        {/* Поле для почты */}
        <input
          type="email"
          placeholder=""
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={isMobile ? "absolute left-[54px] top-[416px] w-[620px] h-[82px] rounded-[14px] bg-white p-[15px] text-[#071a31] text-[30px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white z-50" : "absolute left-[460px] top-[111px] w-[393px] h-[59px] rounded-[14px] bg-white p-[15px] text-[#071a31] text-[18px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white z-50"}
          data-node-id="21:103"
        />

        {/* Лейбл для сообщения */}
        <div className={isMobile ? "absolute left-[54px] top-[557px] w-[284px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#e4eef9] text-[40px] leading-[normal] flex flex-col justify-center z-50" : "absolute left-[73px] top-[205px] w-[163px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#e4eef9] text-[20px] leading-[normal] flex flex-col justify-center z-50"} data-node-id="21:107" style={{ color: '#e4eef9' }}>
          <p className="leading-[normal]">сообщение</p>
        </div>
        {/* Поле для сообщения */}
        <textarea
          placeholder=""
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={isMobile ? "absolute left-[54px] top-[624px] w-[620px] h-[495px] rounded-[22px] bg-white p-[15px] text-[#071a31] text-[30px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white resize-none z-50" : "absolute left-[63px] top-[249px] w-[790px] h-[251px] rounded-[22px] bg-white p-[15px] text-[#071a31] text-[18px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white resize-none z-50"}
          data-node-id="21:104"
        ></textarea>

        {/* Чекбокс согласия */}
        <div className={isMobile ? "absolute left-[54px] top-[1155px] w-[37px] h-[37px] rounded-[13px] bg-white z-50" : "absolute left-[63px] top-[540px] w-[37px] h-[37px] rounded-[13px] bg-white z-50"} data-node-id="56:132">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
            className="absolute inset-0 size-full opacity-0 cursor-pointer z-50"
          />
          <div className="absolute inset-0 border-2 border-[#071a31] rounded-[13px] flex items-center justify-center pointer-events-none">
            {formData.agree && <span className="text-[#071a31] text-2xl font-bold">✔</span>}
          </div>
        </div>
        <p className={isMobile ? "absolute left-[117px] top-[1150px] w-[500px] h-[79px] font-['Montserrat',sans-serif] font-thin text-[#e4eef9] text-[28px] leading-[normal] z-50" : "absolute left-[126px] top-[535px] w-[727px] h-[79px] font-['Montserrat',sans-serif] font-thin text-[#e4eef9] text-[20px] leading-[normal] z-50"} data-node-id="56:133" style={{ color: '#e4eef9' }}>
          Я согласен с{' '}
          <Link 
            to="/privacy-policy" 
            className="underline hover:text-white transition-colors"
            style={{ color: '#e4eef9' }}
          >
            политикой конфиденциальности
          </Link>
          {' '}и даю согласие на обработку персональных данных
        </p>

        {/* Кнопка отправки */}
        <button 
          type="submit" 
          className={isMobile ? "absolute left-[50%] top-[1265px] translate-x-[-50%] w-[284px] h-[57px] rounded-[34px] bg-white font-['Montserrat',sans-serif] font-medium text-[#071a31] text-[40px] leading-[normal] text-center hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer z-50" : "absolute left-[50%] top-[648px] translate-x-[-50%] w-[424px] h-[56px] rounded-[34px] bg-white font-['Montserrat',sans-serif] font-thin text-[#071a31] text-[30px] leading-[normal] text-center hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer z-50"}
          data-node-id="56:131"
        >
          отправить
        </button>
      </form>
    </div>
  );
}
