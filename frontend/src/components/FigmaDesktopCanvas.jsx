import React, { useState, useEffect, useRef } from 'react';
import imgAvtovaz1 from '/assets/avtovaz.jpg';
import img202509252153071 from '/assets/cab7bf3fad593347fd74e53def4f268e06bccac1.png';
import imgHeadNew55011X from '/assets/АЛРИИ_ЛОГО.png';
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
  const [scale, setScale] = useState(window.innerWidth / 1920);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth / 1920);
    };

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
    <div className="relative w-full min-h-screen bg-white" data-name="pc" data-node-id="1:8" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <div className="absolute bg-white h-[9133px] left-0 top-[571px] w-full z-0" data-node-id="14:67" />
      <div className="absolute blur-[15.05px] filter h-[995px] left-[-20px] top-0 w-[1967px] z-10" data-name="Снимок экрана 2025-09-25 в 21.53.07 1" data-node-id="1:6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[148.81%] left-[-8.51%] max-w-none top-[-8.24%] w-[137.5%]" src={img202509252153071} />
        </div>
      </div>
      <div className="absolute bg-[#071a31] h-[95px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[-14px] w-[1920px]" data-node-id="1:5" />
      <div className="absolute bg-[#071a31] h-[385px] left-0 shadow-[9px_9px_16px_-1px_rgba(0,0,0,0.25)] top-[9398px] w-[1920px]" data-node-id="21:109" />
      <div className="absolute bg-[#071a31] h-[416px] left-[-26px] rounded-[19px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[6424px] w-[311px]" data-node-id="40:135" />
      <div className="absolute h-[27px] left-[415px] top-[33px] w-[121px]" data-name="HEAD_NEW_55-01_1x" data-node-id="1:4">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgHeadNew55011X} />
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[46px] justify-center leading-[0] left-[1415.5px] text-[20px] text-center text-white top-[39px] translate-x-[-50%] translate-y-[-50%] w-[123px]" data-node-id="14:57">
        <p className="leading-[normal]">о нас</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] left-[411px] text-[#071a31] text-[50px] top-[1241px] translate-y-[-50%] w-[219px]" data-node-id="14:71">
        <p className="leading-[normal]">О нас</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] left-[411px] text-[#071a31] text-[50px] top-[2487px] translate-y-[-50%] w-[683px]" data-node-id="49:276">
        <p className="leading-[normal]">Наши партнёры</p>
      </div>
      <div className="absolute h-[293px] left-[411px] top-[2570px] w-[1100px]" data-name="Логотипы партнёров" data-node-id="partners-section">
        <img alt="Партнёры" className="absolute inset-0 max-w-none object-contain pointer-events-none w-full h-full" src={img202509262107411} />
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[2972px] translate-y-[-50%] w-[468px]" data-node-id="14:73" style={{ left: "calc(50% - 549px)" }}>
        <p className="leading-[normal]">Наши услуги</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[4536px] translate-y-[-50%] w-[468px]" data-node-id="27:120" style={{ left: "calc(50% - 554px)" }}>
        <p className="leading-[normal]">Наши проекты</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[6298px] translate-y-[-50%] w-[789px]" data-node-id="40:132" style={{ left: "calc(50% - 542px)" }}>
        <p className="leading-[normal]">Лицензии и Сертификаты</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] text-[#071a31] text-[50px] top-[7105px] translate-y-[-50%] w-[789px]" data-node-id="40:136" style={{ left: "calc(50% - 542px)" }}>
        <p className="leading-[normal]">Наша команда</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[184px] justify-center leading-[0] text-[#071a31] text-[40px] top-[8458px] translate-y-[-50%] w-[1026px]" data-node-id="20:99" style={{ left: "calc(50% - 542px)" }}>
        <p className="leading-[normal]">Напишите нам, и мы найдем оптимальное ИИ-решение для вашего бизнеса</p>
      </div>
      <p className="absolute font-['Montserrat:Light',_sans-serif] font-light h-[71px] leading-[59px] text-[30px] text-white top-[9448px] w-[815px]" data-node-id="21:111" style={{ left: "calc(50% - 186px)" }}>
        119049, РФ, г. Москва, ул. Дубнинская, д. 75Б, стр. 2
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[71px] leading-[59px] text-[30px] text-white top-[9504px] w-[815px]" data-node-id="21:117" style={{ left: "calc(50% - 186px)" }}>
        +7 (495) 123-47-05
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[71px] leading-[59px] text-[30px] text-white top-[9560px] w-[815px]" data-node-id="21:118" style={{ left: "calc(50% - 186px)" }}>
        in@aiagency.ru
      </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[71px] leading-[59px] text-[30px] text-white top-[9504px] w-[205px]" data-node-id="21:114" style={{ left: "calc(50% - 544px)" }}>
        телефон
      </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[71px] leading-[59px] text-[30px] text-white top-[9448px] w-[205px]" data-node-id="21:116" style={{ left: "calc(50% - 544px)" }}>
        адрес
      </p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold h-[71px] leading-[59px] text-[30px] text-white top-[9560px] w-[317px]" data-node-id="21:115" style={{ left: "calc(50% - 544px)" }}>
        электронная почта
      </p>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[622px] leading-[normal] left-[411px] text-[#071a31] text-[35px] top-[1324px] w-[1283px]" data-node-id="14:72">
        <p className="mb-0">ведущая консалтинговая компания в области искусственного интеллекта, которая помогает крупному бизнесу извлекать реальную прибыль из ИИ-технологий.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Мы специализируемся на трех ключевых направлениях: корпоративном обучении искусственному интеллекту, разработке интеллектуальных решений под конкретные бизнес-задачи и стратегическом консалтинге по цифровой трансформации.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Наша команда объединяет кандидатов наук, выпускников Сколково и признанных экспертов отрасли с многолетним практическим опытом. Мы не только знаем теорию ИИ, но и понимаем, как применить эти знания для роста эффективности и прибыльности бизнеса.</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[46px] justify-center leading-[0] left-[1534.5px] text-[20px] text-center text-white top-[39px] translate-x-[-50%] translate-y-[-50%] w-[123px]" data-node-id="14:62">
        <p className="leading-[normal]">услуги</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[46px] justify-center leading-[0] left-[1674.5px] text-[20px] text-center text-white top-[39px] translate-x-[-50%] translate-y-[-50%] w-[123px]" data-node-id="14:63">
        <p className="leading-[normal]">проекты</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[46px] justify-center leading-[0] left-[1813.5px] text-[20px] text-center text-white top-[39px] translate-x-[-50%] translate-y-[-50%] w-[123px]" data-node-id="14:64">
        <p className="leading-[normal]">контакты</p>
      </div>
      <div className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute flex flex-col font-['Montserrat:SemiBold',_sans-serif] font-semibold h-[343px] justify-center leading-[0] left-[415px] text-[100px] text-white top-[368.5px] translate-y-[-50%] w-[1048px] z-20" data-node-id="14:65">
        <p className="leading-[109px]">Агентство Искусственного Интеллекта</p>
      </div>
      <div className="[text-shadow:rgba(0,0,0,0.25)_4px_4px_8px] absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[199px] justify-center leading-[0] left-[425px] text-[50px] text-white top-[594.5px] translate-y-[-50%] w-[1048px] z-20" data-node-id="14:66">
        <p className="leading-[55px]">эксперты по обучению и внедрению ИИ-технологий</p>
      </div>
      <div className="absolute contents left-[425px] top-[706px]" data-node-id="14:70">
        <div className="absolute bg-[#071a31] h-[70px] left-[425px] rounded-[22px] shadow-[9px_9px_16px_-1px_#1e1e1e] top-[706px] w-[337px]" data-node-id="14:68" />
        <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[46px] justify-center leading-[0] left-[593.5px] text-[20px] text-center text-white top-[741px] translate-x-[-50%] translate-y-[-50%] w-[213px]" data-node-id="14:69">
          <p className="leading-[normal]">связаться с нами</p>
        </div>
      </div>
      <div className="absolute bg-[#071a31] h-[369px] left-[332px] rounded-[22px] shadow-[9px_9px_20px_-4px_rgba(30,30,30,0.52)] top-[3090px] w-[1256px]" data-node-id="20:89" />
      <div className="absolute bg-[#071a31] h-[369px] left-[332px] rounded-[22px] shadow-[9px_9px_20px_-4px_rgba(30,30,30,0.52)] top-[3497px] w-[1256px]" data-node-id="20:92" />
      <div className="absolute bg-[#071a31] h-[369px] left-[332px] rounded-[22px] shadow-[9px_9px_20px_-4px_rgba(30,30,30,0.52)] top-[3904px] w-[1256px]" data-node-id="20:95" />
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[141px] leading-[normal] left-[417px] text-[31px] text-white top-[3274px] w-[1098px]" data-node-id="20:90">
        Обучаем топ-менеджеров и специалистов компаний практическому применению ИИ в их отраслях. От базовых принципов до конкретных инструментов для роста бизнеса.
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[141px] leading-[normal] left-[417px] text-[31px] text-white top-[3661px] w-[1098px]" data-node-id="20:93">
        Разрабатываем дорожную карту цифровой трансформации с конкретными KPI и сроками окупаемости. Помогаем выбрать приоритетные направления и избежать дорогостоящих ошибок.
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[141px] leading-[normal] left-[417px] text-[31px] text-white top-[4068px] w-[1098px]" data-node-id="20:96">
        Создаем интеллектуальных агентов и системы автоматизации под конкретные задачи вашего бизнеса. От ассистентов делопроизводства до уникальных инновационных разработок.
      </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[95px] leading-[normal] left-[417px] text-[34px] text-white top-[3141px] w-[735px]" data-node-id="20:91">
        Корпоративное обучение искусственному интеллекту
      </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[95px] leading-[normal] left-[417px] text-[34px] text-white top-[3548px] w-[735px]" data-node-id="20:94">
        Стратегия внедрения ИИ
      </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium h-[95px] leading-[normal] left-[417px] text-[34px] text-white top-[3955px] w-[735px]" data-node-id="20:97">
        Разработка ИИ-решений
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[344.5px] text-[100px] text-white text-center top-[2044px] translate-x-[-50%] w-[193px]" data-node-id="19:76">
        7
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[617px] text-[100px] text-white text-center top-[2044px] translate-x-[-50%] w-[234px]" data-node-id="19:78">
        61
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[922px] text-[100px] text-white text-center top-[2044px] translate-x-[-50%] w-[282px]" data-node-id="19:80">
        120+
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[1229px] text-[100px] text-white text-center top-[2044px] translate-x-[-50%] w-[280px]" data-node-id="19:82">
        15
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[1558.5px] text-[100px] text-white text-center top-[2044px] translate-x-[-50%] w-[281px]" data-node-id="19:84">
        220
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[344.5px] text-[30px] text-white text-center top-[2190px] translate-x-[-50%] w-[279px]" data-node-id="19:77">
        лет экспертизы в области ИИ
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[630px] text-[30px] text-white text-center top-[2190px] translate-x-[-50%] w-[260px]" data-node-id="19:79">
        реализованный проект
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[924px] text-[30px] text-white text-center top-[2190px] translate-x-[-50%] w-[234px]" data-node-id="19:81">
        научных проектов
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[1229px] text-[30px] text-white text-center top-[2190px] translate-x-[-50%] w-[304px]" data-node-id="19:83">
        государственных стандартов по ИИ
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[122px] leading-[normal] left-[1558.5px] text-[30px] text-white text-center top-[2190px] translate-x-[-50%] w-[279px]" data-node-id="19:85">
        обученных специалистов
      </p>
      {/* Здесь будет FigmaContactForm */}
      <FigmaContactForm />

      <div className="absolute bg-[#071a31] h-[745px] left-[418px] rounded-[22px] shadow-[9px_9px_16px_-1px_#1e1e1e] top-[8546px] w-[916px]" data-node-id="21:100" />
      <div className="absolute bg-white h-[59px] left-[481px] rounded-[14px] top-[8657px] w-[362px]" data-node-id="21:101" />
      <div className="absolute bg-white h-[251px] left-[481px] rounded-[22px] top-[8795px] w-[790px]" data-node-id="21:104" />
      <div className="absolute bg-white h-[59px] left-[878px] rounded-[14px] top-[8657px] w-[393px]" data-node-id="21:103" />
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] left-[491px] text-[20px] text-white top-[8626.5px] translate-y-[-50%] w-[163px]" data-node-id="21:105">
        <p className="leading-[normal]">имя</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] left-[491px] text-[20px] text-white top-[8766.5px] translate-y-[-50%] w-[163px]" data-node-id="21:107">
        <p className="leading-[normal]">сообщение</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium h-[31px] justify-center leading-[0] left-[899px] text-[20px] text-white top-[8626.5px] translate-y-[-50%] w-[163px]" data-node-id="21:106">
        <p className="leading-[normal]">почта</p>
      </div>
      <div className="absolute h-[350px] left-[252px] top-[4615px] w-[498px]" data-name="Gazprom-01 1" data-node-id="24:119">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgGazprom011} />
      </div>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] left-[771px] text-[#071a31] text-[31px] top-[4760px] w-[979px]" data-node-id="27:121">
        Разработали и провели образовательную программу по применению искусственного интеллекта в нефтегазовой индустрии. Обучили 50+ топ-менеджеров компании практическому использованию ИИ-технологий для оптимизации бизнес-процессов.
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] left-[771px] text-[#071a31] text-[31px] top-[5165px] w-[979px]" data-node-id="27:124">
        Внедрили интеллектуальную систему для оптимизации производственных процессов и прогнозирования потребности в запчастях. Решение помогает повысить эффективность производства и снизить простои.
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] left-[771px] text-[#071a31] text-[31px] top-[5532px] w-[979px]" data-node-id="28:127">
        Создали специализированную программу обучения сотрудников применению искусственного интеллекта в автомобильной промышленности. Программа адаптирована под специфику отрасли и задачи компании.
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] left-[768px] text-[#071a31] text-[31px] top-[5899px] w-[979px]" data-node-id="29:130">
        Совместно с Росстандартом разработали 15 государственных стандартов в области искусственного интеллекта, заложив нормативную основу для развития ИИ-технологий в России.
      </p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[normal] left-[418px] text-[#071a31] text-[31px] top-[6574px] w-[1334px] whitespace-pre-wrap" data-node-id="40:133">{`Лицензия на образовательную деятельность    Регистрационный номер: Л035-01298-77/01264001   Выдана: Департаментом образования и науки города Москвы   Дата: 24 июня 2024 года   Статус: действующая - Право на дополнительное профессиональное образование - Партнерство с Росстандартом в разработке государственных стандартов по ИИ - Благодарственные письма от крупных корпораций Вся наша деятельность ведется в полном соответствии с требованиями российского законодательства.`}</p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[normal] left-[771px] text-[#071a31] text-[34px] top-[4647px] w-[735px]" data-node-id="27:122">
        Корпоративное обучение ИИ для нефтегазовой отрасли
      </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[normal] left-[771px] text-[#071a31] text-[34px] top-[5052px] w-[735px]" data-node-id="27:125">
        ИИ-система для производственной оптимизации
      </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[normal] left-[771px] text-[#071a31] text-[34px] top-[5419px] w-[735px]" data-node-id="28:128">
        Образовательная программа по ИИ для автопрома
      </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[normal] left-[768px] text-[#071a31] text-[34px] top-[5786px] w-[735px]" data-node-id="29:131">
        Разработка государственных стандартов ИИ
      </p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[normal] left-[418px] text-[#071a31] text-[34px] top-[6424px] w-[993px]" data-node-id="40:134">
        Наша образовательная деятельность официально лицензирована:
      </p>
      <div className="absolute h-[315px] left-[277px] top-[5033px] w-[448px]" data-name="Kamaz-01 1" data-node-id="27:123">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgKamaz011} />
      </div>
      <div className="absolute h-[199px] left-[406px] top-[5829px] w-[177px]" data-name="rosstandart-seeklogo 1" data-node-id="29:129">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgRosstandartSeeklogo1} />
      </div>
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
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[52px] leading-[59px] text-[30px] text-white top-[9692px] w-[102px]" data-node-id="55:117" style={{ left: "calc(50% - 544px)" }}>
        2025
      </p>
      <div className="absolute bg-white h-[56px] rounded-[34px] top-[9194px] translate-x-[-50%] w-[424px]" data-node-id="56:131" style={{ left: "calc(50% - 75px)" }} />
      <div className="absolute bg-white rounded-[13px] size-[37px] top-[9086px] translate-x-[-50%]" data-node-id="56:132" style={{ left: "calc(50% - 460.5px)" }} />
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal h-[79px] leading-[normal] left-[544px] text-[20px] text-white top-[9081px] w-[727px]" data-node-id="56:133">
        Я согласен с политикой конфиденциальности и даю согласие на обработку персональных данных
      </p>
      <div className="absolute flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal h-[39px] justify-center leading-[0] left-[883px] text-[#071a31] text-[30px] text-center top-[9222.5px] translate-x-[-50%] translate-y-[-50%] w-[194px]" data-node-id="56:134">
        <p className="leading-[normal]">отправить</p>
      </div>
      <div className="absolute h-[1035px] left-[167px] top-[7208px] w-[4096px]" data-name="Команда карусель 2" data-node-id="61:138">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

