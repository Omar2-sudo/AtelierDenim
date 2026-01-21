
import { useNavigate } from 'react-router-dom';
import useMediaQuery from "@/Hooks/useMediaQuery";
import Logo from "@/assets/Logo.png";
import Image1 from "@/assets/image1.jpg";
import Image2 from "@/assets/image2.jpg";
import Image3 from "@/assets/image3.jpg";
import Image4 from "@/assets/image4.jpg";
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: string) => void;
}

const aboutus = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section id="àpropos" className="w-full py-10">
      <motion.div className='flex items-center m-12'
        onViewportEnter={() => setSelectedPage("àpropos")}>
        {isAboveMediumScreens && (
          <div className='flex-1 flex items-center justify-center'>
            <img alt="logo" src={Logo} className="h-150 w-auto"/>
          </div>
        )}
        <motion.div style={{flex: isAboveMediumScreens ? 3 : 1}}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}>
          <h1 className='text-white text-xl'>
            hez Atelier Denim, nous croyons qu'il est temps de dire adieu à la mode jetable et de réinventer l'accessoire.
           Dans un marché où l'uniformité règne et où l'impact environnemental de l'industrie textile est colossal, 
           nous avons fait le choix de la créativité responsable.
           Notre mission est de donner une nouvelle vie à des jeans oubliés pour créer des sacs à main durables, audacieux et surtout, uniques.
          </h1>
          <button className="group mt-4 text-primary-200 hover:text-primary-100 transition-colors">
            <span className="flex items-center gap-2" onClick={() => navigate('/aboutus')}>
              See More
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </motion.div>
      </motion.div>
      <motion.div className="flex justify-center gap-4"
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.0000000000000001 }}>
        <div className="w-60 h-60 border-8 border-white overflow-hidden" style={{ transform: 'rotate(-3deg)' }}>
          <img src={Image1} alt="Denim bag 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-60 h-60 border-8 border-white overflow-hidden" style={{ transform: 'rotate(2deg)' }}>
          <img src={Image2} alt="Denim bag 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-60 h-60 border-8 border-white overflow-hidden" style={{ transform: 'rotate(-1deg)' }}>
          <img src={Image3} alt="Denim bag 3" className="w-full h-full object-cover" />
        </div>
        <div className="w-60 h-60 border-8 border-white overflow-hidden" style={{ transform: 'rotate(3deg)' }}>
          <img src={Image4} alt="Denim bag 4" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </section>
  )
}

export default aboutus