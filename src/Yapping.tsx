import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Image1 from "@/assets/image1.jpg";
import Image2 from "@/assets/jeans.jpg";
import Image3 from "@/assets/image3.jpg";
import Image4 from "@/assets/image4.jpg";
import Image5 from "@/assets/image2.jpg";

const Yapping = () => {
  const navigate = useNavigate()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="m-8 md:m-16 lg:m-40 font-oswald">
      {/* Header */}
      <div className="mb-16 flex items-center gap-4">
        <button 
          onClick={() => navigate('/')}
          className="text-primary-100 hover:text-primary-200 transition-colors duration-200 hover:scale-110 transform"
          aria-label="Go back to home"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 md:h-10 md:w-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
        </button>
       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-100 mb-4">
          About Us
        </h1>
      </div>

      {/* Rest of your sections... */}
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-20">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-100 pb-3 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-primary-100">
            Atelier Denim
          </h2>
          <p className="text-md md:text-lg lg:text-xl text-secondary-200 leading-relaxed">
           Chez Atelier Denim, nous croyons qu'il est temps de dire adieu à la mode jetable et de réinventer l'accessoire.
           Dans un marché où l'uniformité règne et où l'impact environnemental de l'industrie textile est colossal, 
           nous avons fait le choix de la créativité responsable.
           Notre mission est de donner une nouvelle vie à des jeans oubliés pour créer des sacs à main durables, audacieux et surtout, uniques.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div 
            className="w-72 h-72 border-8 border-white overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
            style={{ transform: 'rotate(-3deg)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-3deg)'}
          >
            <img src={Image1} alt="Atelier Denim bag" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Section 2 - Photo on left */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-20">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-100 pb-3 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-primary-100">
            Notre Engagement
          </h2>
          <p className="text-md md:text-lg lg:text-xl text-secondary-200 leading-relaxed">
            Notre modèle d'affaires est simple et puissant :
            transformer des jeans de seconde main,
            récupérés via dons ou friperies,
            en sacs artisanaux.
            Cette approche réduit non seulement nos coûts de production,
            nous permettant d'offrir des prix abordables,
            mais minimise surtout notre empreinte écologique.
            Nous normalisons la réutilisation des tissus,
            encourageant l'innovation dans chaque création.
          </p>
          <br></br>
          <p className="font-semibold text-secondary-200">Durabilité - Audace - Unicité</p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div 
            className="w-72 h-72 border-8 border-white overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
            style={{ transform: 'rotate(2deg)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(2deg)'}
          >
            <img src={Image2} alt="Sustainable denim crafting" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-20">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-100 pb-3 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-primary-100">
            Des Créations Originales et Abordables
          </h2>
          <p className="text-md md:text-lg lg:text-xl text-secondary-200 leading-relaxed">
            Nous nous distinguons de la concurrence en offrant un produit entièrement fait à la main et local, contrastant fortement avec les prix élevés, comme les sacs en jean à 250 $, et la production de masse.
            Nos sacs se déclinent en deux modèles distincts : le "Sac Genoux" et le "Sac Fesses" avec plus de rangement grâce aux poches et aux passants de ceinture. Grâce à la nature même du denim recyclé, aucun sac n'est identique. De plus, nos éditions limitées thématiques, agrémentées de broderies spéciales, garantissent que vous portez un accessoire que vous ne verrez nulle part ailleurs.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div 
            className="w-72 h-72 border-8 border-white overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
            style={{ transform: 'rotate(-2deg)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}
          >
            <img src={Image3} alt="Unique denim bag designs" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Section 4 - Photo on left with TWO OVERLAPPING photos */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-20">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-100 pb-3 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-primary-100">
            Notre Équipe
          </h2>
          <p className="text-md md:text-lg lg:text-xl text-secondary-200 leading-relaxed">
            Le succès d'Atelier Denim repose sur une équipe passionnée et structurée, dédiée à l'excellence à chaque étape de notre croissance. Nous sommes unis par notre vision commune : encourager la réutilisation des tissus et minimiser notre impact environnemental.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center items-center relative h-64">
          <div 
            className="w-56 h-56 border-8 border-white overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl absolute -left-4" 
            style={{ transform: 'rotate(5deg)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(5deg)'}
          >
            <img src={Image4} alt="Team member 1" className="w-full h-full object-cover" />
          </div>
          <div 
            className="w-56 h-56 border-8 border-white overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl absolute right-4" 
            style={{ transform: 'rotate(-5deg)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-5deg)'}
          >
            <img src={Image5} alt="Team member 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yapping