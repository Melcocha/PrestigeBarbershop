import { useState } from 'react'
import useFadeIn from '../hooks/useFadeIn'

export default function Contact() {
  const pageRef = useFadeIn()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="contact-page" ref={pageRef}>
      <h1 className="fade-in">Hit Us Up</h1>

      <div className="contact-grid fade-in">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-phone">Phone</label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What can we do for you?"
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Find Us</h2>

          <div className="contact-detail">
            <h4>Address</h4>
            <p>809 North Mildred Street, Suite 3<br />Ranson, WV 25438</p>
          </div>

          <div className="contact-detail">
            <h4>Phone</h4>
            <a href="tel:3043509365">(304) 350-9365</a>
          </div>

          <div className="contact-detail">
            <h4>Email</h4>
            <a href="mailto:prestigebarbershopShort.93@gmail.com">prestigebarbershopShort.93@gmail.com</a>
          </div>

          <div className="contact-detail">
            <h4>Hours</h4>
            <div className="hours-grid">
              <span className="day">Monday</span><span>9:00 AM – 6:00 PM</span>
              <span className="day">Tuesday</span><span>9:00 AM – 6:00 PM</span>
              <span className="day">Wednesday</span><span>9:00 AM – 6:00 PM</span>
              <span className="day">Thursday</span><span>9:00 AM – 6:00 PM</span>
              <span className="day">Friday</span><span>9:00 AM – 6:00 PM</span>
              <span className="day">Saturday</span><span>8:00 AM – 4:00 PM</span>
              <span className="day">Sunday</span><span>Closed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map fade-in">
        <iframe
          src="https://www.google.com/maps?q=809+N+Mildred+St,+Ranson,+WV+25438&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Prestige Barbershop Location"
        />
      </div>
    </div>
  )
}
