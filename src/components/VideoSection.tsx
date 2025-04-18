
import { useState, useEffect } from 'react';

const VideoSection = () => {
  const [viewerCount, setViewerCount] = useState(245);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(200, Math.min(300, prev + change));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <p className="text-gray-600">
          <span className="font-semibold">{viewerCount}</span> people watching now
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
