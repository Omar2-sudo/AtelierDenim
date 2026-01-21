
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {useNavigate } from 'react-router'

type Props = {
  setSelectedPage: (value: string) => void;
}

const BuyNow = ({ setSelectedPage }: Props) => {
  
  const words = "Sac en Jean".split(" ");
  const navigate = useNavigate();
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 },
    },
  };
  
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <section id="acheter" className="bg-secondary-100 overflow-x-hidden ">

      {/* MAIN CONTENT */}
      <motion.div className="relative min-h-[700px] flex items-center justify-center bg-gray-20 overflow-x-hidden"
      onViewportEnter={() => setSelectedPage("acheter")}>
        
        {/* Big background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
          <motion.h1
            className="font-bold text-secondary-200 text-center leading-[1.1] w-full"
            style={{ 
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(8rem, 20vw, 25rem)'
            }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount:0.9}}
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-[0.25em]">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span key={letterIndex} variants={child} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Center button */}
        <button 
          onClick={()=>navigate('/SacJean')}
          className="relative z-10 bg-primary-100 text-white px-12 py-4 text-2xl font-bold rounded-full hover:bg-primary-200"
        >
          Buy Now
        </button>
      </motion.div>
    </section>
  );
};

export default BuyNow;  