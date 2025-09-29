import React, { useState, useEffect, useRef } from 'react';
import img202509252153071 from '/assets/cab7bf3fad593347fd74e53def4f268e06bccac1.png';
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
      <div className="relative w-[781px] h-[14177px]" data-name="mobile" data-node-id="48:160" style={{ 
        zoom: scale
      }}>
      <div className="absolute bg-white h-[12024px] left-0 top-[1270px] w-full z-0" data-node-id="52:324" />
      <div className="absolute blur-[15.05px] filter h-[1001px] left-0 rounded-[5px] top-[269px] w-[781px] overflow-hidden z-10" data-name="Снимок экрана 2025-09-25 в 21.53.07 1" data-node-id="48:163">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
          <img alt="" className="absolute h-[148.81%] left-[-8.51%] max-w-none top-[-8.24%] w-[137.5%]" src={img202509252153071} />
          </div>
        </div>
        <div className="absolute h-[169px] left-[480px] top-[7297px] w-[300px]" data-name="avtovaz 1" data-node-id="48:162">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgAvtovaz1} />
        </div>
      <div className="absolute bg-[#071a31] h-[923px] left-0 top-[13254px] w-[781px] z-10" data-node-id="48:165" />
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] left-[135px] text-[#071a31] text-[50px] top-[1383px] translate-y-[-50%] w-[219px] z-10" data-node-id="48:169">
          <p className="leading-[normal]">О нас</p>
        </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[3455px] translate-y-[-50%] w-[468px] z-10" data-node-id="48:170" style={{ left: "calc(50% - 255.5px)" }}>
          <p className="leading-[normal]">Наши услуги</p>
        </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[5638px] translate-y-[-50%] w-[468px] z-10" data-node-id="48:171" style={{ left: "calc(50% - 255.5px)" }}>
          <p className="leading-[normal]">Наши проекты</p>
        </div>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[159px] leading-[normal] text-[#071a31] text-[50px] top-[8745px] w-[603px] z-10" data-node-id="48:172" style={{ left: "calc(50% - 264.5px)" }}>
          Лицензии и Сертификаты
        </p>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[119px] justify-center leading-[0] text-[#071a31] text-[50px] top-[10047px] translate-y-[-50%] w-[603px]" data-node-id="48:173" style={{ left: "calc(50% - 264.5px)" }}>
          <p className="leading-[normal]">Наша команда</p>
        </div>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[223px] leading-[normal] text-[#071a31] text-[40px] top-[11415px] w-[560px]" data-node-id="48:174" style={{ left: "calc(50% - 264.5px)" }}>
          Напишите нам, и мы найдем оптимальное ИИ-решение для вашего бизнеса
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[87px] leading-[59px] text-white text-[50px] top-[13413px] w-[625px]" data-node-id="48:176" style={{ left: "calc(50% - 261.5px)", color: 'white' }}>
          +7 (495) 123-47-05
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[108px] leading-[59px] text-white text-[50px] top-[13605px] w-[575px]" data-node-id="48:177" style={{ left: "calc(50% - 264.5px)", color: 'white' }}>
          in@aiagency.ru
        </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[71px] leading-[59px] text-white text-[30px] top-[13534px] w-[317px]" data-node-id="48:180" style={{ left: "calc(50% - 258.5px)", color: 'white' }}>
          электронная почта
        </p>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[1016px] leading-[normal] left-[135px] text-[#071a31] text-[30px] top-[1506px] w-[582px]" data-node-id="48:181">
          <p className="mb-0">ведущая консалтинговая компания в области искусственного интеллекта, которая помогает крупному бизнесу извлекать реальную прибыль из ИИ-технологий.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Мы специализируемся на трех ключевых направлениях: корпоративном обучении искусственному интеллекту, разработке интеллектуальных решений под конкретные бизнес-задачи и стратегическом консалтинге по цифровой трансформации.</p>
          <p className="mb-0">&nbsp;</p>
          <p>Наша команда объединяет кандидатов наук, выпускников Сколково и признанных экспертов отрасли с многолетним практическим опытом. Мы не только знаем теорию ИИ, но и понимаем, как применить эти знания для роста эффективности и прибыльности бизнеса.</p>
        </div>
      <div className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute flex flex-col font-['Montserrat:SemiBold',_sans-serif] font-semibold h-[177px] justify-center leading-[0] left-[92px] text-white text-[50px] top-[438px] w-[433px] z-20" data-node-id="48:185" style={{ color: 'white' }}>
          <p className="leading-[44px]">Агентство Искусственного Интеллекта</p>
        </div>
      <p className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[108px] leading-[42px] left-[101px] text-white text-[36px] top-[615px] w-[589px] z-20" data-node-id="48:186" style={{ color: 'white' }}>
          эксперты по обучению и внедрению ИИ-технологий
        </p>
      <div className="absolute contents left-[39px] top-[1074px]" data-node-id="48:187">
          <div className="absolute bg-[#071a31] h-[90px] left-[39px] rounded-[22px] shadow-[9px_9px_16px_-1px_#1e1e1e] top-[1074px] w-[713px]" data-node-id="48:188" />
        <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[46px] justify-center leading-[0] left-[196.0889892578125px] text-white text-[40px] top-[1096px] translate-x-[-50%] translate-y-[-50%] w-[398.82196044921875px]" data-node-id="48:189" style={{ color: 'white' }}>
            <p className="leading-[normal]">связаться с нами</p>
          </div>
        </div>
        <div className="absolute bg-[#071a31] h-[580px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[3579px] w-[695px]" data-node-id="48:190" />
        <div className="absolute bg-[#071a31] h-[609px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[4193px] w-[695px]" data-node-id="52:325" />
        <div className="absolute bg-[#071a31] h-[580px] left-[43px] rounded-[14px] shadow-[9px_9px_16px_-4px_rgba(30,30,30,0.55)] top-[4846px] w-[695px]" data-node-id="52:328" />
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[293px] leading-[normal] left-[135px] text-white text-[31px] top-[3804px] w-[527px]" data-node-id="48:193" style={{ color: 'white' }}>
          Обучаем топ-менеджеров и специалистов компаний практическому применению ИИ в их отраслях. От базовых принципов до конкретных инструментов для роста бизнеса.
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[293px] leading-[normal] left-[135px] text-white text-[31px] top-[4428px] w-[527px]" data-node-id="52:326" style={{ color: 'white' }}>
          Разрабатываем дорожную карту цифровой трансформации с конкретными KPI и сроками окупаемости. Помогаем выбрать приоритетные направления и избежать дорогостоящих ошибок.
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[293px] leading-[normal] left-[135px] text-white text-[31px] top-[5081px] w-[527px]" data-node-id="52:329" style={{ color: 'white' }}>
          Создаем интеллектуальных агентов и системы автоматизации под конкретные задачи вашего бизнеса. От ассистентов делопроизводства до уникальных инновационных разработок.
        </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-white text-[34px] top-[3647px] w-[527px]" data-node-id="48:196" style={{ color: 'white' }}>
          Корпоративное обучение искусственному интеллекту
        </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-white text-[34px] top-[4281px] w-[527px]" data-node-id="52:327" style={{ color: 'white' }}>
          Стратегия внедрения ИИ
        </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[107px] leading-[normal] left-[135px] text-white text-[34px] top-[4934px] w-[527px]" data-node-id="52:330" style={{ color: 'white' }}>
          Разработка ИИ-решений
        </p>
      <div className="absolute h-[293px] left-0 top-[3057px] w-[781px] overflow-hidden z-10" data-name="Снимок экрана 2025-09-26 в 21.07.41 1" data-node-id="48:199">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={img202509262107411} />
        </div>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[122px] leading-[normal] left-[179px] text-white text-[100px] text-center top-[2608px] translate-x-[-50%] w-[193px] z-20" data-node-id="48:200" style={{ color: 'white' }}>
          7
        </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[122px] leading-[normal] left-[470px] text-white text-[100px] text-center top-[2608px] translate-x-[-50%] w-[234px] z-20" data-node-id="48:201" style={{ color: 'white' }}>
          61
        </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[122px] leading-[normal] left-[751px] text-white text-[100px] text-center top-[2608px] translate-x-[-50%] w-[282px] z-20" data-node-id="48:202" style={{ color: 'white' }}>
          120+
        </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[122px] leading-[normal] left-[1059px] text-white text-[100px] text-center top-[2608px] translate-x-[-50%] w-[280px] z-20" data-node-id="48:203" style={{ color: 'white' }}>
          15
        </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[122px] leading-[normal] left-[1388px] text-white text-[100px] text-center top-[2608px] translate-x-[-50%] w-[281px] z-20" data-node-id="48:204" style={{ color: 'white' }}>
          220
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[136px] text-white text-[30px] text-center top-[2754px] translate-x-[-50%] w-[279px] z-20" data-node-id="48:205" style={{ color: 'white' }}>
          лет экспертизы в области ИИ
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[470px] text-white text-[30px] text-center top-[2754px] translate-x-[-50%] w-[260px] z-20" data-node-id="48:206" style={{ color: 'white' }}>
          реализованный проект
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[777px] text-white text-[30px] text-center top-[2754px] translate-x-[-50%] w-[234px] z-20" data-node-id="48:207" style={{ color: 'white' }}>
          научных проектов
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[1047px] text-white text-[30px] text-center top-[2754px] translate-x-[-50%] w-[304px] z-20" data-node-id="48:208" style={{ color: 'white' }}>
          государственных стандартов по ИИ
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[1389px] text-white text-[30px] text-center top-[2754px] translate-x-[-50%] w-[279px] z-20" data-node-id="48:209" style={{ color: 'white' }}>
          обученных специалистов
        </p>
      <div className="absolute bg-[#071a31] h-[1343px] left-[27px] rounded-[22px] shadow-[9px_9px_16px_-1px_#1e1e1e] top-[11686px] w-[727px]" data-node-id="48:210" />
      <div className="absolute bg-white h-[82px] left-[81px] rounded-[14px] top-[11827px] w-[620px]" data-node-id="48:211" />
      <div className="absolute bg-white h-[82px] left-[81px] rounded-[34px] top-[12891px] w-[620px]" data-node-id="56:122" />
      <div className="absolute bg-white rounded-[13px] size-[37px] top-[12774px] translate-x-[-50%]" data-node-id="56:125" style={{ left: "calc(50% - 270.5px)" }} />
      <div className="absolute bg-white h-[82px] left-[81px] rounded-[14px] top-[12035px] w-[620px]" data-node-id="54:2" />
      <div className="absolute bg-white h-[495px] left-[81px] rounded-[22px] top-[12243px] w-[620px]" data-node-id="48:212" />
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] left-[144px] text-white text-[20px] top-[11763.5px] translate-y-[-50%] w-[163px]" data-node-id="48:214">
        <p className="leading-[normal]">имя</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] left-[144px] text-white text-[20px] top-[12179.5px] translate-y-[-50%] w-[163px]" data-node-id="48:215">
        <p className="leading-[normal]">сообщение</p>
      </div>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[79px] leading-[normal] left-[144px] text-white text-[20px] top-[12769px] w-[500px]" data-node-id="56:123">
        Я согласен с политикой конфиденциальности и даю согласие на обработку персональных данных
      </p>
      <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[57px] justify-center leading-[0] left-[246px] text-[#071a31] text-[30px] text-center top-[12904px] translate-x-[-50%] translate-y-[-50%] w-[284px]" data-node-id="56:124">
        <p className="leading-[normal]">отправить</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] left-[144px] text-white text-[20px] top-[11971.5px] translate-y-[-50%] w-[163px]" data-node-id="48:216">
        <p className="leading-[normal]">почта</p>
      </div>
      <div className="absolute h-[213px] left-[478px] top-[5731px] w-[303px]" data-name="Gazprom-01 1" data-node-id="48:217">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgGazprom011} />
        </div>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[426px] leading-[normal] left-[135px] text-[#071a31] text-[31px] top-[6077px] w-[603px]" data-node-id="48:218">
          Разработали и провели образовательную программу по применению искусственного интеллекта в нефтегазовой индустрии. Обучили 50+ топ-менеджеров компании практическому использованию ИИ-технологий для оптимизации бизнес-процессов.
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[388px] leading-[normal] left-[135px] text-[#071a31] text-[31px] top-[6888px] w-[603px]" data-node-id="48:219">
          Внедрили интеллектуальную систему для оптимизации производственных процессов и прогнозирования потребности в запчастях. Решение помогает повысить эффективность производства и снизить простои.
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[388px] leading-[normal] left-[126px] text-[#071a31] text-[31px] top-[7614px] w-[603px]" data-node-id="53:331">
          Создали специализированную программу обучения сотрудников применению искусственного интеллекта в автомобильной промышленности. Программа адаптирована под специфику отрасли и задачи компании.
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[388px] leading-[normal] left-[126px] text-[#071a31] text-[31px] top-[8305px] w-[603px]" data-node-id="53:333">
          Совместно с Росстандартом разработали 15 государственных стандартов в области искусственного интеллекта, заложив нормативную основу для развития ИИ-технологий в России.
        </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[503px] leading-[normal] left-[126px] text-[#071a31] text-[31px] top-[9206px] w-[603px]" data-node-id="48:222">
        Лицензия на образовательную деятельность    Регистрационный номер: Л035-01298-77/01264001   Выдана: Департаментом образования и науки города Москвы   Дата: 24 июня 2024 года   Статус: действующая - Право на дополнительное профессиональное образование - Партнерство с Росстандартом в разработке государственных стандартов по ИИ - Благодарственные письма от крупных корпораций Вся наша деятельность ведется в полном соответствии с требованиями российского законодательства.
      </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[184px] leading-[normal] left-[135px] text-[#071a31] text-[34px] top-[5933px] w-[453px]" data-node-id="48:223">
          Корпоративное обучение ИИ для нефтегазовой отрасли
        </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[209px] leading-[normal] left-[135px] text-[#071a31] text-[34px] top-[6739px] w-[453px]" data-node-id="48:224">
          ИИ-система для производственной оптимизации
        </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[209px] leading-[normal] left-[126px] text-[#071a31] text-[34px] top-[7465px] w-[453px]" data-node-id="53:332">
          Образовательная программа по ИИ для автопрома
        </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[209px] leading-[normal] left-[126px] text-[#071a31] text-[34px] top-[8156px] w-[453px]" data-node-id="53:334">
          Разработка государственных стандартов ИИ
        </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[136px] leading-[normal] left-[126px] text-[#071a31] text-[34px] top-[8958px] w-[449px]" data-node-id="48:227">
          Наша образовательная деятельность официально лицензирована:
        </p>
      <div className="absolute h-[199px] left-[488px] top-[6524px] w-[283px]" data-name="Kamaz-01 1" data-node-id="48:228">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgKamaz011} />
      </div>
      <div className="absolute h-[121px] left-[576px] top-[8023px] w-[108px]" data-name="rosstandart-seeklogo 1" data-node-id="48:229">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgRosstandartSeeklogo1} />
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] left-[135px] text-[#071a31] text-[50px] top-[2992px] translate-y-[-50%] w-[683px]" data-node-id="49:323">
        <p className="leading-[normal]">Наши партнёры</p>
        </div>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[324px] leading-[59px] text-white text-[30px] top-[13797px] w-[569px]" data-node-id="48:175" style={{ left: "calc(50% - 261.5px)" }}>
        119049, РФ, г. Москва, ул. Дубнинская, д. 75Б, стр. 2
      </p>
      <div className="absolute bg-[#071a31] h-[1113px] left-0 rounded-[19px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[8733px] w-[91px]" data-node-id="48:166" />
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[71px] leading-[59px] text-white text-[30px] top-[13726px] w-[205px]" data-node-id="48:179" style={{ left: "calc(50% - 258.5px)" }}>
        адрес
      </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[71px] leading-[59px] text-white text-[30px] top-[13342px] w-[205px]" data-node-id="48:178" style={{ left: "calc(50% - 261.5px)" }}>
        телефон
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[52px] leading-[59px] text-[30px] text-white top-[14069px] w-[102px]" data-node-id="55:49" style={{ left: "calc(50% - 261.5px)" }}>
        2025
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
      <div className="absolute contents left-[0px] top-[237px]" data-node-id="56:127">
        <div className="absolute bg-[#071a31] h-[72px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[237px] w-[781px]" data-node-id="48:164" />
        <div className="absolute h-[41px] left-[92px] top-[257px] w-[63px]" data-name="AIA logo 1" data-node-id="56:119">
          <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgAiaLogo} />
        </div>
        <div ref={mobileMenuToggleRef} onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute left-[689px] top-[262px] w-[40.3671875px] h-[31.312589645385742px] cursor-pointer z-50" data-node-id="56:121">
          <div className="absolute bg-white h-[3.44px] left-[722px] rounded-[3px] top-[262px] w-[6.728px]" data-node-id="55:107" />
          <div className="absolute bg-white h-[3.44px] left-[707px] rounded-[3px] top-[275.46px] w-[22.106px]" data-node-id="55:108" />
          <div className="absolute bg-white h-[3.44px] left-[689px] rounded-[3px] top-[289.87px] w-[40.367px]" data-node-id="55:109" />
        </div>
      </div>
      <div className="absolute contents left-[0px] top-[0px]" data-node-id="56:126">
        <div className="absolute bg-[#071a31] h-[237px] left-0 top-0 w-[781px]" data-node-id="55:118" />
        <p className="absolute font-['Montserrat:ExtraLight',_sans-serif] font-extralight h-[46px] leading-[normal] text-right text-white text-[40px] top-[126px] w-[347px]" data-node-id="55:111" style={{ left: "calc(50% + 187.5px)" }}>
          услуги
        </p>
        <p className="absolute font-['Montserrat:ExtraLight',_sans-serif] font-extralight h-[46px] leading-[normal] text-right text-white text-[40px] top-[49px] w-[347px]" data-node-id="55:112" style={{ left: "calc(50% + 184.5px)" }}>
          проекты
        </p>
        <p className="absolute font-['Montserrat:ExtraLight',_sans-serif] font-extralight h-[46px] leading-[normal] text-right text-white text-[40px] top-[203px] w-[347px]" data-node-id="55:113" style={{ left: "calc(50% + 180.5px)" }}>
          контакты
        </p>
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
      <FigmaContactForm />
      </div>
    </div>
  );
}
