import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imgAiaLogo from '/assets/AIA logo.png';
import imgFooterLogoMobile from '/assets/logo-footer-mobile.jpg';
import imgGroup from '/assets/1ebc5b838508a18566e427e580ee4292afefc6f7.svg';
import imgGroup1 from '/assets/cc2c17757a3f6bc8c3a501729b1a7711be8c131d.svg';
import imgVector from '/assets/cfa8a1f87fed6f20c8816f821e60e45b80e03158.svg';
import FigmaContactForm from './FigmaContactForm';

// Проекты
import imgProject1 from '/assets/partners/1.png';
import imgProject2 from '/assets/partners/2.png';
import imgProject3 from '/assets/partners/3.png';
import imgProject4 from '/assets/partners/4.png';

// Партнеры
import imgKamaz from '/assets/partners/kamaz-logo-2000x2500.png';
import imgRosstandart from '/assets/partners/rosstandart-seeklogo.png';
import imgGoznak from '/assets/partners/GOZNAK.jpg';
import imgLukoil from '/assets/partners/LUKOIL.jpg';
import imgFRI from '/assets/partners/FRI-01.png';
import imgFroo from '/assets/partners/froo-01.png';
import imgDeecrypto from '/assets/partners/deecrypto-01.png';
import imgIshkola from '/assets/partners/ishkola-01.png';
import imgShkolaPrava from '/assets/partners/shkola prava-01.png';
import imgSkillfactory from '/assets/partners/skillfactory-01.png';
import imgZnanie from '/assets/partners/znanie-01.png';
import imgTEngriLab from '/assets/partners/TEngriLab.png';
import imgLanit from '/assets/partners/Lanit_Монтажная область 1.png';
import imgRosAtom from '/assets/partners/RosAtom_Монтажная область 1.png';
import imgWRF from '/assets/partners/WRF_Монтажная область 1.png';
import imgInno from '/assets/partners/inno_Монтажная область 1.png';
import imgRanhigs from '/assets/partners/РАНХиГС лого-01.png';
import imgRST2 from '/assets/partners/РСТ.png';
import imgRUTMIIT from '/assets/partners/РУТ МИИТ.png';
import imgAdminTO from '/assets/partners/Администрация ТО.jpg';
import imgAssotsKazakhstan from '/assets/partners/Ассоциации когнитивных городов Казахстана_Монтажная область 1.jpg';
import imgPoznanie2 from '/assets/partners/Познание_Монтажная область 1.jpg';
import imgFondPodderzhki from '/assets/partners/Фонд поддержки_Монтажная область 1.png';
import imgPMYEF from '/assets/partners/pmyef-logo.dpi_75-1.jpg';
import imgSMILEONLINE from '/assets/partners/SMILEONLINE.svg';
import imgLogo2 from '/assets/partners/logo_2.svg';
import imgGroup97 from '/assets/partners/Group_97.png';
import img20_35 from '/assets/partners/20.35_Монтажная область 1.png';
import imgAlrii from '/assets/partners/АЛРИИ_ЛОГО.png';
import img445 from '/assets/partners/445a88bb7b4f9205d08db61192616c587c3dc7a0.png';
import img625 from '/assets/partners/62584929477fdda025677ac82848448ff5332577.png';
import imgD6c7 from '/assets/partners/d6c7d365_59ea_45f3_9f78_96bb2bf6a4ef.png';

// Команда
import imgTeam from '/assets/team/team.png';

