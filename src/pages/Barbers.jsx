import useFadeIn from '../hooks/useFadeIn'

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const barbers = [
  { name: 'Renzo Barrientos', photo: '/images/newimages/owner1.jpg', instagram: 'https://instagram.com', bookUrl: 'https://renzostylez.square.site' },
  { name: 'Randy Barrientos', photo: '/images/newimages/barber2.jpg', instagram: 'https://instagram.com', bookUrl: 'https://randycutz.square.site' },
]

export default function Barbers() {
  const pageRef = useFadeIn()

  return (
    <div className="barbers-page" ref={pageRef}>
      <img
        src="/images/barbers/fondourbano.jpg"
        alt=""
        className="barbers-bg"
      />
      <div className="page-content">
        <h1 className="fade-in">Prestige Barbers</h1>
        <div className="barbers-grid fade-in">
          {barbers.map((barber) => (
            <div key={barber.name} className="barber-card">
              <div className="barber-card-header">
                <h3>{barber.name}</h3>
                {/* <a
                  href={barber.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-link"
                  aria-label={`${barber.name} Instagram`}
                >
                  <InstagramIcon />
                </a> */}
              </div>
              <img
                src={barber.photo}
                alt={barber.name}
                className="barber-photo"
                loading="lazy"
              />
              <a
                href={barber.bookUrl}
                className="btn-book-barber"
              >
                BOOK NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
