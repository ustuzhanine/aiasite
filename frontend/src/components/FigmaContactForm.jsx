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
      alert('Пожалуйста, подтвердите согласие');
    }
  };

  // Позиционирование выполняется в родительском компоненте
  const containerClass = isMobile 
    ? "absolute bg-[#071a31] h-[1260px] left-[27px] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] top-0 w-[727px] z-50"
    : "absolute bg-[#071a31] h-[860px] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] top-0 w-[916px] z-50";
  
  const containerStyle = isMobile ? {} : { left: "calc(50% - 542px)" };

  return (
    <div className={containerClass} style={containerStyle} data-node-id="21:100">
      <form onSubmit={handleSubmit} className="relative h-full w-full">
        {/* Лейбл для имени */}
        <div className={isMobile ? "absolute left-[54px] top-[70px] w-[163px] h-[50px] font-['Montserrat',sans-serif] font-medium text-[#ffffff] text-[40px] leading-[normal] flex flex-col justify-center z-10" : "absolute left-[63px] top-[65px] w-[163px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#ffffff] text-[20px] leading-[normal] flex flex-col justify-center z-10"} data-node-id="21:105" style={{ color: '#ffffff' }}>
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
          className={isMobile ? "absolute left-[50%] translate-x-[-50%] top-[135px] w-[619px] h-[82px] rounded-[14px] bg-white p-[15px] text-[#071a31] text-[30px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white z-10" : "absolute left-[50%] translate-x-[-50%] top-[111px] w-[790px] h-[59px] rounded-[14px] bg-white p-[15px] text-[#071a31] text-[18px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white z-10"}
          data-node-id="21:101"
        />

        {/* Лейбл для почты */}
        <div className={isMobile ? "absolute left-[54px] top-[275px] w-[163px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#ffffff] text-[40px] leading-[normal] flex flex-col justify-center z-10" : "absolute left-[63px] top-[205px] w-[163px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#ffffff] text-[20px] leading-[normal] flex flex-col justify-center z-10"} data-node-id="21:106" style={{ color: '#ffffff' }}>
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
          className={isMobile ? "absolute left-[50%] translate-x-[-50%] top-[340px] w-[619px] h-[82px] rounded-[14px] bg-white p-[15px] text-[#071a31] text-[30px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white z-10" : "absolute left-[50%] translate-x-[-50%] top-[249px] w-[790px] h-[59px] rounded-[14px] bg-white p-[15px] text-[#071a31] text-[18px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white z-10"}
          data-node-id="21:103"
        />

        {/* Лейбл для сообщения */}
        <div className={isMobile ? "absolute left-[54px] top-[480px] w-[284px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#ffffff] text-[40px] leading-[normal] flex flex-col justify-center z-10" : "absolute left-[63px] top-[349px] w-[163px] h-[31px] font-['Montserrat',sans-serif] font-medium text-[#ffffff] text-[20px] leading-[normal] flex flex-col justify-center z-10"} data-node-id="21:107" style={{ color: '#ffffff' }}>
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
          className={isMobile ? "absolute left-[50%] translate-x-[-50%] top-[545px] w-[619px] h-[380px] rounded-[22px] bg-white p-[15px] text-[#071a31] text-[30px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white resize-none z-10" : "absolute left-[50%] translate-x-[-50%] top-[393px] w-[790px] h-[251px] rounded-[22px] bg-white p-[15px] text-[#071a31] text-[18px] font-['Montserrat',sans-serif] font-thin focus:outline-none focus:ring-2 focus:ring-white resize-none z-10"}
          data-node-id="21:104"
        ></textarea>

        {/* Чекбокс согласия */}
        <div 
          className={isMobile ? "absolute left-[54px] top-[1000px] w-[35px] h-[35px] rounded-[8px] z-50 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "absolute left-[63px] top-[690px] w-[22px] h-[22px] rounded-[6px] z-50 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"} 
          data-node-id="56:132"
          style={{ 
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        >
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
            className="absolute inset-0 size-full opacity-0 cursor-pointer"
            style={{ cursor: 'pointer' }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-white rounded-[6px]">
            {formData.agree && <span className={isMobile ? "text-[#071a31] text-[32px] font-bold leading-none" : "text-[#071a31] text-[20px] font-bold leading-none"}>✔</span>}
          </div>
        </div>
        <p className={isMobile ? "absolute left-[117px] top-[970px] w-[550px] h-[79px] font-['Montserrat',sans-serif] font-thin text-[#ffffff] text-[24px] leading-[normal] z-50" : "absolute left-[105px] top-[665px] w-[727px] h-[79px] font-['Montserrat',sans-serif] font-thin text-[#ffffff] text-[16px] leading-[normal] z-50"} data-node-id="56:133" style={{ color: '#ffffff' }}>
          Я согласен с{' '}
          <Link 
            to="/privacy-policy" 
            className="underline hover:text-white transition-colors z-50"
            style={{ color: '#ffffff' }}
          >
            политикой конфиденциальности
          </Link>
          {' '}и даю согласие на обработку персональных данных
        </p>

        {/* Кнопка отправки */}
        <button 
          type="submit" 
          className={isMobile ? "absolute left-[50%] top-[1130px] translate-x-[-50%] w-[620px] h-[80px] rounded-[34px] bg-white font-['Montserrat',sans-serif] font-medium text-[#071a31] text-[40px] leading-[normal] text-center hover:bg-[#ffffff] hover:scale-105 transition-all duration-300 cursor-pointer z-10 flex items-center justify-center" : "absolute left-[50%] top-[760px] translate-x-[-50%] w-[424px] h-[56px] rounded-[34px] bg-white font-['Montserrat',sans-serif] font-medium text-[#071a31] text-[30px] leading-[normal] text-center hover:bg-[#ffffff] hover:scale-105 transition-all duration-300 cursor-pointer z-10 flex items-center justify-center"}
          data-node-id="56:131"
          style={{ backgroundColor: 'white', color: '#071a31' }}
        >
          отправить
        </button>
      </form>
    </div>
  );
}
