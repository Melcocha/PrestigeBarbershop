import useFadeIn from '../hooks/useFadeIn'

export default function Store() {
  const pageRef = useFadeIn()

  return (
    <div className="store-page" ref={pageRef}>
      <h1 className="fade-in">Prestige Barbershop</h1>
      <div className="store-coming-soon fade-in">
        <img
          src="/images/barbers/fondourbano2.jpg"
          alt="Legacy Mascot"
          className="store-mascot"
        />
        <p>Coming Soon!</p>
        <p style={{ fontSize: '16px', color: '#888', maxWidth: '500px' }}>
          We&apos;re working on bringing you exclusive Prestige Barbershop
          merchandise. Stay tuned for apparel, grooming products, and more!
        </p>
      </div>
    </div>
  )
}
