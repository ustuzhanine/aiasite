import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imgAvtovaz1 from '/assets/avtovaz.jpg';
import img202509262107411 from '/assets/160c49f1c00c7624603b63d4d0fcc48e05e658fa.png';
import imgGazprom011 from '/assets/Gazprom-01.png';
import imgKamaz011 from '/assets/Kamaz-01.png';
import imgRosstandartSeeklogo1 from '/assets/rosstandart-seeklogo.png';
import imgAiaLogo from '/assets/AIA logo.png';
import imgGroup from '/assets/1ebc5b838508a18566e427e580ee4292afefc6f7.svg';
import imgGroup1 from '/assets/cc2c17757a3f6bc8c3a501729b1a7711be8c131d.svg';
import imgVector from '/assets/cfa8a1f87fed6f20c8816f821e60e45b80e03158.svg';
import FigmaContactForm from './FigmaContactForm';
import img2 from '/assets/Команда карусель.png';

export default function FigmaMobileCanvas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuToggleRef = useRef(null);
  const [scale, setScale] = useState(Math.min(window.innerWidth / 781, 1)); // 781px - ширина мобильного макета Figma
  const [currentStatSlide, setCurrentStatSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newScale = Math.min(window.innerWidth / 781, 1);
      console.log(`[Mobile] Scale: ${newScale.toFixed(3)} (window width: ${window.innerWidth}px)`);
      setScale(newScale);
    };

    // Логируем начальный scale
    console.log(`[Mobile] Initial scale: ${scale.toFixed(3)} (window width: ${window.innerWidth}px)`);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Автоматическое переключение слайдов статистики
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatSlide((prev) => (prev === 4 ? 0 : prev + 1));
    }, 3000); // Переключение каждые 3 секунды

    return () => clearInterval(interval);
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
    setIsMenuOpen(false); // Закрываем меню после клика по ссылке
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        mobileMenuToggleRef.current &&
        !mobileMenuToggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Для карусели команды, дублируем изображение
  const teamCarouselImages = Array(2).fill(img2);

  return (
    <div className="w-full overflow-x-hidden bg-white flex justify-center">
      {/* Контейнер для шапки и меню - двигаются вместе */}
      <div 
        className="fixed left-0 w-full z-[100] transition-all duration-300"
        style={{ 
          zoom: scale,
          top: isMenuOpen ? '0' : '-320px'
        }}
      >
        {/* Меню - всегда сверху, показывается при сдвиге вниз */}
        <div 
          className="w-full h-[320px] bg-[#071a31]"
          data-node-id="56:126"
        >
          <div 
            className="absolute font-['Montserrat',sans-serif] font-extralight h-[46px] leading-[normal] text-right text-[#e4eef9] text-[40px] top-[70px] cursor-pointer hover:opacity-80 transition-opacity" 
            style={{ right: '51.633px', paddingRight: '0px' }}
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            data-node-id="55:112"
          >
            проекты
          </div>
          <div 
            className="absolute font-['Montserrat',sans-serif] font-extralight h-[46px] leading-[normal] text-right text-[#e4eef9] text-[40px] top-[160px] cursor-pointer hover:opacity-80 transition-opacity" 
            style={{ right: '51.633px', paddingRight: '0px' }}
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            data-node-id="55:111"
          >
            услуги
          </div>
          <div 
            className="absolute font-['Montserrat',sans-serif] font-extralight h-[46px] leading-[normal] text-right text-[#e4eef9] text-[40px] top-[250px] cursor-pointer hover:opacity-80 transition-opacity" 
            style={{ right: '51.633px', paddingRight: '0px' }}
            onClick={() => {
              document.getElementById('mobile-contact-form')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            data-node-id="55:113"
          >
            контакты
          </div>
        </div>
        
        {/* Шапка - всегда видна */}
        <div className="relative w-full h-[72px] bg-[#071a31]" data-node-id="48:164">
        <div className="absolute h-[41px] left-[92px] top-[16px] w-[63px]" data-name="AIA logo 1" data-node-id="56:119">
          <img alt="Логотип" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgAiaLogo} />
        </div>
        <div 
          ref={mobileMenuToggleRef} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="absolute left-[689px] top-[20px] w-[40.367px] h-[31.313px] cursor-pointer z-50" 
          data-node-id="56:121"
          aria-label="Меню"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32" fill="none">
            <rect x="33" width="6.72786" height="3.44" rx="1.72" fill="white"/>
            <rect x="18" y="13.4557" width="22.1058" height="3.44" rx="1.72" fill="white"/>
            <rect y="27.8726" width="40.3672" height="3.44" rx="1.72" fill="white"/>
          </svg>
        </div>
      </div>
      </div>
      
      <div 
        className="relative w-[781px]" 
        data-name="mobile" 
        data-node-id="48:160" 
        style={{ 
          zoom: scale,
          marginTop: '72px',
          height: '14177px'
        }}
      >
      {/* Белый фон под всем сайтом - Mobile */}
      <div className="absolute bg-white h-[14177px] left-0 top-0 w-full z-0" data-node-id="52:324" />
      
      {/* Hero видео с эффектом матового стекла - Mobile */}
      <div className="absolute h-[1001px] left-0 top-0 w-[781px] overflow-hidden z-10" data-name="Hero Video Background Mobile" data-node-id="48:163">
        {/* Слой 1: Видео с размытием */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(8px)' }}
          onLoadedData={() => console.log('✅ Mobile video loaded successfully')}
          onError={(e) => console.error('❌ Mobile video error:', e)}
          onCanPlay={() => console.log('🎬 Mobile video can play')}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Слой 2: Матовое стекло (frosted glass effect) */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />
      </div>
        <div className="absolute h-[169px] left-[480px] top-[7297px] w-[300px]" data-name="avtovaz 1" data-node-id="48:162">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgAvtovaz1} />
        </div>
      <div className="absolute bg-[#071a31] h-[923px] left-0 top-[13254px] w-[781px] z-10" data-node-id="48:165" />
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] left-[135px] text-[#071a31] text-[50px] top-[1383px] translate-y-[-50%] w-[219px] z-10" data-node-id="48:169">
          <p className="leading-[normal]">О нас</p>
        </div>
      <div id="services" className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[3455px] translate-y-[-50%] w-[468px] z-10" data-node-id="48:170" style={{ left: "calc(50% - 255.5px)" }}>
          <p className="leading-[normal]">Наши услуги</p>
        </div>
      <div id="projects" className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[5638px] translate-y-[-50%] w-[468px] z-10" data-node-id="48:171" style={{ left: "calc(50% - 255.5px)" }}>
          <p className="leading-[normal]">Наши проекты</p>
        </div>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[159px] leading-[normal] text-[#071a31] text-[50px] top-[8745px] w-[603px] z-10" data-node-id="48:172" style={{ left: "calc(50% - 264.5px)" }}>
          Лицензии и Сертификаты
        </p>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[119px] justify-center leading-[0] text-[#071a31] text-[50px] top-[10047px] translate-y-[-50%] w-[603px]" data-node-id="48:173" style={{ left: "calc(50% - 264.5px)" }}>
          <p className="leading-[normal]">Наша команда</p>
        </div>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[223px] leading-[normal] text-[#071a31] text-[40px] top-[11415px] w-[560px]" data-node-id="48:174" style={{ left: "calc(50% - 264.5px)" }}>
          Напишите нам, и мы найдем оптимальное ИИ-решение для вашего бизнеса
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[87px] leading-[59px] text-[#e4eef9] text-[50px] top-[13413px] w-[625px]" data-node-id="48:176" style={{ left: "calc(50% - 261.5px)", color: '#e4eef9' }}>
          +7 (495) 123-47-05
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[108px] leading-[59px] text-[#e4eef9] text-[50px] top-[13605px] w-[575px]" data-node-id="48:177" style={{ left: "calc(50% - 264.5px)", color: '#e4eef9' }}>
          in@aiagency.ru
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#e4eef9] text-[30px] top-[13534px] w-[317px]" data-node-id="48:180" style={{ left: "calc(50% - 258.5px)", color: '#e4eef9' }}>
          электронная почта
        </p>
        <div className="absolute font-['Montserrat',sans-serif] font-thin h-[1016px] leading-[normal] left-[135px] text-[#071a31] text-[30px] top-[1506px] w-[582px]" data-node-id="48:181">
          <p className="mb-0">ведущая консалтинговая компания в области искусственного интеллекта, которая помогает крупному бизнесу извлекать реальную прибыль из ИИ-технологий.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Мы специализируемся на трех ключевых направлениях: корпоративном обучении искусственному интеллекту, разработке интеллектуальных решений под конкретные бизнес-задачи и стратегическом консалтинге по цифровой трансформации.</p>
          <p className="mb-0">&nbsp;</p>
          <p>Наша команда объединяет кандидатов наук, выпускников Сколково и признанных экспертов отрасли с многолетним практическим опытом. Мы не только знаем теорию ИИ, но и понимаем, как применить эти знания для роста эффективности и прибыльности бизнеса.</p>
        </div>
      <div className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute flex flex-col font-['Montserrat',sans-serif] font-bold h-[177px] justify-center leading-[0] left-[92px] text-[#f0f4f7] text-[50px] top-[438px] w-[433px] z-20" data-node-id="48:185" style={{ color: '#f0f4f7' }}>
          <p className="leading-[44px]">Агентство Искусственного Интеллекта</p>
        </div>
      <p className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute font-['Montserrat',sans-serif] font-thin h-[108px] leading-[42px] left-[101px] text-[#f0f4f7] text-[36px] top-[615px] w-[589px] z-20" data-node-id="48:186" style={{ color: '#f0f4f7' }}>
          эксперты по обучению и внедрению ИИ-технологий
        </p>
      {/* Кнопка "связаться с нами" - поверх всех слоёв hero */}
      <div 
        className="absolute left-[39px] top-[1074px] w-[713px] h-[90px] bg-[#071a31] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] z-50 cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center" 
        data-node-id="48:187"
        onClick={() => document.getElementById('mobile-contact-form')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="font-['Montserrat',sans-serif] font-thin text-[40px] text-[#e4eef9] leading-[normal]" data-node-id="48:189" style={{ color: '#e4eef9' }}>
          связаться с нами
        </p>
      </div>
        <div className="absolute bg-[#071a31] h-[580px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[3579px] w-[695px]" data-node-id="48:190" />
        <div className="absolute bg-[#071a31] h-[609px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[4193px] w-[695px]" data-node-id="52:325" />
        <div className="absolute bg-[#071a31] h-[580px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[4846px] w-[695px]" data-node-id="52:328" />
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[293px] leading-[normal] left-[135px] text-[#e4eef9] text-[31px] top-[3804px] w-[527px]" data-node-id="48:193" style={{ color: '#e4eef9' }}>
          Обучаем топ-менеджеров и специалистов компаний практическому применению ИИ в их отраслях. От базовых принципов до конкретных инструментов для роста бизнеса.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[293px] leading-[normal] left-[135px] text-[#e4eef9] text-[31px] top-[4428px] w-[527px]" data-node-id="52:326" style={{ color: '#e4eef9' }}>
          Разрабатываем дорожную карту цифровой трансформации с конкретными KPI и сроками окупаемости. Помогаем выбрать приоритетные направления и избежать дорогостоящих ошибок.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[293px] leading-[normal] left-[135px] text-[#e4eef9] text-[31px] top-[5081px] w-[527px]" data-node-id="52:329" style={{ color: '#e4eef9' }}>
          Создаем интеллектуальных агентов и системы автоматизации под конкретные задачи вашего бизнеса. От ассистентов делопроизводства до уникальных инновационных разработок.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-[#e4eef9] text-[34px] top-[3647px] w-[527px]" data-node-id="48:196" style={{ color: '#e4eef9' }}>
          Корпоративное обучение искусственному интеллекту
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-[#e4eef9] text-[34px] top-[4281px] w-[527px]" data-node-id="52:327" style={{ color: '#e4eef9' }}>
          Стратегия внедрения ИИ
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-[#e4eef9] text-[34px] top-[4934px] w-[527px]" data-node-id="52:330" style={{ color: '#e4eef9' }}>
          Разработка ИИ-решений
        </p>
      {/* Статистика - Карусель */}
      <div className="absolute h-[293px] left-0 top-[3057px] w-[781px] overflow-hidden z-10" data-name="Снимок экрана 2025-09-26 в 21.07.41 1" data-node-id="48:199">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={img202509262107411} />
      </div>
      
      {/* Контейнер карусели статистики */}
      <div className="absolute left-0 top-[2658px] w-[781px] h-[450px] z-20 overflow-hidden">
        {/* Слайдер с анимацией */}
        <div 
          className="relative w-full h-full transition-transform duration-700 ease-in-out"
          style={{ 
            transform: `translateX(-${currentStatSlide * 100}%)`
          }}
        >
          {[
            { number: '7', text: 'лет экспертизы в области ИИ' },
            { number: '61', text: 'реализованный проект' },
            { number: '120+', text: 'научных проектов' },
            { number: '15', text: 'государственных стандартов по ИИ' },
            { number: '220', text: 'обученных специалистов' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="absolute top-0 w-[781px] h-full"
              style={{ left: `${index * 100}%` }}
            >
              {/* Цифра - поднята выше */}
              <div className="absolute left-[50%] top-[-50px] translate-x-[-50%]">
                <p className="font-['Montserrat',sans-serif] font-thin text-[100px] text-[#071a31] text-center leading-[122px]">
                  {stat.number}
                </p>
              </div>
              
              {/* Текст описания - опущен ниже */}
              <div className="absolute left-[50%] top-[146px] translate-x-[-50%] w-[400px]">
                <p className="font-['Montserrat',sans-serif] font-thin text-[30px] text-[#071a31] text-center leading-[normal]">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bg-[#071a31] h-[1343px] left-[27px] rounded-[22px] shadow-[9px_9px_16px_-1px_#1e1e1e] top-[11686px] w-[727px]" data-node-id="48:210" />
      <div className="absolute bg-white h-[82px] left-[81px] rounded-[14px] top-[11827px] w-[620px]" data-node-id="48:211" />
      <div className="absolute bg-white h-[82px] left-[81px] rounded-[34px] top-[12891px] w-[620px]" data-node-id="56:122" />
      <div className="absolute bg-white rounded-[13px] size-[37px] top-[12774px] translate-x-[-50%]" data-node-id="56:125" style={{ left: "calc(50% - 270.5px)" }} />
      <div className="absolute bg-white h-[82px] left-[81px] rounded-[14px] top-[12035px] w-[620px]" data-node-id="54:2" />
      <div className="absolute bg-white h-[495px] left-[81px] rounded-[22px] top-[12243px] w-[620px]" data-node-id="48:212" />
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[31px] justify-center leading-[0] left-[144px] text-[#e4eef9] text-[20px] top-[11763.5px] translate-y-[-50%] w-[163px]" data-node-id="48:214">
        <p className="leading-[normal]">имя</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[31px] justify-center leading-[0] left-[144px] text-[#e4eef9] text-[20px] top-[12179.5px] translate-y-[-50%] w-[163px]" data-node-id="48:215">
        <p className="leading-[normal]">сообщение</p>
      </div>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[79px] leading-[normal] left-[144px] text-[#e4eef9] text-[20px] top-[12769px] w-[500px]" data-node-id="56:123">
        Я согласен с политикой конфиденциальности и даю согласие на обработку персональных данных
      </p>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] font-thin h-[57px] justify-center leading-[0] left-[246px] text-[#071a31] text-[30px] text-center top-[12904px] translate-x-[-50%] translate-y-[-50%] w-[284px]" data-node-id="56:124">
        <p className="leading-[normal]">отправить</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[31px] justify-center leading-[0] left-[144px] text-[#e4eef9] text-[20px] top-[11971.5px] translate-y-[-50%] w-[163px]" data-node-id="48:216">
        <p className="leading-[normal]">почта</p>
      </div>
      <div className="absolute h-[213px] left-[478px] top-[5731px] w-[303px]" data-name="Gazprom-01 1" data-node-id="48:217">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgGazprom011} />
        </div>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[426px] leading-[normal] left-[135px] text-[#071a31] text-[31px] top-[6077px] w-[603px]" data-node-id="48:218">
          Разработали и провели образовательную программу по применению искусственного интеллекта в нефтегазовой индустрии. Обучили 50+ топ-менеджеров компании практическому использованию ИИ-технологий для оптимизации бизнес-процессов.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[388px] leading-[normal] left-[135px] text-[#071a31] text-[31px] top-[6888px] w-[603px]" data-node-id="48:219">
          Внедрили интеллектуальную систему для оптимизации производственных процессов и прогнозирования потребности в запчастях. Решение помогает повысить эффективность производства и снизить простои.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[388px] leading-[normal] left-[126px] text-[#071a31] text-[31px] top-[7614px] w-[603px]" data-node-id="53:331">
          Создали специализированную программу обучения сотрудников применению искусственного интеллекта в автомобильной промышленности. Программа адаптирована под специфику отрасли и задачи компании.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[388px] leading-[normal] left-[126px] text-[#071a31] text-[31px] top-[8305px] w-[603px]" data-node-id="53:333">
          Совместно с Росстандартом разработали 15 государственных стандартов в области искусственного интеллекта, заложив нормативную основу для развития ИИ-технологий в России.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[503px] leading-[normal] left-[126px] text-[#071a31] text-[31px] top-[9206px] w-[603px]" data-node-id="48:222">
        Лицензия на образовательную деятельность    Регистрационный номер: Л035-01298-77/01264001   Выдана: Департаментом образования и науки города Москвы   Дата: 24 июня 2024 года   Статус: действующая - Право на дополнительное профессиональное образование - Партнерство с Росстандартом в разработке государственных стандартов по ИИ - Благодарственные письма от крупных корпораций Вся наша деятельность ведется в полном соответствии с требованиями российского законодательства.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[184px] leading-[normal] left-[135px] text-[#071a31] text-[34px] top-[5933px] w-[453px]" data-node-id="48:223">
          Корпоративное обучение ИИ для нефтегазовой отрасли
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[209px] leading-[normal] left-[135px] text-[#071a31] text-[34px] top-[6739px] w-[453px]" data-node-id="48:224">
          ИИ-система для производственной оптимизации
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[209px] leading-[normal] left-[126px] text-[#071a31] text-[34px] top-[7465px] w-[453px]" data-node-id="53:332">
          Образовательная программа по ИИ для автопрома
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[209px] leading-[normal] left-[126px] text-[#071a31] text-[34px] top-[8156px] w-[453px]" data-node-id="53:334">
          Разработка государственных стандартов ИИ
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[136px] leading-[normal] left-[126px] text-[#071a31] text-[34px] top-[8958px] w-[449px]" data-node-id="48:227">
          Наша образовательная деятельность официально лицензирована:
        </p>
      <div className="absolute h-[199px] left-[488px] top-[6524px] w-[283px]" data-name="Kamaz-01 1" data-node-id="48:228">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgKamaz011} />
      </div>
      <div className="absolute h-[121px] left-[576px] top-[8023px] w-[108px]" data-name="rosstandart-seeklogo 1" data-node-id="48:229">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgRosstandartSeeklogo1} />
      </div>
      <div className="absolute font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] left-[135px] text-[#071a31] text-[50px] top-[2992px] translate-y-[-50%] w-[683px]" data-node-id="49:323">
        <p className="leading-[normal]">Наши партнёры</p>
        </div>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[324px] leading-[59px] text-[#e4eef9] text-[30px] top-[13797px] w-[569px]" data-node-id="48:175" style={{ left: "calc(50% - 261.5px)" }}>
        119049, РФ, г. Москва, ул. Дубнинская, д. 75Б, стр. 2
      </p>
      <div className="absolute bg-[#071a31] h-[1113px] left-0 rounded-[19px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[8733px] w-[91px]" data-node-id="48:166" />
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#e4eef9] text-[30px] top-[13726px] w-[205px]" data-node-id="48:179" style={{ left: "calc(50% - 258.5px)" }}>
        адрес
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#e4eef9] text-[30px] top-[13342px] w-[205px]" data-node-id="48:178" style={{ left: "calc(50% - 261.5px)" }}>
        телефон
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin leading-[normal] text-[20px] text-[#e4eef9] top-[14069px] w-[650px] text-center" data-node-id="55:49" style={{ left: "calc(50% - 325px)" }}>
        © 2025<br />
        <Link 
          to="/privacy-policy" 
          className="underline hover:text-white transition-colors"
          style={{ color: '#e4eef9' }}
        >
          Политика конфиденциальности
        </Link>
      </p>
      <div className="absolute contents inset-[96.85%_83.79%_2.25%_8.07%]" data-name="Group" data-node-id="12:12">
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
      <div className="absolute contents left-[148px] top-[13121px]" data-node-id="55:50">
        <div className="absolute inset-[97.39%_85.35%_2.28%_8.71%]" data-name="Group 2" data-node-id="55:51">
          <img alt="" className="block max-w-none size-full" src={imgGroup} />
        </div>
      </div>
      {/* Контейнер для карусели с overflow-hidden */}
      <div className="absolute h-[1035px] left-0 top-[7208px] w-full overflow-hidden">
        <div className="absolute h-[1035px] left-[167px] top-0 w-[4096px]" data-name="Команда карусель 2" data-node-id="61:138">
          <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={img2} />
        </div>
      </div>
      <div id="mobile-contact-form" className="absolute left-0 top-[11300px] w-full">
        <FigmaContactForm isMobile={true} />
      </div>
      </div>
    </div>
  );
}
