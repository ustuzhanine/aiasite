import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-['Montserrat',sans-serif]">
      {/* Шапка */}
      <header className="bg-[#071a31] py-8 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-[#e4eef9] text-lg font-thin">
            АО «Агентство Искусственного Интеллекта»
          </p>
        </div>
      </header>

      {/* Основной контент */}
      <main className="max-w-5xl mx-auto px-4 md:px-16 py-12">
        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">1. Общие положения</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            Настоящая Политика конфиденциальности персональных данных (далее — Политика) 
            действует в отношении всей информации, которую АО «Агентство Искусственного Интеллекта» 
            (ОГРН 1247700367674, ИНН 9715388876), расположенное по адресу: 119049, РФ, г. Москва, 
            ул. Дубнинская, д. 75Б, стр. 2, может получить о Пользователе во время использования 
            сайта aiagency.ru.
          </p>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed">
            Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой 
            и указанными в ней условиями обработки его персональной информации.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">2. Персональные данные пользователей</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            Под персональными данными понимается любая информация, относящаяся к прямо или косвенно 
            определенному или определяемому физическому лицу (субъекту персональных данных).
          </p>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            <strong className="font-semibold">Сайт собирает следующие данные:</strong>
          </p>
          <ul className="list-disc list-inside text-[#071a31] text-lg font-thin leading-relaxed mb-4 pl-4">
            <li>Имя пользователя</li>
            <li>Адрес электронной почты</li>
            <li>Содержание обращений и сообщений</li>
            <li>Техническую информацию о посещении сайта (IP-адрес, файлы cookie, данные браузера)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">3. Цели сбора персональных данных</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            Персональные данные пользователя используются исключительно в следующих целях:
          </p>
          <ul className="list-disc list-inside text-[#071a31] text-lg font-thin leading-relaxed mb-4 pl-4">
            <li>Связь с пользователем для предоставления информации об услугах</li>
            <li>Обработка запросов и обращений пользователя</li>
            <li>Направление коммерческих предложений и информационных материалов</li>
            <li>Улучшение качества услуг и функционала сайта</li>
            <li>Проведение статистических и аналитических исследований</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">4. Правовые основания обработки</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            Обработка персональных данных осуществляется в соответствии с:
          </p>
          <ul className="list-disc list-inside text-[#071a31] text-lg font-thin leading-relaxed mb-4 pl-4">
            <li>Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»</li>
            <li>Федеральным законом от 13.03.2006 № 38-ФЗ «О рекламе»</li>
            <li>Федеральным законом от 27.07.2006 № 149-ФЗ «Об информации, информационных технологиях и о защите информации»</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">5. Способы и сроки обработки</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            Обработка персональных данных осуществляется с использованием средств автоматизации 
            и без использования таких средств. Компания принимает необходимые организационные и 
            технические меры для защиты персональных данных от неправомерного доступа, уничтожения, 
            изменения, блокирования, копирования, распространения.
          </p>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed">
            Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, 
            но не более 5 лет с момента последнего взаимодействия с пользователем, если иное не предусмотрено 
            законодательством РФ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">6. Передача данных третьим лицам</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            Персональные данные пользователей не передаются третьим лицам, за исключением случаев:
          </p>
          <ul className="list-disc list-inside text-[#071a31] text-lg font-thin leading-relaxed mb-4 pl-4">
            <li>Получения явного согласия пользователя</li>
            <li>По требованию уполномоченных органов государственной власти РФ в случаях, установленных законодательством</li>
            <li>Передачи данных партнерам для оказания услуг пользователю (при наличии согласия)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">7. Права субъекта персональных данных</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            Пользователь имеет право:
          </p>
          <ul className="list-disc list-inside text-[#071a31] text-lg font-thin leading-relaxed mb-4 pl-4">
            <li>Получать информацию о содержании своих персональных данных</li>
            <li>Требовать уточнения, блокирования или уничтожения своих персональных данных</li>
            <li>Отозвать согласие на обработку персональных данных</li>
            <li>Обжаловать действия или бездействие Компании в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке</li>
          </ul>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed">
            Для реализации своих прав пользователь может направить письменное обращение по адресу: 
            119049, РФ, г. Москва, ул. Дубнинская, д. 75Б, стр. 2, или на электронную почту: in@aiagency.ru
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">8. Файлы cookie</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            Сайт использует технологию cookie для улучшения качества работы и анализа посещаемости. 
            Cookie — это небольшие текстовые файлы, которые сохраняются на устройстве пользователя при 
            посещении сайта. Пользователь может настроить свой браузер для отказа от cookie, однако 
            это может повлиять на функциональность сайта.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">9. Изменение Политики</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            Компания оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. 
            При внесении изменений в актуальной редакции указывается дата последнего обновления. Новая 
            редакция Политики вступает в силу с момента ее размещения на сайте.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-[#071a31] text-3xl font-semibold mb-4">10. Контактная информация</h2>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-4">
            <strong className="font-semibold">АО «Агентство Искусственного Интеллекта»</strong>
          </p>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-2">
            ОГРН: 1247700367674
          </p>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-2">
            ИНН: 9715388876
          </p>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-2">
            Адрес: 119049, РФ, г. Москва, ул. Дубнинская, д. 75Б, стр. 2
          </p>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-2">
            Телефон: +7 (495) 123-47-05
          </p>
          <p className="text-[#071a31] text-lg font-thin leading-relaxed mb-2">
            Email: in@aiagency.ru
          </p>
        </section>

        <section className="mb-8 border-t border-gray-300 pt-6">
          <p className="text-[#071a31] text-base font-thin italic">
            Дата последнего обновления: 30 сентября 2025 года
          </p>
        </section>

        {/* Кнопка возврата */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="bg-[#071a31] text-white px-8 py-4 rounded-full text-xl font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            Вернуться назад
          </button>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-[#071a31] text-white py-8 px-4 md:px-16 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#e4eef9] font-thin">
            © 2025 АО «Агентство Искусственного Интеллекта». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
