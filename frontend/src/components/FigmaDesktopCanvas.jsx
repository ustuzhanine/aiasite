import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imgAvtovaz1 from '/assets/avtovaz.jpg';
import imgAiaLogo from '/assets/AIA logo.png';
import img202509262107411 from '/assets/160c49f1c00c7624603b63d4d0fcc48e05e658fa.png';
import imgGazprom011 from '/assets/Gazprom-01.png';
import imgKamaz011 from '/assets/Kamaz-01.png';
import imgRosstandartSeeklogo1 from '/assets/rosstandart-seeklogo.png';
import img2 from '/assets/Команда карусель.png';
import imgGroup from '/assets/1ebc5b838508a18566e427e580ee4292afefc6f7.svg';
import imgGroup1 from '/assets/cc2c17757a3f6bc8c3a501729b1a7711be8c131d.svg';
import imgVector from '/assets/cfa8a1f87fed6f20c8816f821e60e45b80e03158.svg';
import FigmaContactForm from './FigmaContactForm';

export default function FigmaDesktopCanvas() {
  const [scale, setScale] = useState(Math.min(window.innerWidth / 1920, 1));

  useEffect(() => {
    const handleResize = () => {
      const newScale = Math.min(window.innerWidth / 1920, 1);
      console.log(`Desktop scale: ${newScale.toFixed(3)} (window width: ${window.innerWidth}px)`);
      setScale(newScale);
    };

    // Логируем начальный scale
    console.log(`Initial desktop scale: ${scale.toFixed(3)} (window width: ${window.innerWidth}px)`);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, // Точное позиционирование из Figma
        behavior: 'smooth',
      });
    }
  };

  // Для карусели команды, дублируем изображение
  const teamCarouselImages = Array(2).fill(img2);

  return (
    <div className="w-full overflow-x-hidden bg-white flex justify-center">
      <div className="relative w-[1920px] h-[9783px]" data-name="pc" data-node-id="1:8" style={{ 
        zoom: scale
      }}>
      {/* Белый фон под всем сайтом */}
      <div className="absolute bg-white h-[9783px] left-0 top-0 w-full z-0" data-node-id="14:67" />
      
      {/* Hero видео с эффектом матового стекла */}
      <div className="absolute h-[995px] left-0 top-0 w-[1920px] overflow-hidden z-10" data-name="Hero Video Background" data-node-id="1:6">
        {/* Слой 1: Видео с размытием */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(8px)' }}
          onLoadedData={() => console.log('✅ Desktop video loaded successfully')}
          onError={(e) => console.error('❌ Desktop video error:', e)}
          onCanPlay={() => console.log('🎬 Desktop video can play')}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Слой 2: Матовое стекло (frosted glass effect) */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />
      </div>
      
      {/* Header (шапка сайта) - поверх видео */}
      <div className="absolute bg-[#071a31] h-[95px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-14px] w-[1920px] z-30" data-node-id="1:5" />
      <div className="absolute bg-[#071a31] h-[385px] left-0 shadow-[9px_9px_16px_-1px_rgba(0,0,0,0.25)] top-[9398px] w-[1920px] z-10" data-node-id="21:109" />
      <div className="absolute bg-[#071a31] h-[416px] left-0 rounded-[19px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6424px] w-[311px] z-10" data-node-id="40:135" />
      <div className="absolute h-[41px] left-[415px] top-[20px] w-[63px] z-50" data-name="HEAD_NEW_55-01_1x" data-node-id="1:4" style={{ aspectRatio: '63/41' }}>
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgAiaLogo} />
      </div>
      <div 
        className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] left-[1415.5px] text-[20px] text-center text-[#e4eef9] top-[39px] translate-x-[-50%] translate-y-[-50%] w-[123px] z-50 cursor-pointer hover:opacity-80 transition-opacity" 
        data-node-id="14:57" 
        style={{ color: '#e4eef9', fontWeight: 100 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="leading-[normal]">о нас</p>
      </div>
      <div id="about" className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] left-[411px] text-[#071a31] text-[50px] top-[1241px] translate-y-[-50%] w-[219px] z-10" style={{ fontWeight: 100 }} data-node-id="14:71">
        <p className="leading-[normal]">О нас</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] left-[411px] text-[#071a31] text-[50px] top-[2487px] translate-y-[-50%] w-[683px] z-10" style={{ fontWeight: 100 }} data-node-id="49:276">
        <p className="leading-[normal]">Наши партнёры</p>
      </div>
      <div id="services" className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[2972px] translate-y-[-50%] w-[468px] z-10" data-node-id="14:73" style={{ left: "calc(50% - 549px)", fontWeight: 100 }}>
        <p className="leading-[normal]">Наши услуги</p>
      </div>
      <div id="projects" className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[4536px] translate-y-[-50%] w-[468px] z-10" data-node-id="27:120" style={{ left: "calc(50% - 554px)", fontWeight: 100 }}>
        <p className="leading-[normal]">Наши проекты</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[6298px] translate-y-[-50%] w-[789px] z-10" data-node-id="40:132" style={{ left: "calc(50% - 542px)", fontWeight: 100 }}>
        <p className="leading-[normal]">Лицензии и Сертификаты</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[7105px] translate-y-[-50%] w-[789px] z-10" data-node-id="40:136" style={{ left: "calc(50% - 542px)", fontWeight: 100 }}>
        <p className="leading-[normal]">Наша команда</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] h-[184px] justify-center leading-[0] text-[#071a31] text-[40px] top-[8458px] translate-y-[-50%] w-[1026px] z-10" data-node-id="20:99" style={{ left: "calc(50% - 542px)", fontWeight: 100 }}>
        <p className="leading-[normal]">Напишите нам, и мы найдем оптимальное ИИ-решение для вашего бизнеса</p>
      </div>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[59px] text-[30px] text-[#e4eef9] top-[9448px] w-[815px] z-20" data-node-id="21:111" style={{ left: "calc(50% - 186px)", color: '#e4eef9', fontWeight: 100 }}>
        119049, РФ, г. Москва, ул. Дубнинская, д. 75Б, стр. 2
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[59px] text-[30px] text-[#e4eef9] top-[9504px] w-[815px] z-20" data-node-id="21:117" style={{ left: "calc(50% - 186px)", color: '#e4eef9', fontWeight: 100 }}>
        +7 (495) 123-47-05
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[59px] text-[30px] text-[#e4eef9] top-[9560px] w-[815px] z-20" data-node-id="21:118" style={{ left: "calc(50% - 186px)", color: '#e4eef9', fontWeight: 100 }}>
        in@aiagency.ru
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[59px] text-[30px] text-[#e4eef9] top-[9504px] w-[205px] z-20" data-node-id="21:114" style={{ left: "calc(50% - 544px)", color: '#e4eef9', fontWeight: 100 }}>
        телефон
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[59px] text-[30px] text-[#e4eef9] top-[9448px] w-[205px] z-20" data-node-id="21:116" style={{ left: "calc(50% - 544px)", color: '#e4eef9', fontWeight: 100 }}>
        адрес
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[59px] text-[30px] text-[#e4eef9] top-[9560px] w-[317px] z-20" data-node-id="21:115" style={{ left: "calc(50% - 544px)", color: '#e4eef9', fontWeight: 100 }}>
        электронная почта
      </p>
      <div className="absolute font-['Montserrat',sans-serif] h-[622px] leading-[normal] left-[411px] text-[#071a31] text-[35px] top-[1324px] w-[1283px] z-10" style={{ fontWeight: 100 }} data-node-id="14:72">
        <p className="mb-0">ведущая консалтинговая компания в области искусственного интеллекта, которая помогает крупному бизнесу извлекать реальную прибыль из ИИ-технологий.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Мы специализируемся на трех ключевых направлениях: корпоративном обучении искусственному интеллекту, разработке интеллектуальных решений под конкретные бизнес-задачи и стратегическом консалтинге по цифровой трансформации.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Наша команда объединяет кандидатов наук, выпускников Сколково и признанных экспертов отрасли с многолетним практическим опытом. Мы не только знаем теорию ИИ, но и понимаем, как применить эти знания для роста эффективности и прибыльности бизнеса.</p>
      </div>
      <div 
        className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] left-[1534.5px] text-[20px] text-center text-[#e4eef9] top-[39px] translate-x-[-50%] translate-y-[-50%] w-[123px] z-50 cursor-pointer hover:opacity-80 transition-opacity" 
        data-node-id="14:62" 
        style={{ color: '#e4eef9', fontWeight: 100 }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="leading-[normal]">услуги</p>
      </div>
      <div 
        className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] left-[1674.5px] text-[20px] text-center text-[#e4eef9] top-[39px] translate-x-[-50%] translate-y-[-50%] w-[123px] z-50 cursor-pointer hover:opacity-80 transition-opacity" 
        data-node-id="14:63" 
        style={{ color: '#e4eef9', fontWeight: 100 }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="leading-[normal]">проекты</p>
      </div>
      <div 
        className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] left-[1813.5px] text-[20px] text-center text-[#e4eef9] top-[39px] translate-x-[-50%] translate-y-[-50%] w-[123px] z-50 cursor-pointer hover:opacity-80 transition-opacity" 
        data-node-id="14:64" 
        style={{ color: '#e4eef9', fontWeight: 100 }}
        onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="leading-[normal]">контакты</p>
      </div>
      <div className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute flex flex-col font-['Montserrat',sans-serif] font-bold h-[343px] justify-center leading-[0] left-[415px] text-[100px] text-[#f0f4f7] top-[368.5px] translate-y-[-50%] w-[1048px] z-20" data-node-id="14:65" style={{ color: '#f0f4f7' }}>
        <p className="leading-[109px]">Агентство Искусственного Интеллекта</p>
      </div>
      <div className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute flex flex-col font-['Montserrat',sans-serif] font-thin h-[199px] justify-center leading-[0] left-[425px] text-[50px] text-[#f0f4f7] top-[594.5px] translate-y-[-50%] w-[1048px] z-20" data-node-id="14:66" style={{ color: '#f0f4f7' }}>
        <p className="leading-[55px]">эксперты по обучению и внедрению ИИ-технологий</p>
      </div>
      {/* Кнопка "связаться с нами" - поверх всех слоёв hero */}
      <div 
        className="absolute left-[425px] top-[706px] w-[337px] h-[70px] bg-[#071a31] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] z-50 cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center"
        data-node-id="14:70"
        onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="font-['Montserrat',sans-serif] font-medium text-[20px] text-[#e4eef9] leading-[normal]" data-node-id="14:69" style={{ color: '#e4eef9' }}>
          связаться с нами
        </p>
      </div>
      {/* Карточки услуг */}
      <div className="absolute bg-[#071a31] h-[369px] left-[332px] rounded-[22px] shadow-[9px_9px_20px_-4px_rgba(30,30,30,0.52)] top-[3090px] w-[1256px] z-20" data-node-id="20:89" />
      <div className="absolute bg-[#071a31] h-[369px] left-[332px] rounded-[22px] shadow-[9px_9px_20px_-4px_rgba(30,30,30,0.52)] top-[3497px] w-[1256px] z-20" data-node-id="20:92" />
      <div className="absolute bg-[#071a31] h-[369px] left-[332px] rounded-[22px] shadow-[9px_9px_20px_-4px_rgba(30,30,30,0.52)] top-[3904px] w-[1256px] z-20" data-node-id="20:95" />
      {/* Тексты на карточках услуг */}
      <p className="absolute font-['Montserrat',sans-serif] h-[141px] leading-[normal] left-[417px] text-[31px] text-[#e4eef9] top-[3274px] w-[1098px] z-30" style={{ color: '#e4eef9', fontWeight: 100 }} data-node-id="20:90">
        Обучаем топ-менеджеров и специалистов компаний практическому применению ИИ в их отраслях. От базовых принципов до конкретных инструментов для роста бизнеса.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[141px] leading-[normal] left-[417px] text-[31px] text-[#e4eef9] top-[3661px] w-[1098px] z-30" style={{ color: '#e4eef9', fontWeight: 100 }} data-node-id="20:93">
        Разрабатываем дорожную карту цифровой трансформации с конкретными KPI и сроками окупаемости. Помогаем выбрать приоритетные направления и избежать дорогостоящих ошибок.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[141px] leading-[normal] left-[417px] text-[31px] text-[#e4eef9] top-[4068px] w-[1098px] z-30" style={{ color: '#e4eef9', fontWeight: 100 }} data-node-id="20:96">
        Создаем интеллектуальных агентов и системы автоматизации под конкретные задачи вашего бизнеса. От ассистентов делопроизводства до уникальных инновационных разработок.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[95px] leading-[normal] left-[417px] text-[34px] text-[#e4eef9] top-[3141px] w-[735px] z-30" style={{ color: '#e4eef9', fontWeight: 100 }} data-node-id="20:91">
        Корпоративное обучение искусственному интеллекту
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[95px] leading-[normal] left-[417px] text-[34px] text-[#e4eef9] top-[3548px] w-[735px] z-30" style={{ color: '#e4eef9', fontWeight: 100 }} data-node-id="20:94">
        Стратегия внедрения ИИ
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[95px] leading-[normal] left-[417px] text-[34px] text-[#e4eef9] top-[3955px] w-[735px] z-30" style={{ color: '#e4eef9', fontWeight: 100 }} data-node-id="20:97">
        Разработка ИИ-решений
      </p>
      <div className="absolute h-[415px] left-0 top-[2504px] w-[1920px] overflow-hidden z-10" data-name="Снимок экрана 2025-09-26 в 21.07.41 1" data-node-id="17:75">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={img202509262107411} />
      </div>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[344.5px] text-[100px] text-[#071a31] text-center top-[1994px] translate-x-[-50%] w-[193px] z-20" data-node-id="19:76">
        7
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[617px] text-[100px] text-[#071a31] text-center top-[1994px] translate-x-[-50%] w-[234px] z-20" data-node-id="19:78">
        61
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[922px] text-[100px] text-[#071a31] text-center top-[1994px] translate-x-[-50%] w-[282px] z-20" data-node-id="19:80">
        120+
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[1229px] text-[100px] text-[#071a31] text-center top-[1994px] translate-x-[-50%] w-[280px] z-20" data-node-id="19:82">
        15
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[1558.5px] text-[100px] text-[#071a31] text-center top-[1994px] translate-x-[-50%] w-[281px] z-20" data-node-id="19:84">
        220
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[344.5px] text-[30px] text-[#071a31] text-center top-[2190px] translate-x-[-50%] w-[279px] z-20" data-node-id="19:77">
        лет экспертизы в области ИИ
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[630px] text-[30px] text-[#071a31] text-center top-[2190px] translate-x-[-50%] w-[260px] z-20" data-node-id="19:79">
        реализованный проект
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[924px] text-[30px] text-[#071a31] text-center top-[2190px] translate-x-[-50%] w-[234px] z-20" data-node-id="19:81">
        научных проектов
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[1229px] text-[30px] text-[#071a31] text-center top-[2190px] translate-x-[-50%] w-[304px] z-20" data-node-id="19:83">
        государственных стандартов по ИИ
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[122px] leading-[normal] left-[1558.5px] text-[30px] text-[#071a31] text-center top-[2190px] translate-x-[-50%] w-[279px] z-20" data-node-id="19:85">
        обученных специалистов
      </p>
      {/* Форма контактов */}
      <div id="contacts" className="absolute left-0 top-[8550px] w-full">
        <FigmaContactForm />
      </div>
      {/* Проект 1: Газпром - темный текст на белом фоне */}
      <div className="absolute h-[350px] left-[252px] top-[4615px] w-[498px] z-10" data-name="Gazprom-01 1" data-node-id="24:119">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgGazprom011} />
      </div>
      <p className="absolute font-['Montserrat',sans-serif] font-thin leading-[normal] left-[771px] text-[#071a31] text-[31px] top-[4760px] w-[979px] z-10" data-node-id="27:121">
        Разработали и провели образовательную программу по применению искусственного интеллекта в нефтегазовой индустрии. Обучили 50+ топ-менеджеров компании практическому использованию ИИ-технологий для оптимизации бизнес-процессов.
      </p>
      {/* Проект 2: КАМАЗ */}
      <p className="absolute font-['Montserrat',sans-serif] font-thin leading-[normal] left-[771px] text-[#071a31] text-[31px] top-[5165px] w-[979px] z-10" data-node-id="27:124">
        Внедрили интеллектуальную систему для оптимизации производственных процессов и прогнозирования потребности в запчастях. Решение помогает повысить эффективность производства и снизить простои.
      </p>
      {/* Проект 3: АВТОВАЗ */}
      <p className="absolute font-['Montserrat',sans-serif] font-thin leading-[normal] left-[771px] text-[#071a31] text-[31px] top-[5532px] w-[979px] z-10" data-node-id="28:127">
        Создали специализированную программу обучения сотрудников применению искусственного интеллекта в автомобильной промышленности. Программа адаптирована под специфику отрасли и задачи компании.
      </p>
      {/* Проект 4: Росстандарт */}
      <p className="absolute font-['Montserrat',sans-serif] font-thin leading-[normal] left-[768px] text-[#071a31] text-[31px] top-[5899px] w-[979px] z-10" data-node-id="29:130">
        Совместно с Росстандартом разработали 15 государственных стандартов в области искусственного интеллекта, заложив нормативную основу для развития ИИ-технологий в России.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin leading-[normal] left-[418px] text-[#071a31] text-[31px] top-[6574px] w-[1334px] whitespace-pre-wrap z-30" data-node-id="40:133">{`Лицензия на образовательную деятельность    Регистрационный номер: Л035-01298-77/01264001   Выдана: Департаментом образования и науки города Москвы   Дата: 24 июня 2024 года   Статус: действующая - Право на дополнительное профессиональное образование - Партнерство с Росстандартом в разработке государственных стандартов по ИИ - Благодарственные письма от крупных корпораций Вся наша деятельность ведется в полном соответствии с требованиями российского законодательства.`}</p>
      <p className="absolute font-['Montserrat',sans-serif] leading-[normal] left-[771px] text-[#071a31] text-[34px] top-[4647px] w-[735px] z-10" style={{ fontWeight: 100 }} data-node-id="27:122">
        Корпоративное обучение ИИ для нефтегазовой отрасли
      </p>
      <p className="absolute font-['Montserrat',sans-serif] leading-[normal] left-[771px] text-[#071a31] text-[34px] top-[5052px] w-[735px] z-10" style={{ fontWeight: 100 }} data-node-id="27:125">
        ИИ-система для производственной оптимизации
      </p>
      <p className="absolute font-['Montserrat',sans-serif] leading-[normal] left-[771px] text-[#071a31] text-[34px] top-[5419px] w-[735px] z-10" style={{ fontWeight: 100 }} data-node-id="28:128">
        Образовательная программа по ИИ для автопрома
      </p>
      <p className="absolute font-['Montserrat',sans-serif] leading-[normal] left-[768px] text-[#071a31] text-[34px] top-[5786px] w-[735px] z-10" style={{ fontWeight: 100 }} data-node-id="29:131">
        Разработка государственных стандартов ИИ
      </p>
      <p className="absolute font-['Montserrat',sans-serif] leading-[normal] left-[418px] text-[#071a31] text-[34px] top-[6424px] w-[993px] z-30" style={{ fontWeight: 100 }} data-node-id="40:134">
        Наша образовательная деятельность официально лицензирована:
      </p>
      <div className="absolute h-[315px] left-[277px] top-[5033px] w-[448px] z-10" data-name="Kamaz-01 1" data-node-id="27:123">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgKamaz011} />
      </div>
      <div className="absolute h-[199px] left-[406px] top-[5829px] w-[177px] z-10" data-name="rosstandart-seeklogo 1" data-node-id="29:129">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgRosstandartSeeklogo1} />
      </div>
      <div className="absolute contents inset-[96.85%_83.79%_2.25%_8.07%] z-20" data-name="Group" data-node-id="12:12">
        <div className="absolute inset-[97.39%_85.35%_2.28%_8.71%]" data-name="Group" data-node-id="12:13">
          <img alt="" className="block max-w-none size-full" src={imgGroup} />
        </div>
        <div className="absolute contents inset-[96.85%_83.79%_2.67%_8.71%]" data-name="Group" data-node-id="12:47">
          <div className="absolute inset-[96.85%_83.79%_2.67%_8.71%]" data-name="Group" data-node-id="12:48">
            <img alt="" className="block max-w-none size-full" src={imgGroup1} />
          </div>
        </div>
        <div className="absolute inset-[96.85%_91.61%_2.25%_8.07%]" data-name="Vector" data-node-id="12:56">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[52px] leading-[59px] text-[30px] text-[#e4eef9] top-[9692px] w-[500px] z-20" data-node-id="55:117" style={{ left: "calc(50% - 544px)" }}>
        © 2025 | {' '}
        <Link 
          to="/privacy-policy" 
          className="underline hover:text-white transition-colors"
          style={{ color: '#e4eef9' }}
        >
          Политика конфиденциальности
        </Link>
      </p>
      {/* z-60: Карусель команды */}
      <div className="absolute h-[1035px] left-0 top-[7208px] w-[1920px] overflow-hidden z-60">
        <div className="absolute h-[1035px] left-[167px] top-0 w-[4096px]" data-name="Команда карусель 2" data-node-id="61:138">
          <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={img2} />
        </div>
      </div>
      </div>
    </div>
  );
}

