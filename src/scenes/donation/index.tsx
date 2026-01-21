import Zack from '@/assets/Zack.png'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: string) => void;
}

const Donation = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate();
  
  return (
    <motion.div className="flex flex-col md:flex-row min-h-screen items-center justify-center p-8"
      onViewportEnter={() => setSelectedPage("donation")} id="donation">
      <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-8 flex flex-col md:flex-row max-w-6xl w-full">
        {/* Empty div - first half */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <img src={Zack} alt="Zackary" className="max-w-full h-auto object-contain" />
        </div>
        
        {/* Content div - second half */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Donnez Vos Jeans
            </h1>
            <p className="text-gray-600 mb-6">
              Vous avez des jeans qui traînent dans votre garde-robe? Pourquoi ne pas leur donner une seconde vie? Faites don de vos vieux jeans et aidez-nous à créer de magnifiques sacs en denim artisanaux tout en réduisant notre empreinte écologique.
            </p>
            <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={() => navigate('/donation')}>
              Faire un Don
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Donation