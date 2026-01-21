import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { basketStorage } from './basketStorage'

const SacJean = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleAddToBasket = (productType: 'genou' | 'fesses') => {
    const products = {
      genou: {
        id: 1,
        name: "Sac Genou",
        price: 10.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=400&h=400&fit=crop"
      },
      fesses: {
        id: 2,
        name: "Sac Fesses",
        price: 10.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
      }
    }

    basketStorage.addItem(products[productType])
    navigate('/cart')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#2C77DA',
      fontFamily: 'Oswald, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      position: 'relative'
    }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          color: '#F0BD0E',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.2s ease',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#ffffff'
          e.currentTarget.style.transform = 'translateX(-3px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#F0BD0E'
          e.currentTarget.style.transform = 'translateX(0)'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32"
          height="32"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
      </button>

      {/* Title */}
      <h1 style={{
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#F0BD0E',
        marginBottom: '60px',
        textAlign: 'center'
      }}>
        Choisissez Votre Sac
      </h1>

      {/* Cards Container */}
      <div style={{
        display: 'flex',
        gap: '40px',
        maxWidth: '1400px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Sac Genou Card */}
        <div
          onMouseEnter={() => setHoveredCard('genou')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => hoveredCard === 'genou' && handleAddToBasket('genou')}
          style={{
            background: '#154C94',
            borderRadius: '24px',
            padding: '40px',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '2px solid rgba(240, 189, 14, 0.3)',
            boxShadow: hoveredCard === 'genou' 
              ? '0 20px 60px rgba(0, 18, 72, 0.5)' 
              : '0 8px 24px rgba(0, 18, 72, 0.3)',
            transform: hoveredCard === 'genou' ? 'scale(1.05)' : 'scale(1)',
            width: hoveredCard === 'genou' ? '500px' : '400px',
            height: hoveredCard === 'genou' ? '600px' : '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            background: `repeating-linear-gradient(
              45deg,
              #F0BD0E,
              #F0BD0E 10px,
              transparent 10px,
              transparent 20px
            )`
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: hoveredCard === 'genou' ? '56px' : '48px',
              fontWeight: 'bold',
              color: '#F0BD0E',
              marginBottom: '20px',
              transition: 'all 0.4s ease'
            }}>
              Sac Genou
            </h2>

            <div style={{
              height: hoveredCard === 'genou' ? '200px' : '100px',
              opacity: hoveredCard === 'genou' ? 1 : 0.7,
              transition: 'all 0.4s ease',
              overflow: 'hidden'
            }}>
              <p style={{
                fontSize: '18px',
                color: '#ffffff',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Un sac compact et élégant, parfait pour transporter l'essentiel avec style. 
                Fabriqué à partir de denim recyclé de haute qualité.
              </p>

              {hoveredCard === 'genou' && (
                <div style={{
                  animation: 'fadeIn 0.3s ease-in',
                  marginTop: '20px'
                }}>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '8px'
                  }}>
                    ✓ Dimensions: 25cm x 20cm
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '8px'
                  }}>
                    ✓ Poche intérieure
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}>
                    ✓ Sangle ajustable
                  </p>
                </div>
              )}
            </div>
          </div>

          <div style={{
            position: 'relative',
            zIndex: 1,
            borderTop: '2px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: hoveredCard === 'genou' ? '48px' : '40px',
                fontWeight: 'bold',
                color: '#F0BD0E',
                transition: 'all 0.4s ease'
              }}>
                $10.00
              </span>
              <div style={{
                padding: '12px 24px',
                background: hoveredCard === 'genou' ? '#F0BD0E' : 'rgba(240, 189, 14, 0.2)',
                color: hoveredCard === 'genou' ? '#001248' : '#F0BD0E',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.4s ease',
                border: hoveredCard === 'genou' ? 'none' : '2px solid #F0BD0E'
              }}>
                {hoveredCard === 'genou' ? 'Acheter →' : 'Voir plus'}
              </div>
            </div>
          </div>
        </div>

        {/* Sac Cul Card */}
        <div
          onMouseEnter={() => setHoveredCard('fesses')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => hoveredCard === 'fesses' && handleAddToBasket('fesses')}
          style={{
            background: '#154C94',
            borderRadius: '24px',
            padding: '40px',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '2px solid rgba(240, 189, 14, 0.3)',
            boxShadow: hoveredCard === 'cul' 
              ? '0 20px 60px rgba(0, 18, 72, 0.5)' 
              : '0 8px 24px rgba(0, 18, 72, 0.3)',
            transform: hoveredCard === 'cul' ? 'scale(1.05)' : 'scale(1)',
            width: hoveredCard === 'cul' ? '500px' : '400px',
            height: hoveredCard === 'cul' ? '600px' : '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            background: `repeating-linear-gradient(
              -45deg,
              #F0BD0E,
              #F0BD0E 10px,
              transparent 10px,
              transparent 20px
            )`
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: hoveredCard === 'cul' ? '56px' : '48px',
              fontWeight: 'bold',
              color: '#F0BD0E',
              marginBottom: '20px',
              transition: 'all 0.4s ease'
            }}>
              Sac Fesses
            </h2>

            <div style={{
              height: hoveredCard === 'cul' ? '200px' : '100px',
              opacity: hoveredCard === 'cul' ? 1 : 0.7,
              transition: 'all 0.4s ease',
              overflow: 'hidden'
            }}>
              <p style={{
                fontSize: '18px',
                color: '#ffffff',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                Un sac audacieux et authentique qui réutilise les poches et la ceinture de jeans vintage. Fabriqué à la main avec du denim recyclé pour un look urbain unique.
              </p>

              {hoveredCard === 'cul' && (
                <div style={{
                  animation: 'fadeIn 0.3s ease-in',
                  marginTop: '20px'
                }}>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '8px'
                  }}>
                    ✓ Dimensions: 30cm x 25cm
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '8px'
                  }}>
                    ✓ Poches arrière intactes
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}>
                    ✓ Passants de ceinture comme détails
                  </p>
                </div>
              )}
            </div>
          </div>

          <div style={{
            position: 'relative',
            zIndex: 1,
            borderTop: '2px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: hoveredCard === 'cul' ? '48px' : '40px',
                fontWeight: 'bold',
                color: '#F0BD0E',
                transition: 'all 0.4s ease'
              }}>
                $10.00
              </span>
              <div style={{
                padding: '12px 24px',
                background: hoveredCard === 'cul' ? '#F0BD0E' : 'rgba(240, 189, 14, 0.2)',
                color: hoveredCard === 'cul' ? '#001248' : '#F0BD0E',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.4s ease',
                border: hoveredCard === 'cul' ? 'none' : '2px solid #F0BD0E'
              }}>
                {hoveredCard === 'cul' ? 'Acheter →' : 'Voir plus'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}

export default SacJean