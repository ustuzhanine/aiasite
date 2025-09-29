import React, { useState, useEffect } from 'react';
import FigmaDesktopCanvas from './components/FigmaDesktopCanvas';
import FigmaMobileCanvas from './components/FigmaMobileCanvas';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log('App rendering, isMobile:', isMobile, 'width:', window.innerWidth);

  return (
    <div className="w-full h-full overflow-x-hidden">
      {isMobile ? <FigmaMobileCanvas /> : <FigmaDesktopCanvas />}
    </div>
  );
}

export default App;
