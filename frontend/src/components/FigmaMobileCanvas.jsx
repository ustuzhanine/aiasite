import React, { useState, useEffect, useRef } from 'react';
import imgAiaLogo from '/assets/AIA logo.png';
import imgFooterLogoMobile from '/assets/logo-footer-mobile.jpg';
import imgGroup from '/assets/1ebc5b838508a18566e427e580ee4292afefc6f7.svg';
import imgGroup1 from '/assets/cc2c17757a3f6bc8c3a501729b1a7711be8c131d.svg';
import imgVector from '/assets/cfa8a1f87fed6f20c8816f821e60e45b80e03158.svg';

// Проекты
import imgProject1 from '/assets/partners/1.png';
import imgProject2 from '/assets/partners/2.png';
import imgProject3 from '/assets/partners/MIKL.png';
import imgProject4 from '/assets/partners/4.png';
import imgProject5 from '/assets/partners/5.png';
import imgProject6 from '/assets/partners/6.png';

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
import imgAdminTO from '/assets/partners/omsk.png';
import imgAssotsKazakhstan from '/assets/partners/Ассоциации когнитивных городов Казахстана_Монтажная область 1.jpg';
import imgPoznanie2 from '/assets/partners/Познание_Монтажная область 1.jpg';
import imgFondPodderzhki from '/assets/partners/Фонд поддержки_Монтажная область 1.png';
import imgPMYEF from '/assets/partners/pmyef-logo.dpi_75-1.jpg';
import imgSMILEONLINE from '/assets/partners/SMILEONLINE.png';
import imgLogo2 from '/assets/partners/logo_2.svg';
import imgGroup97 from '/assets/partners/Group_97.png';
import img20_35 from '/assets/partners/20.35_Монтажная область 1.png';
import imgAlrii from '/assets/partners/АЛРИИ_ЛОГО.png';
import img445 from '/assets/partners/445a88bb7b4f9205d08db61192616c587c3dc7a0.png';
import img625 from '/assets/partners/62584929477fdda025677ac82848448ff5332577.png';
import imgD6c7 from '/assets/partners/d6c7d365_59ea_45f3_9f78_96bb2bf6a4ef.png';

// Команда
import imgTeam from '/assets/team/team.png';

// Фотографии
const photoImages = [
  '/assets/photo/2025-09-30 16.44.20.jpg',
  '/assets/photo/2025-09-30 16.44.36.jpg',
  '/assets/photo/2025-09-30 16.44.41.jpg',
  '/assets/photo/2025-09-30 16.44.47.jpg',
  '/assets/photo/2025-09-30 16.44.51.jpg',
  '/assets/photo/2025-09-30 16.44.58.jpg',
  '/assets/photo/2025-09-30 16.47.56.jpg',
  '/assets/photo/2025-09-30 16.48.04.jpg',
  '/assets/photo/2025-09-30 16.48.10.jpg',
  '/assets/photo/2025-09-30 16.48.15.jpg',
  '/assets/photo/2025-09-30 16.48.21.jpg',
  '/assets/photo/2025-09-30 16.48.27.jpg',
  '/assets/photo/2025-09-30 16.48.34.jpg',
  '/assets/photo/photo_2025-10-02 08.39.15.jpeg',
  '/assets/photo/photo_2025-10-02 13.43.21.jpeg',
];

