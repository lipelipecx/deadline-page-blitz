import { useState, useEffect, useRef } from 'react';
import LiveComment from './LiveComment';

const VideoSection = ({ onVideoProgress }: { onVideoProgress: (seconds: number) => void }) => {
  const [viewerCount, setViewerCount] = useState(245);
  const countDirection = useRef(1);
  const lastChange = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastChange.current >= 5000) { // Change every 5 seconds
        setViewerCount(prev => {
          const change = countDirection.current * (Math.floor(Math.random() * (countDirection.current > 0 ? 8 : 2) + 1));
          const newCount = prev + change;
          
          // Switch direction after increase or decrease
          countDirection.current *= -1;
          lastChange.current = now;
          
          return Math.max(200, Math.min(300, newCount));
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      onVideoProgress(10); // Trigger after 10 seconds
    }, 10000);

    return () => clearInterval(timer);
  }, [onVideoProgress]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative pt-[56.25%]">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <p className="text-gray-600">
            <span className="font-semibold">{viewerCount}</span> pessoas assistindo agora
          </p>
        </div>
        <LiveComment />
      </div>
    </div>
  );
};

export default VideoSection;
