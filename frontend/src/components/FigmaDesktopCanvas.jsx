import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imgAiaLogo from '/assets/AIA logo.png';
import imgFooterLogo from '/assets/logo-footer.png';
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

export default function FigmaDesktopCanvas() {
  const [scale, setScale] = useState(Math.min(window.innerWidth / 1920, 1));
  const [partnerSlidePosition, setPartnerSlidePosition] = useState(0);
  const [teamSlidePosition, setTeamSlidePosition] = useState(0);
  
  // Состояния для перетаскивания мышью
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

  // Автоматическое движение слайдера партнеров слева направо
  useEffect(() => {
    if (isAutoScrollPaused) return;
    
    const interval = setInterval(() => {
      setPartnerSlidePosition((prev) => {
        // Рассчитываем общую ширину одного набора партнеров (7 партнеров * ~230px ширина с gap)
        const partnerSetWidth = partners.length * 230;
        
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

  // Обработчики для перетаскивания карусели партнеров мышью
  const handlePartnersMouseDown = (e) => {
    setIsDraggingPartners(true);
    setStartX(e.clientX);
    setIsAutoScrollPaused(true);
    if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
    e.preventDefault(); // Предотвращаем выделение текста
  };

  const handlePartnersMouseMove = (e) => {
    if (!isDraggingPartners) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setPartnerSlidePosition((prev) => prev + diff);
    setStartX(currentX);
  };

  const handlePartnersMouseUp = () => {
    setIsDraggingPartners(false);
    // Возобновляем автопрокрутку через 2 секунды
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 2000);
  };

  // Обработчики для перетаскивания карусели команды мышью
  const handleTeamMouseDown = (e) => {
    setIsDraggingTeam(true);
    setStartX(e.clientX);
    setIsAutoScrollPaused(true);
    if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
    e.preventDefault();
  };

  const handleTeamMouseMove = (e) => {
    if (!isDraggingTeam) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTeamSlidePosition((prev) => prev + diff);
    setStartX(currentX);
  };

  const handleTeamMouseUp = () => {
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
  };

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
      
      {/* Header (шапка сайта) - фиксированная */}
      <div className="fixed bg-[#071a31] h-[76px] top-0 w-full left-1/2 -translate-x-1/2 max-w-[1920px] z-[100]" data-node-id="1:5" />
      {/* Логотип в шапке */}
      <div className="fixed h-[41px] top-[17.5px] w-[63px] z-[110] left-1/2" data-name="HEAD_NEW_55-01_1x" data-node-id="1:4" style={{ aspectRatio: '63/41', marginLeft: 'calc(-960px + 415px)' }}>
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgAiaLogo} />
      </div>
      <div className="absolute bg-[#071a31] h-[385px] left-0 shadow-[9px_9px_16px_-1px_rgba(0,0,0,0.25)] top-[9550px] w-[1920px] z-10" data-node-id="21:109" />
      {/* Логотип в футере */}
      <div className="absolute left-[150px] top-[9630px] h-[75px] w-auto z-20">
        <img alt="AIA Logo" className="h-full w-auto object-contain" src={imgFooterLogo} />
      </div>
      <div className="absolute bg-[#071a31] h-[416px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6457px] w-[288px] z-10 flex-shrink-0" style={{ borderRadius: '0 19px 19px 0' }} data-node-id="40:135" />
      <div 
        className="fixed flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[20px] text-center text-[#ffffff] top-[38px] translate-x-[-50%] translate-y-[-50%] w-[123px] z-[110] cursor-pointer hover:opacity-80 transition-opacity left-1/2" 
        data-node-id="14:57" 
        style={{ color: '#ffffff', fontWeight: 100, marginLeft: 'calc(-960px + 1300px)' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="leading-[normal]">о нас</p>
      </div>
      <div id="about" className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] left-[411px] text-[#071a31] text-[50px] top-[1241px] translate-y-[-50%] w-[219px] z-10" style={{ fontWeight: 100, scrollMarginTop: '100px' }} data-node-id="14:71">
        <p className="leading-[normal]">О нас</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] left-[411px] text-[#071a31] text-[50px] top-[2487px] translate-y-[-50%] w-[683px] z-10" style={{ fontWeight: 100 }} data-node-id="49:276">
        <p className="leading-[normal]">Наши партнёры</p>
      </div>
      
      {/* Слайдер партнеров */}
      <div 
        className="absolute left-0 top-[2620px] w-[1920px] h-[250px] overflow-hidden z-20 cursor-grab active:cursor-grabbing"
        onMouseDown={handlePartnersMouseDown}
        onMouseMove={handlePartnersMouseMove}
        onMouseUp={handlePartnersMouseUp}
        onMouseLeave={handlePartnersMouseUp}
      >
        <div 
          className="flex items-center gap-[80px] h-full"
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
                height: '150px',
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
                  height: '150px',
                  width: 'auto'
                }}
                onLoad={(e) => {
                  // Сброс позиции для бесконечного эффекта
                  const totalWidth = partners.length * (150 + 80); // примерная ширина + gap
                  if (partnerSlidePosition < -totalWidth) {
                    setPartnerSlidePosition(0);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div id="services" className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[2972px] translate-y-[-50%] w-[468px] z-10" data-node-id="14:73" style={{ left: "calc(50% - 549px)", fontWeight: 100, scrollMarginTop: '100px' }}>
        <p className="leading-[normal]">Наши услуги</p>
      </div>
      <div id="projects" className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[4536px] translate-y-[-50%] w-[468px] z-10" data-node-id="27:120" style={{ left: "calc(50% - 554px)", fontWeight: 100, scrollMarginTop: '100px' }}>
        <p className="leading-[normal]">Наши проекты</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[6298px] translate-y-[-50%] w-[789px] z-10" data-node-id="40:132" style={{ left: "calc(50% - 542px)", fontWeight: 100 }}>
        <p className="leading-[normal]">Лицензии и Сертификаты</p>
      </div>
      <div id="team" className="absolute flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[7105px] translate-y-[-50%] w-[789px] z-10" data-node-id="40:136" style={{ left: "calc(50% - 542px)", fontWeight: 100, scrollMarginTop: '100px' }}>
        <p className="leading-[normal]">Наша команда</p>
      </div>
      <div id="contact" className="absolute flex flex-col font-['Montserrat',sans-serif] h-[184px] justify-center leading-[0] text-[#071a31] text-[40px] top-[8458px] translate-y-[-50%] w-[1026px] z-10" data-node-id="20:99" style={{ left: "calc(50% - 542px)", fontWeight: 100, scrollMarginTop: '100px' }}>
        <p className="leading-[normal]">Напишите нам, и мы найдем оптимальное ИИ-решение для вашего бизнеса</p>
      </div>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[39px] text-[20px] text-[#ffffff] top-[9600px] w-[815px] z-20" data-node-id="21:111" style={{ left: "calc(50% - 186px)", color: '#ffffff', fontWeight: 100 }}>
        119049, РФ, г. Москва, ул. Дубнинская, д. 75Б, стр. 2
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[39px] text-[20px] text-[#ffffff] top-[9656px] w-[815px] z-20" data-node-id="21:117" style={{ left: "calc(50% - 186px)", color: '#ffffff', fontWeight: 100 }}>
        +7 (495) 123-47-05
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[39px] text-[20px] text-[#ffffff] top-[9712px] w-[815px] z-20" data-node-id="21:118" style={{ left: "calc(50% - 186px)", color: '#ffffff', fontWeight: 100 }}>
        in@aiagency.ru
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[39px] text-[20px] text-[#ffffff] top-[9656px] w-[205px] z-20" data-node-id="21:114" style={{ left: "calc(50% - 544px)", color: '#ffffff', fontWeight: 600 }}>
        телефон
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[39px] text-[20px] text-[#ffffff] top-[9600px] w-[205px] z-20" data-node-id="21:116" style={{ left: "calc(50% - 544px)", color: '#ffffff', fontWeight: 600 }}>
        адрес
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[71px] leading-[39px] text-[20px] text-[#ffffff] top-[9712px] w-[317px] z-20" data-node-id="21:115" style={{ left: "calc(50% - 544px)", color: '#ffffff', fontWeight: 600 }}>
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
        className="fixed flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[20px] text-center text-[#ffffff] top-[38px] translate-x-[-50%] translate-y-[-50%] w-[123px] z-[110] cursor-pointer hover:opacity-80 transition-opacity left-1/2" 
        data-node-id="14:62" 
        style={{ color: '#ffffff', fontWeight: 100, marginLeft: 'calc(-960px + 1420px)' }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="leading-[normal]">услуги</p>
      </div>
      <div 
        className="fixed flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[20px] text-center text-[#ffffff] top-[38px] translate-x-[-50%] translate-y-[-50%] w-[123px] z-[110] cursor-pointer hover:opacity-80 transition-opacity left-1/2" 
        data-node-id="14:63" 
        style={{ color: '#ffffff', fontWeight: 100, marginLeft: 'calc(-960px + 1540px)' }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="leading-[normal]">проекты</p>
      </div>
      <div 
        className="fixed flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[20px] text-center text-[#ffffff] top-[38px] translate-x-[-50%] translate-y-[-50%] w-[123px] z-[110] cursor-pointer hover:opacity-80 transition-opacity left-1/2" 
        data-node-id="14:65" 
        style={{ color: '#ffffff', fontWeight: 100, marginLeft: 'calc(-960px + 1660px)' }}
        onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="leading-[normal]">команда</p>
      </div>
      <div 
        className="fixed flex flex-col font-['Montserrat',sans-serif] h-[46px] justify-center leading-[0] text-[20px] text-center text-[#ffffff] top-[38px] translate-x-[-50%] translate-y-[-50%] w-[123px] z-[110] cursor-pointer hover:opacity-80 transition-opacity left-1/2" 
        data-node-id="14:64" 
        style={{ color: '#ffffff', fontWeight: 100, marginLeft: 'calc(-960px + 1780px)' }}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
        className="absolute left-[425px] top-[706px] w-[337px] h-[70px] bg-[#071a31] rounded-[22px] shadow-[7px_8px_15px_-6px_#12151F] z-[110] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center"
        data-node-id="14:70"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="font-['Montserrat',sans-serif] font-medium text-[20px] text-[#ffffff] leading-[normal]" data-node-id="14:69" style={{ color: '#ffffff' }}>
          связаться с нами
        </p>
      </div>
      {/* Карточки услуг */}
      <div className="absolute bg-[#071a31] h-[369px] left-[332px] rounded-[22px] shadow-[9px_9px_20px_-4px_rgba(30,30,30,0.52)] top-[3050px] w-[1256px] z-20" data-node-id="20:89" />
      <div className="absolute bg-[#071a31] h-[369px] left-[332px] rounded-[22px] shadow-[9px_9px_20px_-4px_rgba(30,30,30,0.52)] top-[3457px] w-[1256px] z-20" data-node-id="20:92" />
      <div className="absolute bg-[#071a31] h-[369px] left-[332px] rounded-[22px] shadow-[9px_9px_20px_-4px_rgba(30,30,30,0.52)] top-[3864px] w-[1256px] z-20" data-node-id="20:95" />
      {/* Тексты на карточках услуг */}
      <p className="absolute font-['Montserrat',sans-serif] h-[141px] leading-[normal] left-[417px] text-[31px] text-[#ffffff] top-[3208px] w-[1098px] z-30" style={{ color: '#ffffff', fontWeight: 100 }} data-node-id="20:90">
        Обучаем топ-менеджеров и специалистов компаний практическому применению ИИ в их отраслях. От базовых принципов до конкретных инструментов для роста бизнеса.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[141px] leading-[normal] left-[417px] text-[31px] text-[#ffffff] top-[3615px] w-[1098px] z-30" style={{ color: '#ffffff', fontWeight: 100 }} data-node-id="20:93">
        Разрабатываем дорожную карту цифровой трансформации с конкретными KPI и сроками окупаемости. Помогаем выбрать приоритетные направления и избежать дорогостоящих ошибок.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[141px] leading-[normal] left-[417px] text-[31px] text-[#ffffff] top-[4022px] w-[1098px] z-30" style={{ color: '#ffffff', fontWeight: 100 }} data-node-id="20:96">
        Создаем интеллектуальных агентов и системы автоматизации под конкретные задачи вашего бизнеса. От ассистентов делопроизводства до уникальных инновационных разработок.
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[95px] leading-[normal] left-[417px] text-[34px] text-[#ffffff] top-[3090px] w-[735px] z-30" style={{ color: '#ffffff', fontWeight: 600 }} data-node-id="20:91">
        Корпоративное обучение искусственному интеллекту
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[95px] leading-[normal] left-[417px] text-[34px] text-[#ffffff] top-[3497px] w-[735px] z-30" style={{ color: '#ffffff', fontWeight: 600 }} data-node-id="20:94">
        Стратегия внедрения ИИ
      </p>
      <p className="absolute font-['Montserrat',sans-serif] h-[95px] leading-[normal] left-[417px] text-[34px] text-[#ffffff] top-[3904px] w-[735px] z-30" style={{ color: '#ffffff', fontWeight: 600 }} data-node-id="20:97">
        Разработка ИИ-решений
      </p>
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
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject1} />
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
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject2} />
      </div>
      {/* Проект 3: АВТОВАЗ */}
      <div className="absolute h-[315px] left-[277px] top-[5400px] w-[448px] z-10" data-name="Avtovaz-01 1" data-node-id="28:126">
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject3} />
      </div>
      <div className="absolute h-[199px] left-[406px] top-[5829px] w-[177px] z-10" data-name="rosstandart-seeklogo 1" data-node-id="29:129">
        <img alt="" className="absolute inset-0 max-w-none object-center object-contain pointer-events-none size-full" src={imgProject4} />
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
      <p className="absolute font-['Montserrat',sans-serif] font-thin h-[52px] leading-[39px] text-[20px] text-[#ffffff] top-[9844px] w-[500px] z-20" data-node-id="55:117" style={{ left: "calc(50% - 544px)" }}>
        © 2025 | {' '}
        <Link 
          to="/privacy-policy" 
          className="underline hover:text-[#ffffff] transition-colors"
          style={{ color: '#ffffff' }}
        >
          Политика конфиденциальности
        </Link>
      </p>
      {/* z-60: Карусель команды */}
      <div 
        className="absolute h-[1035px] left-0 top-[7208px] w-[1920px] overflow-hidden z-60 cursor-grab active:cursor-grabbing"
        onMouseDown={handleTeamMouseDown}
        onMouseMove={handleTeamMouseMove}
        onMouseUp={handleTeamMouseUp}
        onMouseLeave={handleTeamMouseUp}
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
      </div>
    </div>
  );
}