export default function FigmaMobileCanvas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuToggleRef = useRef(null);

  const [scale, setScale] = useState(Math.min(window.innerWidth / 781, 1)); // 781px - ширина мобильного макета Figma
  const [currentStatSlide, setCurrentStatSlide] = useState(0);
  const [partnerSlidePosition, setPartnerSlidePosition] = useState(0);
  const [teamSlidePosition, setTeamSlidePosition] = useState(0);
  const [photoSlidePosition, setPhotoSlidePosition] = useState(0);

  // Состояния для свайпа/перетаскивания
  const [isDraggingPartners, setIsDraggingPartners] = useState(false);
  const [isDraggingTeam, setIsDraggingTeam] = useState(false);
  const [isDraggingPhoto, setIsDraggingPhoto] = useState(false);
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
        // Ширина одного изображения команды (3500px без gap)
        const teamImageWidth = 3500;

        // Когда прошли одно изображение, сбрасываем позицию для бесшовного зацикливания
        if (prev <= -teamImageWidth) {
          return 0;
        }
        return prev - 3;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoScrollPaused]);

  // Автоматическое движение слайдера фото слева направо (мобильная версия)
  useEffect(() => {
    if (isAutoScrollPaused) return;

    const interval = setInterval(() => {
      setPhotoSlidePosition((prev) => {
        // Рассчитываем ширину одного набора фото (14 фото * ~305px ширина с gap)
        const photoSetWidth = photoImages.length * 305; // ширина фото + 5px gap для мобильной

        // Когда прошли один полный набор, сбрасываем позицию для бесшовного зацикливания
        if (prev <= -photoSetWidth) {
          return 0;
        }
        return prev - 2;
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

  // Обработчики для свайпа карусели фото
  const handlePhotoTouchStart = (e) => {
    setIsDraggingPhoto(true);
    setStartX(e.touches[0].clientX);
    setIsAutoScrollPaused(true);
    if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
  };

  const handlePhotoTouchMove = (e) => {
    if (!isDraggingPhoto) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setPhotoSlidePosition((prev) => prev + diff);
    setStartX(currentX);
  };

  const handlePhotoTouchEnd = () => {
    setIsDraggingPhoto(false);
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
            деятельность
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
          height: '16421px'
        }}
      >
      {/* Белый фон под всем сайтом - Mobile */}
      <div className="absolute bg-white h-[15371px] left-0 top-0 w-full z-0" data-node-id="52:324" />
      
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
      <div className="absolute bg-[#071a31] h-[1050px] left-0 top-[15371px] w-[781px] z-10" data-node-id="48:165" />
      {/* Логотип между формой и футером */}
      <div className="absolute left-[50%] translate-x-[-50%] top-[15181px] h-[120px] w-auto z-20">
        <img alt="AIA Logo" className="h-full w-auto object-contain" src={imgFooterLogoMobile} />
      </div>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] left-[135px] text-[#071a31] text-[50px] top-[1383px] translate-y-[-50%] w-[219px] z-10" data-node-id="48:169">
          <p className="leading-[normal]">О нас</p>
        </div>
      <div id="services" className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[3525px] translate-y-[-50%] w-[700px] z-10" data-node-id="48:170" style={{ left: "calc(50% - 255.5px)" }}>
          <p className="leading-[normal]">Направления деятельности</p>
      </div>
      <div id="current-projects" className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[5630px] translate-y-[-50%] w-[500px] z-10" data-node-id="48:170-new" style={{ left: "calc(50% - 255.5px)" }}>
          <p className="leading-[normal]">Текущие проекты</p>
        </div>
        
        {/* Текущие проекты - 3 карточки Mobile */}
        <div className="absolute bg-[#071a31] h-[420px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[5693px] w-[695px]" data-node-id="mobile-current-1" />
        <div className="absolute bg-[#071a31] h-[420px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[6155px] w-[695px]" data-node-id="mobile-current-2" />
        <div className="absolute bg-[#071a31] h-[420px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[6617px] w-[695px]" data-node-id="mobile-current-3" />
        
        <p className="absolute font-['Montserrat',sans-serif] font-bold h-[70px] leading-[normal] left-[135px] text-[#ffffff] text-[30px] top-[5720px] w-[527px]" data-node-id="mob-curr-1-title" style={{ color: '#ffffff' }}>
          Программа повышения квалификации по ИИ
        </p>
        <p className="absolute font-['Montserrat',sans-serif] font-thin h-[220px] leading-[normal] left-[135px] text-[#ffffff] text-[26px] top-[5805px] w-[527px]" data-node-id="mob-curr-1-desc" style={{ color: '#ffffff' }}>
          Практический курс «Искусственный интеллект: внедрение и управление» для руководителей и специалистов. Обучаем запускать ИИ-проекты с нуля.
        </p>
        <a
          href="https://neirolab-ai.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[135px] top-[6035px] w-[250px] h-[40px] bg-[#071a31] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] z-[9999] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center"
          style={{ textDecoration: 'none' }}
        >
          <p className="font-['Montserrat',sans-serif] text-[18px] text-[#ffffff] leading-[normal]" style={{ fontWeight: 300 }}>
            Перейти на сайт →
          </p>
        </a>
        
        <p className="absolute font-['Montserrat',sans-serif] font-bold h-[70px] leading-[normal] left-[135px] text-[#ffffff] text-[30px] top-[6182px] w-[527px]" data-node-id="mob-curr-2-title" style={{ color: '#ffffff' }}>
          Платформа цифрового бессмертия
        </p>
        <p className="absolute font-['Montserrat',sans-serif] font-thin h-[220px] leading-[normal] left-[135px] text-[#ffffff] text-[26px] top-[6267px] w-[527px]" data-node-id="mob-curr-2-desc" style={{ color: '#ffffff' }}>
          Инновационный проект по созданию цифровых копий личности. Сохранение памяти, опыта и знаний человека с помощью технологий ИИ.
        </p>
        <a
          href="https://virperson.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[135px] top-[6497px] w-[250px] h-[40px] bg-[#071a31] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] z-[9999] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center"
          style={{ textDecoration: 'none' }}
        >
          <p className="font-['Montserrat',sans-serif] text-[18px] text-[#ffffff] leading-[normal]" style={{ fontWeight: 300 }}>
            Перейти на сайт →
          </p>
        </a>
        
        <p className="absolute font-['Montserrat',sans-serif] font-bold h-[90px] leading-[normal] left-[135px] text-[#ffffff] text-[30px] top-[6644px] w-[527px]" data-node-id="mob-curr-3-title" style={{ color: '#ffffff' }}>
          Центр дополнительного энергетического образования
        </p>
        <p className="absolute font-['Montserrat',sans-serif] font-thin h-[200px] leading-[normal] left-[135px] text-[#ffffff] text-[26px] top-[6749px] w-[527px]" data-node-id="mob-curr-3-desc" style={{ color: '#ffffff' }}>
          Образовательная платформа для специалистов энергетической отрасли. Комплексные программы обучения и повышения квалификации.
        </p>
        <a
          href="http://цдэс.рф/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[135px] top-[6959px] w-[250px] h-[40px] bg-[#071a31] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] z-[9999] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center"
          style={{ textDecoration: 'none' }}
        >
          <p className="font-['Montserrat',sans-serif] text-[18px] text-[#ffffff] leading-[normal]" style={{ fontWeight: 300 }}>
            Перейти на сайт →
          </p>
        </a>
      
      <div id="projects" className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[7300px] translate-y-[-50%] w-[468px] z-10" data-node-id="48:171" style={{ left: "calc(50% - 255.5px)" }}>
          <p className="leading-[normal]">Успешные кейсы</p>
        </div>
        {/* Новый кейс: Модель прогнозирования пиковой нагрузки - Mobile */}
        <div className="absolute h-[180px] left-[478px] top-[7370px] w-[250px] z-10" data-name="forecast-model-mobile" data-node-id="forecast-model-mobile">
          <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject5} />
        </div>
        <p className="absolute font-['Montserrat',sans-serif] leading-[normal] left-[135px] text-[#071a31] text-[34px] top-[7530px] w-[527px] z-10" style={{ fontWeight: 100 }} data-node-id="forecast-model-title-mobile">
          Модель прогнозирования пиковой нагрузки
        </p>
        <p className="absolute font-['Montserrat',sans-serif] font-thin leading-[normal] left-[135px] text-[#071a31] text-[31px] top-[7640px] w-[527px] z-10" data-node-id="forecast-model-desc-mobile">
          Модель предназначена для среднесрочного и краткосрочного прогнозирования пиковой нагрузки в рабочие дни расчетного периода. Она определяет объем фактического пикового потребления гарантирующего поставщика на основе плановых часов, установленных системным оператором. Модель включает математическое, методологическое и программное обеспечение для оптимизации работы компонентов системы управления электроэнергетической гибкостью.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[159px] leading-[normal] text-[#071a31] text-[50px] top-[12125px] w-[603px] z-10" data-node-id="48:172" style={{ left: "calc(50% - 264.5px)" }}>
          Лицензии и Сертификаты
        </p>
      <div id="team" className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[119px] justify-center leading-[0] text-[#071a31] text-[50px] top-[13127px] translate-y-[-50%] w-[603px]" data-node-id="48:173" style={{ left: "calc(50% - 264.5px)" }}>
          <p className="leading-[normal]">Наша команда</p>
        </div>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[87px] leading-[59px] text-[#ffffff] text-[50px] top-[15450px] w-[625px] z-20" data-node-id="48:176" style={{ left: "calc(50% - 261.5px)", color: '#ffffff' }}>
          +7 (915) 085-95-94
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[108px] leading-[59px] text-[#ffffff] text-[50px] top-[15700px] w-[575px] z-20" data-node-id="48:177" style={{ left: "calc(50% - 264.5px)", color: '#ffffff' }}>
          in@aiagency.ru
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#ffffff] text-[30px] top-[15640px] w-[317px] z-20" data-node-id="48:180" style={{ left: "calc(50% - 258.5px)", color: '#ffffff' }}>
          электронная почта
        </p>
        <div className="absolute font-['Montserrat',sans-serif] font-thin h-[1016px] leading-[normal] left-[135px] text-[#071a31] text-[30px] top-[1406px] w-[582px]" data-node-id="48:181">
          <p className="mb-0">ведущая консалтинговая компания в области искусственного интеллекта, которая помогает крупному бизнесу извлекать реальную прибыль из ИИ-технологий.</p>
          <p className="mb-0">Мы специализируемся на трех ключевых направлениях: корпоративном обучении искусственному интеллекту, разработке интеллектуальных решений под конкретные бизнес-задачи и стратегическом консалтинге по цифровой трансформации.</p>
          <p>Наша команда объединяет кандидатов наук, выпускников Сколково и признанных экспертов отрасли с многолетним практическим опытом. Мы не только знаем теорию ИИ, но и понимаем, как применить эти знания для роста эффективности и прибыльности бизнеса.</p>
          <p>АИИ приняло участие в разработке:<br/>• стратегии развития ИИ в казахстане<br/>• стратегии развития ИИ в россии<br/>• концепции smart aqkol<br/>• перспективной программе по стандартизации на 2023 год<br/>• кодекса этики разработчиков ИИ<br/>• 14 гостов "ИИ на автомобильном транспорте"</p>
        </div>
      <div className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute flex flex-col font-['Montserrat',sans-serif] font-bold h-[177px] justify-center leading-[0] left-[92px] text-[#f0f4f7] text-[50px] top-[650px] w-[433px] z-20" data-node-id="48:185" style={{ color: '#f0f4f7' }}>
          <p className="leading-[44px]">Агентство Искусственного Интеллекта</p>
        </div>
      <p className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute font-['Montserrat',sans-serif] font-thin h-[108px] leading-[42px] left-[101px] text-[#f0f4f7] text-[36px] top-[800px] w-[589px] z-20" data-node-id="48:186" style={{ color: '#f0f4f7' }}>
          эксперты по обучению и внедрению ИИ-технологий
        </p>
      {/* Кнопка "связаться с нами" - поверх всех слоёв hero */}
      <a
        href="mailto:in@aiagency.ru?subject=Запрос на консультацию по ИИ&body=Здравствуйте!%0A%0AИнтересуют ваши услуги в области искусственного интеллекта.%0A%0AПожалуйста, расскажите подробнее о ваших решениях."
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          console.log('Кнопка "связаться с нами" нажата в мобильной версии');

          // Показываем контакты сразу - самый надежный способ
          const contactInfo = `Наши контакты:

📧 Email: in@aiagency.ru
📱 Телефон: +7 (915) 085-95-94

Нажмите Ctrl+C (Cmd+C на Mac) чтобы скопировать контакты и свяжитесь с нами удобным способом!`;

          // Копируем email в буфер обмена
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('in@aiagency.ru').then(() => {
              alert('Email скопирован в буфер обмена!\n\n📧 in@aiagency.ru\n📱 +7 (915) 085-95-94');
            }).catch(() => {
              alert(contactInfo);
            });
          } else {
            alert(contactInfo);
          }

          e.preventDefault();
        }}
        className="absolute left-[50%] translate-x-[-50%] top-[1074px] w-[713px] h-[90px] bg-[#071a31] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] z-[9999] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center"
        style={{ textDecoration: 'none' }}
        data-node-id="48:187"
      >
        <p className="font-['Montserrat',sans-serif] font-thin text-[40px] text-[#ffffff] leading-[normal]" data-node-id="48:189" style={{ color: '#ffffff' }}>
          связаться с нами
        </p>
      </a>
        <div className="absolute bg-[#071a31] h-[580px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[3609px] w-[695px]" data-node-id="48:190" />
        <div className="absolute bg-[#071a31] h-[609px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[4223px] w-[695px]" data-node-id="52:325" />
        <div className="absolute bg-[#071a31] h-[580px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[4876px] w-[695px]" data-node-id="52:328" />
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[293px] leading-[normal] left-[135px] text-[#ffffff] text-[31px] top-[3790px] w-[527px]" data-node-id="48:193" style={{ color: '#ffffff' }}>
          Обучаем топ-менеджеров и специалистов компаний практическому применению ИИ в их отраслях. От базовых принципов до конкретных инструментов для роста бизнеса.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[293px] leading-[normal] left-[135px] text-[#ffffff] text-[31px] top-[4404px] w-[527px]" data-node-id="52:326" style={{ color: '#ffffff' }}>
        Разрабатываем дорожную карту цифровой трансформации с конкретными KPI и сроками окупаемости. Помогаем выбрать приоритетные направления и избежать дорогостоящих ошибок.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[293px] leading-[normal] left-[135px] text-[#ffffff] text-[31px] top-[5057px] w-[527px]" data-node-id="52:329" style={{ color: '#ffffff' }}>
          Создаем интеллектуальных агентов и системы автоматизации под конкретные задачи вашего бизнеса. От ассистентов делопроизводства до уникальных инновационных разработок.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-[#ffffff] text-[34px] top-[3657px] w-[527px]" data-node-id="48:196" style={{ color: '#ffffff' }}>
          Корпоративное обучение искусственному интеллекту
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-[#ffffff] text-[34px] top-[4271px] w-[527px]" data-node-id="52:327" style={{ color: '#ffffff' }}>
          Стратегия внедрения ИИ
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-[#ffffff] text-[34px] top-[4924px] w-[527px]" data-node-id="52:330" style={{ color: '#ffffff' }}>
          Разработка ИИ-решений
        </p>
      
      {/* Контейнер карусели статистики */}
      <div className="absolute left-0 top-[2770px] w-[781px] h-[450px] z-20 overflow-hidden">
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
      <div className="absolute h-[213px] left-[478px] top-[8430px] w-[303px]" data-name="Gazprom-01 1" data-node-id="48:217">
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject1} />
        </div>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[426px] leading-[normal] left-[135px] text-[#071a31] text-[31px] top-[8757px] w-[603px]" data-node-id="48:218">
          Разработали и провели образовательную программу по применению искусственного интеллекта в нефтегазовой индустрии. Обучили 50+ топ-менеджеров компании практическому использованию ИИ-технологий для оптимизации бизнес-процессов.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[388px] leading-[normal] left-[135px] text-[#071a31] text-[31px] top-[9568px] w-[603px]" data-node-id="48:219">
          Внедрили интеллектуальную систему для оптимизации производственных процессов и прогнозирования потребности в запчастях. Решение помогает повысить эффективность производства и снизить простои.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[388px] leading-[normal] left-[126px] text-[#071a31] text-[31px] top-[10250px] w-[603px]" data-node-id="53:331">
          Принимаем активное участие в работе платформы по внедрению инноваций и развитию кооперации. Взаимодействуем с крупными корпорациями, МСП, образовательными и научными организациями.
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[388px] leading-[normal] left-[126px] text-[#071a31] text-[31px] top-[10915px] w-[603px]" data-node-id="53:333">
          Совместно с Росстандартом разработали 15 государственных стандартов в области искусственного интеллекта, заложив нормативную основу для развития ИИ-технологий в России.
        </p>
      {/* Новый кейс: Первый в мире ресторан с ИИ — She - Mobile */}
      <div className="absolute h-[180px] left-[478px] top-[11265px] w-[250px] z-10" data-name="she-restaurant-mobile" data-node-id="she-restaurant-mobile">
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject6} />
      </div>
      <p className="absolute font-['Montserrat',sans-serif] leading-[normal] left-[135px] text-[#071a31] text-[34px] top-[11430px] w-[527px] z-10" style={{ fontWeight: 100 }} data-node-id="she-restaurant-title-mobile">
        Первый в мире ресторан с ИИ — She
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin leading-[normal] left-[135px] text-[#071a31] text-[31px] top-[11550px] w-[527px] z-10" data-node-id="she-restaurant-desc-mobile">
        Мы создали ИИ-систему для генерации блюд в первом в мире ресторане с искусственным интеллектом — «SHE», где каждое блюдо формируется на основе совместимости ингредиентов из технологических карт. Внедрение системы в 2020 году увеличило медиа-присутствие ресторана и привлекло новые целевые аудитории.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[503px] leading-[normal] left-[126px] text-[#071a31] text-[31px] top-[12586px] w-[603px]" data-node-id="48:222">
        Лицензия на образовательную деятельность    Регистрационный номер: Л035-01298-77/01264001   Выдана: Департаментом образования и науки города Москвы   Дата: 24 июня 2024 года   Статус: действующая - Право на дополнительное профессиональное образование.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[184px] leading-[normal] left-[135px] text-[#071a31] text-[34px] top-[8603px] w-[453px]" data-node-id="48:223">
          Корпоративное обучение ИИ для нефтегазовой отрасли
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[209px] leading-[normal] left-[135px] text-[#071a31] text-[34px] top-[9419px] w-[453px]" data-node-id="48:224">
          ИИ-система для производственной оптимизации
        </p>
      <div className="absolute h-[180px] left-[478px] top-[9950px] w-[250px] z-10" data-name="MIKL-01 1" data-node-id="28:126">
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject3} />
      </div>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[209px] leading-[normal] left-[126px] text-[#071a31] text-[34px] top-[10145px] w-[453px]" data-node-id="53:332">
          Участие в платформе МИК
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[209px] leading-[normal] left-[126px] text-[#071a31] text-[34px] top-[10766px] w-[453px]" data-node-id="53:334">
          Разработка государственных стандартов ИИ
        </p>
      <p className="absolute font-['Montserrat',sans-serif] font-medium h-[136px] leading-[normal] left-[126px] text-[#071a31] text-[34px] top-[12338px] w-[449px]" data-node-id="48:227">
          Наша образовательная деятельность официально лицензирована:
        </p>
      <div className="absolute h-[199px] left-[488px] top-[9204px] w-[283px]" data-name="Kamaz-01 1" data-node-id="48:228">
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject2} />
      </div>
      <div className="absolute h-[121px] left-[576px] top-[10650px] w-[108px]" data-name="rosstandart-seeklogo 1" data-node-id="48:229">
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject4} />
      </div>
      <div className="absolute font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] left-[135px] text-[#071a31] text-[50px] top-[3062px] translate-y-[-50%] w-[683px]" data-node-id="49:323">
        <p className="leading-[normal]">Наши клиенты</p>
      </div>
      
      {/* Слайдер партнеров - Мобильная версия */}
      <div
        className="absolute left-0 top-[3170px] w-[781px] h-[200px] overflow-hidden z-[100]"
        style={{ touchAction: 'pan-x' }}
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
      
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[324px] leading-[59px] text-[#ffffff] text-[30px] top-[15950px] w-[569px] z-20" data-node-id="48:175" style={{ left: "calc(50% - 261.5px)", color: '#ffffff' }}>
        119049, РФ, г. Москва, ул. Дубнинская, д. 75Б, стр. 2
      </p>
      <div className="absolute bg-[#071a31] h-[785px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[12180px] w-[51px]" style={{ borderRadius: '0 19px 19px 0' }} data-node-id="48:166" />
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#ffffff] text-[30px] top-[15870px] w-[205px] z-20" data-node-id="48:179" style={{ left: "calc(50% - 258.5px)", color: '#ffffff' }}>
        адрес
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#ffffff] text-[30px] top-[15400px] w-[205px] z-20" data-node-id="48:178" style={{ left: "calc(50% - 261.5px)", color: '#ffffff' }}>
        телефон
      </p>
      <p className="absolute font-['Montserrat',sans-serif] font-bold h-[71px] leading-[59px] text-[#ffffff] text-[30px] top-[16200px] w-[205px] z-20" data-node-id="55:49" style={{ left: "calc(50% - 261.5px)", color: '#ffffff' }}>
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
        className="absolute h-[1035px] left-0 top-[13230px] w-full overflow-hidden z-[100]"
        style={{ touchAction: 'pan-x' }}
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
                width: '3500px'
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

      {/* Раздел ФОТО - Mobile */}
      <div id="photo" className="absolute flex flex-col font-['Montserrat',sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[14350px] translate-y-[-50%] w-[603px]" data-node-id="photo-title-mobile" style={{ left: "calc(50% - 264.5px)" }}>
        <p className="leading-[normal]">Фото</p>
      </div>

      {/* Слайдер фотографий - Mobile */}
      <div
        className="absolute left-0 top-[14430px] w-[781px] h-[600px] overflow-hidden z-[100]"
        style={{ touchAction: 'pan-x' }}
        onTouchStart={handlePhotoTouchStart}
        onTouchMove={handlePhotoTouchMove}
        onTouchEnd={handlePhotoTouchEnd}
      >
        <div
          className="flex items-center gap-[5px] h-full"
          style={{
            transform: `translateX(${photoSlidePosition}px)`,
            transition: 'none'
          }}
        >
          {/* Дублируем массив фото для бесконечного эффекта */}
          {[...photoImages, ...photoImages, ...photoImages].map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                height: '600px',
                width: 'auto'
              }}
            >
              <img
                src={photo}
                alt={`Фото ${index + 1}`}
                className="h-full w-auto object-cover pointer-events-none"
                style={{
                  height: '600px',
                  width: 'auto'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
}
