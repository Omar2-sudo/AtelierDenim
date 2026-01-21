import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketImage from '@/assets/ticket.png';
import { motion } from 'framer-motion';
import { basketStorage } from '@/basketStorage';

type Props = {
  setSelectedPage: (value: string) => void;
}

const Prize = ({ setSelectedPage }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [confetti, setConfetti] = useState<Array<{id: number, x: number, y: number, rotation: number, emoji: string}>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const spins = 5 + Math.random() * 5;
    const extraDegrees = Math.random() * 360;
    const totalRotation = rotation + (spins * 360) + extraDegrees;
    
    setRotation(totalRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      
      // Launch confetti
      const confettiEmojis = ['🎉', '🎊', '✨', '🎈', '🎆', '⭐', '💫', '🌟'];
      const newConfetti = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: -10,
        rotation: Math.random() * 360,
        emoji: confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)]
      }));
      setConfetti(newConfetti);
      
      // Clear confetti after animation
      setTimeout(() => setConfetti([]), 3000);
      
      // Add ticket to basket
      basketStorage.addItem({
        id: 3,
        name: "Ticket de Participation",
        price: 0.99,
        quantity: 1
      });
      
      // Navigate to cart after confetti shows
      setTimeout(() => {
        navigate('/cart');
      }, 2000);
    }, 4000);
  };

  const topImages = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      rotation: Math.random() * 30 - 15
    }));
  }, []);

  const bottomImages = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      rotation: Math.random() * 30 - 15
    }));
  }, []);

  return (
    <section id="prix" className="bg-secondary-100 overflow-x-hidden ">
    <div className="relative min-h-screen py-16">
      {/* Confetti Container */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {confetti.map((item) => (
          <div
            key={item.id}
            className="absolute text-4xl animate-confetti"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animation: 'confettiFall 3s ease-out forwards',
              transform: `rotate(${item.rotation}deg)`
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden rounded-3xl">
        <div 
          className="absolute inset-0 bg-primary-100 w-[200vw]"
          style={{
            transform: `translateX(${-scrollY * 0.3}px)`,
            transition: 'transform 0.1s linear'
          }}
        />
        <div 
          className="flex gap-6 absolute whitespace-nowrap"
          style={{
            transform: `translateX(${-scrollY * 0.5}px)`,
            transition: 'transform 0.1s linear',
            zIndex: 10
          }}
        >
          {[...topImages, ...topImages, ...topImages].map((img, index) => (
            <div
              key={index}
              className="w-20 h-20 flex-shrink-0"
              style={{
                transform: `rotate(${img.rotation}deg)`,
              }}
            >
              <img 
                src={ticketImage} 
                alt="ticket" 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      
      <motion.div className="px-8 md:px-16 lg:px-32 py-24 mb-20" onViewportEnter={() => setSelectedPage("prix")} id="tickets">
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-7xl mx-auto">
          <div className="md:w-1/2 flex flex-col items-center gap-6">
            <div className="relative">
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                className="cursor-pointer"
                onClick={spinWheel}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
                }}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                  const angle = (i * 45) * Math.PI / 180;
                  const nextAngle = ((i + 1) * 45) * Math.PI / 180;
                  const radius = 130;
                  const cx = 150;
                  const cy = 150;
                  
                  const x1 = cx + radius * Math.cos(angle - Math.PI / 2);
                  const y1 = cy + radius * Math.sin(angle - Math.PI / 2);
                  const x2 = cx + radius * Math.cos(nextAngle - Math.PI / 2);
                  const y2 = cy + radius * Math.sin(nextAngle - Math.PI / 2);
                  
                  return (
                    <path
                      key={i}
                      d={`M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
                      className={i % 2 === 0 ? 'fill-primary-100' : 'fill-secondary-100'}
                      stroke="white"
                      strokeWidth="2"
                    />
                  );
                })}

                <circle cx="150" cy="150" r="30" fill="white" stroke="#1F2937" strokeWidth="3" />
              </svg>
              
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-red-500"></div>
              </div>
            </div>
            
            <button 
              onClick={spinWheel}
              disabled={isSpinning}
              className="px-8 py-4  bg-primary-100 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
            </button>
          </div>

          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-100">
              Un Sac, Mille Efforts
            </h1>
            <p className="text-lg md:text-xl text-secondary-200 leading-relaxed">
              Tournez la roue ! Vous pourriez gagner votre participation pour remporter notre sac Édition Limitée. C'est la pièce de résistance de notre collection, celle qui a demandé le plus de travail et de passion. Une œuvre d'art portable qui attend son propriétaire.
            </p>
            <p className="text-md md:text-lg text-secondary-200">
              Vous biensur pouvez acheter plusieurs tickets
            </p>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden rounded-3xl">
        <div 
          className="absolute inset-0 bg-primary-100 w-full"
        />
        <div 
          className="flex gap-6 absolute whitespace-nowrap"
          style={{
            transform: `translateX(calc(-100% / 3 + ${scrollY * 0.5}px))`,
            transition: 'transform 0.1s linear',
            zIndex: 10
          }}
        >
          {[...bottomImages, ...bottomImages, ...bottomImages].map((img, index) => (
            <div
              key={index}
              className="w-20 h-20 flex-shrink-0"
              style={{
                transform: `rotate(${img.rotation}deg)`,
              }}
            >
              <img 
                src={ticketImage} 
                alt="ticket" 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Prize;