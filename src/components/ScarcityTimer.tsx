
import { useState, useEffect } from 'react';

const ScarcityTimer = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay.getTime() - now.getTime();
      
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <p className="text-lg">Este vídeo estará disponível apenas até hoje:</p>
        <span className="font-mono text-xl">{timeLeft}</span>
      </div>
    </div>
  );
};

export default ScarcityTimer;
