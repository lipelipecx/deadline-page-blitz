
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Comment = {
  id: number;
  name: string;
  text: string;
  avatar: string;
};

const comments: Comment[] = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Adorei as dicas! Muito útil 👏",
    avatar: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 2,
    name: "João Santos",
    text: "Exatamente o que eu precisava saber!",
    avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
  },
  {
    id: 3,
    name: "Ana Costa",
    text: "Isso mudou minha perspectiva 🙌",
    avatar: "https://images.unsplash.com/photo-1501286353178-1ec881214838"
  },
  {
    id: 4,
    name: "Pedro Lima",
    text: "Conteúdo incrível! Vou implementar hoje mesmo",
    avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
  }
];

const LiveComment = () => {
  const [currentComment, setCurrentComment] = useState<Comment>(comments[0]);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % comments.length;
      setCurrentComment(comments[currentIndex]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-purple-100 max-w-md mx-auto">
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={currentComment.avatar} alt={currentComment.name} />
          <AvatarFallback>{currentComment.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">{currentComment.name}</p>
          <p className="text-sm text-gray-600">{currentComment.text}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveComment;
