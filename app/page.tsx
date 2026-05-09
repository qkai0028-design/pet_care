export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Fluffy Care Studio home">
            <span className="brand-mark">M</span>
            <span>Fluffy Care Studio</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">Care Standards</a>
            <a href="#pricing">Pricing</a>
            <a href="#booking">Book</a>
          </div>
          <a className="nav-cta" href="#booking">
            Book Grooming
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Pet grooming studio introduction">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                One-on-one gentle care · Separate cat and dog zones · Visible grooming process
              </p>
              <h1>Every bath should feel thoughtfully cared for.</h1>
              <p className="hero-text">
                From everyday baths to detailed styling, Fluffy Care Studio gives pets a calm,
                transparent, and detail-focused grooming experience. New clients receive a coat
                and skin check on arrival.
              </p>
              <div className="hero-actions">
                <a className="button" href="#booking">
                  Book Now
                </a>
                <a className="button secondary" href="#pricing">
                  View Packages
                </a>
              </div>
              <div className="hero-stats" aria-label="Studio highlights">
                <div className="stat">
                  <strong>45min</strong>
                  <span>Small dog bath from</span>
                </div>
                <div className="stat">
                  <strong>1v1</strong>
                  <span>Dedicated groomer throughout</span>
                </div>
                <div className="stat">
                  <strong>7</strong>
                  <span>Arrival wellness checks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="section-head">
              <h2>Every common grooming need, handled in one visit.</h2>
              <p>
                We tailor care around personality, coat volume, skin condition, and daily habits
                instead of forcing every pet into the same package.
              </p>
            </div>
            <div className="service-grid">
              <article className="card">
                <div>
                  <div className="card-icon">B</div>
                  <h3>Bath & Brush</h3>
                  <p>
                    Gentle bathing, drying, brushing, ear and eye cleaning, paw trimming, and a
                    basic care note.
                  </p>
                </div>
              </article>
              <article className="card">
                <div>
                  <div className="card-icon">S</div>
                  <h3>Style Trim</h3>
                  <p>
                    Breed-friendly styling for poodles, bichons, pomeranians, and more, with
                    comfort and movement in mind.
                  </p>
                </div>
              </article>
              <article className="card">
                <div>
                  <div className="card-icon">C</div>
                  <h3>Cat Care</h3>
                  <p>
                    Low-stress sessions, quiet appointment windows, and careful brushing for
                    sensitive or shy cats.
                  </p>
                </div>
              </article>
              <article className="card">
                <div>
                  <div className="card-icon">C</div>
                  <h3>Coat Therapy</h3>
                  <p>
                    Care advice and product pairings for matting, shedding, dryness, odor, and
                    mild flakes.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section-band">
          <div className="container split">
            <div
              className="feature-photo"
              role="img"
              aria-label="Bright and tidy pet grooming environment"
            />
            <div>
              <p className="eyebrow">CARE STANDARD</p>
              <h2>No rushing, no scaring, no rough handling. The pace follows your pet.</h2>
              <p>
                We first observe stress level, skin condition, ear odor, and mat locations, then
                choose the right water temperature, dryer strength, tools, and rest breaks. After
                each visit, you receive a care note for easy follow-up.
              </p>
              <div className="check-list">
                <div className="check">
                  <b>1</b>
                  <span>
                    Separate cat and dog cleaning areas, disinfected tools, and fresh towels for
                    every pet.
                  </span>
                </div>
                <div className="check">
                  <b>2</b>
                  <span>
                    Allergies, redness, wounds, and signs of discomfort are checked before bathing.
                  </span>
                </div>
                <div className="check">
                  <b>3</b>
                  <span>
                    After grooming, we share notes on matting, ears, nails, and skin condition.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="container">
            <div className="section-head">
              <h2>Clear grooming packages with transparent pricing.</h2>
              <p>
                Final pricing may vary by size, coat volume, and matting. Send a photo before
                booking for a quick estimate.
              </p>
            </div>
            <div className="price-grid">
              <article className="price-card">
                <span className="tag">Everyday Clean</span>
                <h3>Fresh Bath</h3>
                <p>Best for short coats, small pets, or regular maintenance visits.</p>
                <div className="price">
                  $88 <small>from</small>
                </div>
                <ul className="includes">
                  <li>Gentle bath and dry</li>
                  <li>Ear and eye cleaning</li>
                  <li>Paw pad and sanitary trim</li>
                </ul>
              </article>
              <article className="price-card featured">
                <span className="tag">Most Popular</span>
                <h3>Full Grooming</h3>
                <p>A complete studio care session for most cats and dogs.</p>
                <div className="price">
                  $168 <small>from</small>
                </div>
                <ul className="includes">
                  <li>Everything in Fresh Bath</li>
                  <li>Detangling and coat shaping</li>
                  <li>Care note and home tips</li>
                </ul>
              </article>
              <article className="price-card">
                <span className="tag">Styled Finish</span>
                <h3>Haircut & Styling</h3>
                <p>For pets needing a shaped look, touch-up trim, or seasonal haircut.</p>
                <div className="price">
                  $238 <small>from</small>
                </div>
                <ul className="includes">
                  <li>Full Grooming included</li>
                  <li>Breed style or detail trim</li>
                  <li>Photo record and next-visit advice</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section-band">
          <div className="container">
            <div className="section-head">
              <h2>From check-in to pickup, you always know what is happening.</h2>
              <p>
                Our process keeps waiting and back-and-forth to a minimum, while helping first-time
                visitors settle in more easily.
              </p>
            </div>
            <div className="steps">
              <article className="step">
                <h3>Booking Chat</h3>
                <p>We confirm size, age, personality, matting, and recent skin condition.</p>
              </article>
              <article className="step">
                <h3>Arrival Check</h3>
                <p>Your groomer checks ears, eyes, nails, skin, and coat, then explains timing.</p>
              </article>
              <article className="step">
                <h3>Gentle Groom</h3>
                <p>Water temperature, dryer strength, tools, and breaks are adjusted as needed.</p>
              </article>
              <article className="step">
                <h3>Care Feedback</h3>
                <p>You receive a care note, suggested grooming cycle, and home brushing tips.</p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container trust-grid">
            <div className="trust-panel">
              <p className="eyebrow eyebrow-light">WHY US</p>
              <h2>Made for people who treat pets like family.</h2>
              <p>
                A clean coat is only the beginning. We care about comfort, early skin observations,
                and advice that owners can actually use at home.
              </p>
            </div>
            <div className="trust-list">
              <div className="trust-item">
                <strong>Quiet Slots Available</strong>
                <p>Reduce stimulation for shy, senior, or first-time grooming pets.</p>
              </div>
              <div className="trust-item">
                <strong>Traceable Products</strong>
                <p>
                  Products are selected by skin condition, and sensitive pets may bring their own.
                </p>
              </div>
              <div className="trust-item">
                <strong>Clear Communication</strong>
                <p>
                  If we see heavy matting, skin concerns, or resistance, we contact you before
                  proceeding.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="section-band">
          <div className="container">
            <div className="booking">
              <div>
                <p className="eyebrow">BOOKING</p>
                <h2>Book a calmer grooming visit.</h2>
                <p>
                  Leave your details and we will confirm availability, estimated time, and pricing
                  during business hours. Open Tuesday to Sunday, 10:00 AM-8:00 PM.
                </p>
              </div>
              <form className="booking-form">
                <input type="text" name="name" placeholder="Your name" aria-label="Your name" />
                <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" />
                <select name="service" aria-label="Choose a service" defaultValue="">
                  <option value="">Choose a service</option>
                  <option>Fresh Bath</option>
                  <option>Full Grooming</option>
                  <option>Haircut & Styling</option>
                  <option>Cat Care</option>
                </select>
                <button className="button" type="submit">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>Fluffy Care Studio · Pet Bathing & Grooming</span>
          <span>18 Garden Road · 400-880-6620</span>
        </div>
      </footer>
    </>
  );
}
