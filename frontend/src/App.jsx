import React, { useState, useEffect } from 'react';
import FigmaDesktopCanvas from './components/FigmaDesktopCanvas';
import FigmaMobileCanvas from './components/FigmaMobileCanvas';

function App() {
  // Десктопная версия для всех ПК (>1024px), мобильная для планшетов и меньше (<=1024px)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 1024;
      console.log(`[App] Window resized: ${window.innerWidth}px, isMobile: ${newIsMobile}`);
      setIsMobile(newIsMobile);
    };
    
    // Логируем начальное состояние
    console.log(`[App] Initial: window width ${window.innerWidth}px, isMobile: ${isMobile}`);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(`[App] Rendering: ${isMobile ? 'MOBILE' : 'DESKTOP'} version (width: ${window.innerWidth}px)`);

  return (
    <div className="w-full h-full overflow-x-hidden bg-white">
      {isMobile ? <FigmaMobileCanvas /> : <FigmaDesktopCanvas />}
    </div>
  );
}

export default App;