export default function FigmaMobileCanvas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuToggleRef = useRef(null);
  const [scale, setScale] = useState(Math.min(window.innerWidth / 781, 1)); // 781px - ширина мобильного макета Figma
  const [currentStatSlide, setCurrentStatSlide] = useState(0);
  const [partnerSlidePosition, setPartnerSlidePosition] = useState(0);
  const [teamSlidePosition, setTeamSlidePosition] = useState(0);
  
  // Состояния для свайпа/перетаскивания
  const [isDraggingPartners, setIsDraggingPartners] = useState(false);
  const [isDraggingTeam, setIsDraggingTeam] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const autoScrollTimeoutRef = useRef(null);

  // Массив всех партнеров
  const partners = [
    imgRosstandart, imgGoznak, imgLukoil, imgFRI, 
    imgFroo, imgDeecrypto, imgIshkola,
    imgShkolaPrava, imgSkillfactory, imgZnanie, imgTEngriLab,
    imgLanit, imgRosAtom, imgWRF, imgInno,
    imgRanhigs, imgRST2, imgRUTMIIT,
    imgAdminTO, imgAssotsKazakhstan, imgPoznanie2, imgFondPodderzhki,
    imgPMYEF, imgSMILEONLINE, imgLogo2, imgGroup97, img20_35,
    imgKamaz, imgAlrii, img445, img625, imgD6c7
  ];

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

  // Автоматическое движение слайдера партнеров слева направо
  useEffect(() => {
    if (isAutoScrollPaused) return;
    
    const interval = setInterval(() => {
      setPartnerSlidePosition((prev) => {
        // Рассчитываем общую ширину одного набора партнеров (36 партнеров * ~150px средняя ширина + gap 60px)
        const partnerSetWidth = partners.length * 210; // примерная ширина одного набора с отступами
        
        // Когда прошли один полный набор, сбрасываем позицию для бесшовного зацикливания
        if (prev <= -partnerSetWidth) {
          return 0;
        }
        return prev - 5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [partners.length, isAutoScrollPaused]);

  // Автоматическое движение слайдера команды справа налево
  useEffect(() => {
    if (isAutoScrollPaused) return;
    
    const interval = setInterval(() => {
      setTeamSlidePosition((prev) => {
        // Ширина одного изображения команды (6000px без gap)
        const teamImageWidth = 6000;
        
        // Когда прошли одно изображение, сбрасываем позицию для бесшовного зацикливания
        if (prev <= -teamImageWidth) {
          return 0;
        }
        return prev - 3;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoScrollPaused]);

  // Обработчики для свайпа карусели партнеров
  const handlePartnersTouchStart = (e) => {
    setIsDraggingPartners(true);
    setStartX(e.touches[0].clientX);
    setIsAutoScrollPaused(true);
    if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
  };

  const handlePartnersTouchMove = (e) => {
    if (!isDraggingPartners) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setPartnerSlidePosition((prev) => prev + diff);
    setStartX(currentX);
  };

  const handlePartnersTouchEnd = () => {
    setIsDraggingPartners(false);
    // Возобновляем автопрокрутку через 2 секунды
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 2000);
  };

  // Обработчики для свайпа карусели команды
  const handleTeamTouchStart = (e) => {
    setIsDraggingTeam(true);
    setStartX(e.touches[0].clientX);
    setIsAutoScrollPaused(true);
    if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
  };

  const handleTeamTouchMove = (e) => {
    if (!isDraggingTeam) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTeamSlidePosition((prev) => prev + diff);
    setStartX(currentX);
  };

  const handleTeamTouchEnd = () => {
    setIsDraggingTeam(false);
    // Возобновляем автопрокрутку через 2 секунды
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 2000);
  };

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
            className="absolute font-['Montserrat',sans-serif] font-extralight h-[46px] leading-[normal] text-right text-[#ffffff] text-[40px] top-[70px] cursor-pointer hover:opacity-80 transition-opacity" 
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
            className="absolute font-['Montserrat',sans-serif] font-extralight h-[46px] leading-[normal] text-right text-[#ffffff] text-[40px] top-[160px] cursor-pointer hover:opacity-80 transition-opacity" 
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
            className="absolute font-['Montserrat',sans-serif] font-extralight h-[46px] leading-[normal] text-right text-[#ffffff] text-[40px] top-[250px] cursor-pointer hover:opacity-80 transition-opacity" 
            style={{ right: '51.633px', paddingRight: '0px' }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
          height: '14014px'
        }}
      >
      {/* Белый фон под всем сайтом - Mobile */}
      <div className="absolute bg-white h-[14014px] left-0 top-0 w-full z-0" data-node-id="52:324" />
      
      {/* Hero видео с эффектом матового стекла - Mobile */}
      <div className="absolute h-[1251px] left-0 top-0 w-[781px] overflow-hidden z-10" data-name="Hero Video Background Mobile" data-node-id="48:163">
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
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject3} />
        </div>
      <div className="absolute bg-[#071a31] h-[893px] left-0 top-[13121px] w-[781px] z-10" data-node-id="48:165" />
      {/* Логотип между формой и футером */}
      <div className="absolute left-[50%] translate-x-[-50%] top-[12931px] h-[120px] w-auto z-20">
        <img alt="AIA Logo" className="h-full w-auto object-contain" src={imgFooterLogoMobile} />
      </div>
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
      <div id="team" className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[119px] justify-center leading-[0] text-[#071a31] text-[50px] top-[10047px] translate-y-[-50%] w-[603px]" data-node-id="48:173" style={{ left: "calc(50% - 264.5px)" }}>
          <p className="leading-[normal]">Наша команда</p>
        </div>
      <p id="contact" className="absolute font-['Montserrat',sans-serif] font-medium h-[223px] leading-[normal] text-[#071a31] text-[40px] top-[11300px] w-[560px]" data-node-id="48:174" style={{ left: "calc(50% - 264.5px)", scrollMarginTop: '150px' }}>
          Напишите нам, и мы найдем оптимальное ИИ-решение для вашего бизнеса
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[87px] leading-[59px] text-[#ffffff] text-[50px] top-[13280px] w-[625px] z-20" data-node-id="48:176" style={{ left: "calc(50% - 261.5px)", color: '#ffffff' }}>
          +7 (495) 123-47-05
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[108px] leading-[59px] text-[#ffffff] text-[50px] top-[13472px] w-[575px] z-20" data-node-id="48:177" style={{ left: "calc(50% - 264.5px)", color: '#ffffff' }}>
          in@aiagency.ru
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#ffffff] text-[30px] top-[13401px] w-[317px] z-20" data-node-id="48:180" style={{ left: "calc(50% - 258.5px)", color: '#ffffff' }}>
          электронная почта
        </p>
        <div className="absolute font-['Montserrat',sans-serif] font-thin h-[1016px] leading-[normal] left-[135px] text-[#071a31] text-[30px] top-[1506px] w-[582px]" data-node-id="48:181">
          <p className="mb-0">ведущая консалтинговая компания в области искусственного интеллекта, которая помогает крупному бизнесу извлекать реальную прибыль из ИИ-технологий.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Мы специализируемся на трех ключевых направлениях: корпоративном обучении искусственному интеллекту, разработке интеллектуальных решений под конкретные бизнес-задачи и стратегическом консалтинге по цифровой трансформации.</p>
          <p className="mb-0">&nbsp;</p>
          <p>Наша команда объединяет кандидатов наук, выпускников Сколково и признанных экспертов отрасли с многолетним практическим опытом. Мы не только знаем теорию ИИ, но и понимаем, как применить эти знания для роста эффективности и прибыльности бизнеса.</p>
        </div>
      <div className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute flex flex-col font-['Montserrat',sans-serif] font-bold h-[177px] justify-center leading-[0] left-[92px] text-[#f0f4f7] text-[50px] top-[650px] w-[433px] z-20" data-node-id="48:185" style={{ color: '#f0f4f7' }}>
          <p className="leading-[44px]">Агентство Искусственного Интеллекта</p>
        </div>
      <p className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute font-['Montserrat',sans-serif] font-thin h-[108px] leading-[42px] left-[101px] text-[#f0f4f7] text-[36px] top-[800px] w-[589px] z-20" data-node-id="48:186" style={{ color: '#f0f4f7' }}>
          эксперты по обучению и внедрению ИИ-технологий
        </p>
      {/* Кнопка "связаться с нами" - поверх всех слоёв hero */}
      <div 
        className="absolute left-[50%] translate-x-[-50%] top-[1074px] w-[713px] h-[90px] bg-[#071a31] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] z-50 cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center" 
        data-node-id="48:187"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="font-['Montserrat',sans-serif] font-thin text-[40px] text-[#ffffff] leading-[normal]" data-node-id="48:189" style={{ color: '#ffffff' }}>
          связаться с нами
        </p>
      </div>
        <div className="absolute bg-[#071a31] h-[580px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[3539px] w-[695px]" data-node-id="48:190" />
        <div className="absolute bg-[#071a31] h-[609px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[4153px] w-[695px]" data-node-id="52:325" />
        <div className="absolute bg-[#071a31] h-[580px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[4806px] w-[695px]" data-node-id="52:328" />
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[293px] leading-[normal] left-[135px] text-[#ffffff] text-[31px] top-[3720px] w-[527px]" data-node-id="48:193" style={{ color: '#ffffff' }}>
          Обучаем топ-менеджеров и специалистов компаний практическому применению ИИ в их отраслях. От базовых принципов до конкретных инструментов для роста бизнеса.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[293px] leading-[normal] left-[135px] text-[#ffffff] text-[31px] top-[4334px] w-[527px]" data-node-id="52:326" style={{ color: '#ffffff' }}>
        Разрабатываем дорожную карту цифровой трансформации с конкретными KPI и сроками окупаемости. Помогаем выбрать приоритетные направления и избежать дорогостоящих ошибок.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[293px] leading-[normal] left-[135px] text-[#ffffff] text-[31px] top-[4987px] w-[527px]" data-node-id="52:329" style={{ color: '#ffffff' }}>
          Создаем интеллектуальных агентов и системы автоматизации под конкретные задачи вашего бизнеса. От ассистентов делопроизводства до уникальных инновационных разработок.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-[#ffffff] text-[34px] top-[3587px] w-[527px]" data-node-id="48:196" style={{ color: '#ffffff' }}>
          Корпоративное обучение искусственному интеллекту
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-[#ffffff] text-[34px] top-[4201px] w-[527px]" data-node-id="52:327" style={{ color: '#ffffff' }}>
          Стратегия внедрения ИИ
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-[#ffffff] text-[34px] top-[4854px] w-[527px]" data-node-id="52:330" style={{ color: '#ffffff' }}>
          Разработка ИИ-решений
        </p>
      
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
      <div className="absolute h-[213px] left-[478px] top-[5731px] w-[303px]" data-name="Gazprom-01 1" data-node-id="48:217">
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject1} />
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
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject2} />
      </div>
      <div className="absolute h-[121px] left-[576px] top-[8023px] w-[108px]" data-name="rosstandart-seeklogo 1" data-node-id="48:229">
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject4} />
      </div>
      <div className="absolute font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] left-[135px] text-[#071a31] text-[50px] top-[2992px] translate-y-[-50%] w-[683px]" data-node-id="49:323">
        <p className="leading-[normal]">Наши партнёры</p>
      </div>
      
      {/* Слайдер партнеров - Мобильная версия */}
      <div 
        className="absolute left-0 top-[3150px] w-[781px] h-[200px] overflow-hidden z-20 touch-pan-y"
        onTouchStart={handlePartnersTouchStart}
        onTouchMove={handlePartnersTouchMove}
        onTouchEnd={handlePartnersTouchEnd}
      >
        <div 
          className="flex items-center gap-[60px] h-full"
          style={{
            transform: `translateX(${partnerSlidePosition}px)`,
            transition: 'none'
          }}
        >
          {/* Дублируем массив партнеров для бесконечного эффекта */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                height: '120px',
                width: 'auto'
              }}
            >
              <img 
                src={partner} 
                alt={`Partner ${index}`}
                className="max-h-full w-auto object-contain"
                style={{ 
                  filter: 'grayscale(0%)',
                  opacity: 0.9,
                  height: '120px',
                  width: 'auto'
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[324px] leading-[59px] text-[#ffffff] text-[30px] top-[13664px] w-[569px] z-20" data-node-id="48:175" style={{ left: "calc(50% - 261.5px)", color: '#ffffff' }}>
        119049, РФ, г. Москва, ул. Дубнинская, д. 75Б, стр. 2
      </p>
      <div className="absolute bg-[#071a31] h-[1035px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[8800px] w-[51px]" style={{ borderRadius: '0 19px 19px 0' }} data-node-id="48:166" />
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#ffffff] text-[30px] top-[13593px] w-[205px] z-20" data-node-id="48:179" style={{ left: "calc(50% - 258.5px)", color: '#ffffff' }}>
        адрес
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#ffffff] text-[30px] top-[13209px] w-[205px] z-20" data-node-id="48:178" style={{ left: "calc(50% - 261.5px)", color: '#ffffff' }}>
        телефон
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#ffffff] text-[30px] top-[13906px] w-[205px] z-20" data-node-id="55:49" style={{ left: "calc(50% - 261.5px)", color: '#ffffff' }}>
        © 2025
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
      <div className="absolute contents left-[148px] top-[13371px]" data-node-id="55:50">
        <div className="absolute inset-[97.39%_85.35%_2.28%_8.71%]" data-name="Group 2" data-node-id="55:51">
          <img alt="" className="block max-w-none size-full" src={imgGroup} />
        </div>
      </div>
      {/* Контейнер для карусели команды с overflow-hidden */}
      <div 
        className="absolute h-[1035px] left-0 top-[10200px] w-full overflow-hidden z-20 touch-pan-y"
        onTouchStart={handleTeamTouchStart}
        onTouchMove={handleTeamTouchMove}
        onTouchEnd={handleTeamTouchEnd}
      >
        <div 
          className="flex items-center gap-0 h-full"
          style={{
            transform: `translateX(${teamSlidePosition}px)`,
            transition: 'none'
          }}
        >
          {/* Дублируем изображение для бесконечного эффекта */}
          {[...Array(5)].map((_, index) => (
            <div 
              key={index}
              className="flex-shrink-0"
              style={{
                height: '1035px',
                width: '6000px'
              }}
            >
              <img 
                src={imgTeam} 
                alt="Команда"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
      <div id="mobile-contact-form" className="absolute left-0 top-[11600px] w-full">
        <FigmaContactForm isMobile={true} />
      </div>
      </div>
    </div>
  );
}
