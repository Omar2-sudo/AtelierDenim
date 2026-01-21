
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
            Bienvenue chez Atelier Denim : Là où le jean oublié devient une pièce d'exception<br />
            Chez Atelier Denim, nous refusons le diktat de la mode jetable et l'uniformité des grandes chaînes. Nous croyons que le véritable luxe réside aujourd'hui dans la créativité responsable et l'audace de faire différemment. Notre mission est de réécrire l'histoire de jeans oubliés pour leur offrir une seconde vie spectaculaire sous forme de sacs à main durables et entièrement artisanaux. Loin de la production de masse et des étiquettes hors de prix, nous avons choisi de valoriser le travail local et l'économie circulaire pour vous offrir un style sans compromis.
            Chaque création qui sort de notre atelier est une célébration de l'unicité. En exploitant les nuances, les poches et les textures du denim recyclé, nous concevons des modèles ingénieux — comme nos signatures « Sac Genoux » et « Sac Fesses » — qui allient esthétisme urbain et praticité. Parce que chaque toile de denim a son propre vécu, aucun sac n'est identique à un autre ; posséder une pièce Atelier Denim, c'est porter une création exclusive que vous ne verrez sur personne d'autre. Portée par une équipe passionnée, notre marque prouve qu'il est possible d'être à la fine pointe de la mode tout en réduisant notre empreinte écologique.
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