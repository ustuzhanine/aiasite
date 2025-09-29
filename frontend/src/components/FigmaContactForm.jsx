import React, { useState } from 'react';

export default function FigmaContactForm() {
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

  return (
    <div className="absolute bg-[#071a31] h-[745px] left-[418px] rounded-[22px] shadow-[9px_9px_16px_-1px_#1e1e1e] top-[8546px] w-[916px]" data-node-id="21:100">
      <form onSubmit={handleSubmit} className="relative h-full w-full">
        {/* Лейбл для имени */}
        <div className="absolute left-[491px] top-[8611px] w-[163px] h-[31px] font-['Montserrat:Medium',_sans-serif] font-medium text-white text-[20px] leading-[normal] flex flex-col justify-center" data-node-id="21:105">
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
          className="absolute left-[481px] top-[8657px] w-[362px] h-[59px] rounded-[14px] bg-white p-[15px] text-black text-[1em] focus:outline-none focus:ring-2 focus:ring-[#007bff]"
          data-node-id="21:101"
        />

        {/* Лейбл для почты */}
        <div className="absolute left-[899px] top-[8611px] w-[163px] h-[31px] font-['Montserrat:Medium',_sans-serif] font-medium text-white text-[20px] leading-[normal] flex flex-col justify-center" data-node-id="21:106">
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
          className="absolute left-[878px] top-[8657px] w-[393px] h-[59px] rounded-[14px] bg-white p-[15px] text-black text-[1em] focus:outline-none focus:ring-2 focus:ring-[#007bff]"
          data-node-id="21:103"
        />

        {/* Лейбл для сообщения */}
        <div className="absolute left-[491px] top-[8751px] w-[163px] h-[31px] font-['Montserrat:Medium',_sans-serif] font-medium text-white text-[20px] leading-[normal] flex flex-col justify-center" data-node-id="21:107">
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
          className="absolute left-[481px] top-[8795px] w-[790px] h-[251px] rounded-[22px] bg-white p-[15px] text-black text-[1em] focus:outline-none focus:ring-2 focus:ring-[#007bff] resize-none"
          data-node-id="21:104"
        ></textarea>

        {/* Чекбокс согласия */}
        <div className="absolute left-[481px] top-[9086px] w-[37px] h-[37px] rounded-[13px] bg-white" data-node-id="56:132">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
            className="absolute inset-0 size-full opacity-0 cursor-pointer"
          />
          <div className="absolute inset-0 border border-gray-400 rounded-[13px] flex items-center justify-center">
            {formData.agree && <span className="text-black text-xl">✔</span>} {/* Простая индикация выбора */}
          </div>
        </div>
        <p className="absolute left-[544px] top-[9081px] w-[727px] h-[79px] font-['Montserrat:Regular',_sans-serif] font-normal text-white text-[20px] leading-[normal]" data-node-id="56:133">
          Я согласен с политикой конфиденциальности и даю согласие на обработку персональных данных
        </p>

        {/* Кнопка отправки */}
        <button type="submit" className="absolute left-[673px] top-[9194px] translate-x-[-50%] w-[424px] h-[56px] rounded-[34px] bg-white font-['Montserrat:Regular',_sans-serif] font-normal text-[#071a31] text-[30px] leading-[normal] text-center hover:bg-gray-200 transition-colors duration-300" data-node-id="56:131">
          отправить
        </button>
      </form>
    </div>
  );
}
