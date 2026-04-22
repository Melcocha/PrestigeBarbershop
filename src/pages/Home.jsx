import useFadeIn from '../hooks/useFadeIn'

const StarIcon = () => (
  <span className="star">★</span>
)

export default function Home() {
  const pageRef = useFadeIn()

  return (
    <div ref={pageRef}>
      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/newimages/local6.jpg"
        >
          <source
            src="https://videos.pexels.com/video-files/3993025/3993025-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>More Than A Haircut.<br />It&apos;s <span>Prestige.</span></h1>
          <p>Coldest Fades in Ranson, WV</p>
          <a href="/barbers" className="btn-book">BOOK NOW</a>
          <p className="hero-walkins">WALK-INS WELCOME</p>
        </div>
      </section>

      {/* ===== WELCOME SECTION ===== */}
      <section className="welcome-section fade-in">
        <p className="section-subtitle">Welcome To</p>
        <h2>Prestige Barbershop</h2>
        <p className="welcome-text">
          Located at 809 N. Mildred Street in Ranson, WV — Prestige Barbershop is where sharp cuts
          meet street culture. Owned by Renzo Barrientos, we built this shop for those who take their
          look seriously. Fresh fades, clean lines, and real craft — every single time.
        </p>
        <div className="welcome-stats">
          <div className="stat-item">
            <div className="stat-number">$35</div>
            <div className="stat-label">Starting Price</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5.0</div>
            <div className="stat-label">Our Standard</div>
            <div className="star-rating">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="features-grid fade-in">
        <div className="feature-card">
          <img src="/images/newimages/local2.jpg" alt="Prestige Barbershop interior" />
        </div>
        <div className="feature-card mascot">
          <img src="/images/barbers/imagenesurbanas.jpg" alt="Renzo Barrientos — Owner" />
        </div>
        <div className="feature-card">
          <img src="/images/newimages/local6.jpg" alt="Barbershop stations" />
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services-section fade-in">
        <img src="/images/newimages/local4.jpg" alt="" className="services-bg" />
        <div className="services-overlay" />

        <div className="services-header">
          <p className="section-subtitle">What We Do</p>
          <h2 className="services-headline">Sharp Skills. <span>Street Style.</span></h2>
        </div>

        <div className="services-cards-row">
          <div className="service-icon-card">
            <span className="service-number">01</span>
            <h3>Haircuts</h3>
            <p>Modern &amp; classic cuts for every style</p>
          </div>
          <div className="service-icon-card">
            <span className="service-number">02</span>
            <h3>Beard Trims</h3>
            <p>Clean lines, sharp edges, full shaves</p>
          </div>
          <div className="service-icon-card">
            <span className="service-number">03</span>
            <h3>Fades &amp; Designs</h3>
            <p>Custom fades, line-ups &amp; art</p>
          </div>
          <div className="service-icon-card">
            <span className="service-number">04</span>
            <h3>Hot Towel Shave</h3>
            <p>Classic premium shave experience</p>
          </div>
        </div>

        <div className="services-signature">
          <span>RENZO BARRIENTOS</span>
          <div className="sig-divider" />
          <span>YOUR BARBER · YOUR STANDARD</span>
        </div>

        <div className="services-photo-strip">
          <div className="service-img-card">
            <img src="/images/newimages/local5.jpg" alt="Prestige Barbershop" />
          </div>
          <div className="service-img-card">
            <img src="/images/newimages/local1.jpg" alt="Inside Prestige Barbershop" />
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="pricing-section fade-in">
        <p className="section-subtitle">Straight Forward</p>
        <h2>Standard Prices</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-icon">✂</div>
            <h3>Men&apos;s Haircut</h3>
            <div className="price-amount">$35</div>
          </div>
          <div className="price-card featured">
            <div className="price-icon">✂</div>
            <h3>Haircut <span>&amp; Beard</span></h3>
            <div className="price-amount">$45</div>
          </div>
          <div className="price-card">
            <div className="price-icon">✂</div>
            <h3>Kids&apos; Cut <span>Under 10</span></h3>
            <div className="price-amount">$30</div>
          </div>
        </div>
      </section>

      {/* ===== OUR WORK SECTION ===== */}
      <section className="our-work-section fade-in">
        <p className="section-subtitle">Fresh Out The Chair</p>
        <h2>Our Work</h2>
        <div className="our-work-grid">
          <div className="work-card">
            <img src="/images/newimages/haircut1.jpg" alt="Fresh cut by Prestige Barbershop" />
          </div>
          <div className="work-card">
            <img src="/images/newimages/haircut2.jpg" alt="Clean fade by Prestige Barbershop" />
          </div>
          <div className="work-card">
            <img src="/images/newimages/haircut3.jpg" alt="Precision cut by Prestige Barbershop" />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="testimonial-section fade-in">
        <div className="testimonial-card">
          <div className="testimonial-stars">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <p className="testimonial-text">
            &quot;Best shop in Ranson, no cap. Renzo don&apos;t miss — every cut is clean, every fade is sharp.
            Can&apos;t see myself going anywhere else. This is where the real ones go.&quot;
          </p>
          <p className="testimonial-author">— Marcus T.</p>
        </div>
      </section>
    </div>
  )
}
