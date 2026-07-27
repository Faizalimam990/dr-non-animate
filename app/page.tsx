"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    title: "Asthma & Allergy Care",
    text: "Personalised plans to understand triggers, improve control, and help you breathe with confidence.",
    tag: "Breathing",
    image: "/images/patient-consultation.jpg",
  },
  {
    title: "COPD Management",
    text: "Long-term respiratory support focused on symptoms, lung function, rehabilitation, and quality of life.",
    tag: "Chronic care",
    image: "/images/doctor-stethoscope.jpg",
  },
  {
    title: "Lung Function Testing",
    text: "Thoughtful clinical evaluation supported by pulmonary function tests and evidence-led interpretation.",
    tag: "Diagnostics",
    image: "/images/chest-imaging.jpg",
  },
  {
    title: "Chest Infection & TB",
    text: "Timely assessment, clear guidance, and monitored treatment for chest infections and tuberculosis.",
    tag: "Treatment",
    image: "/images/lung-xray.jpg",
  },
];

const testimonials = [
  {
    quote:
      "The consultation felt calm and unhurried. Every step of the treatment plan was explained in language our family could understand.",
    name: "Patient A.",
    detail: "Sample review — replace with verified patient feedback",
  },
  {
    quote:
      "I finally understood what was triggering my breathing problems and how to manage them day to day. The follow-up was equally reassuring.",
    name: "Patient B.",
    detail: "Sample review — replace with verified patient feedback",
  },
  {
    quote:
      "A professional, compassionate experience from the first appointment. The care plan was practical, clear, and tailored to my needs.",
    name: "Patient C.",
    detail: "Sample review — replace with verified patient feedback",
  },
];

const conditions = [
  "Asthma",
  "COPD",
  "Tuberculosis",
  "Sleep apnoea",
  "Interstitial lung disease",
  "Bronchiectasis",
  "Pleural disease",
  "Smoking cessation",
];

export default function Home() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nextService = () =>
    setServiceIndex((current) => (current + 1) % services.length);
  const previousService = () =>
    setServiceIndex(
      (current) => (current - 1 + services.length) % services.length,
    );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="topbar">
        <div className="container topbar-inner">
          <p>Specialist respiratory care, centred around you</p>
          <a href="#appointment">Request an appointment</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Dr Vijay Kumar home">
            <span className="brand-mark" aria-hidden="true">
              VK
            </span>
            <span>
              <strong>Dr Vijay Kumar</strong>
              <small>Pulmonology & Chest Care</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#conditions" onClick={() => setMenuOpen(false)}>
              Conditions
            </a>
            <a href="#stories" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
            <a
              className="nav-cta"
              href="#appointment"
              onClick={() => setMenuOpen(false)}
            >
              Book consultation
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                Consultant Pulmonologist & Chest Physician
              </p>
              <h1>
                Better breathing begins with <em>better understanding.</em>
              </h1>
              <p className="hero-text">
                Personalised respiratory care for asthma, COPD, sleep and
                complex lung conditions—with clear answers at every step.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#appointment">
                  Book a consultation <span aria-hidden="true">→</span>
                </a>
                <a className="text-link" href="#services">
                  Explore treatments <span aria-hidden="true">↘</span>
                </a>
              </div>
              <div className="trust-row" aria-label="Care values">
                <div>
                  <strong>Evidence-led</strong>
                  <span>Treatment plans</span>
                </div>
                <div>
                  <strong>Patient-first</strong>
                  <span>Consultations</span>
                </div>
                <div>
                  <strong>End-to-end</strong>
                  <span>Respiratory care</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src="/images/lung-xray.jpg"
                  alt="A clinician reviewing a chest X-ray"
                  width="1600"
                  height="2400"
                />
              </div>
              <div className="hero-note">
                <span className="pulse-dot" aria-hidden="true" />
                <p>
                  <strong>Focused respiratory expertise</strong>
                  From diagnosis through long-term care
                </p>
              </div>
              <div className="lung-watermark" aria-hidden="true">
                02
              </div>
            </div>
          </div>
        </section>

        <section className="statement-strip" aria-label="Practice philosophy">
          <div className="container statement-grid">
            <p>Clear diagnosis.</p>
            <p>Considered treatment.</p>
            <p>Confident breathing.</p>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="section-heading">
              <p className="eyebrow">Meet your specialist</p>
              <h2>Clinical precision, with a deeply human approach.</h2>
            </div>
            <div className="about-copy">
              <p className="lead">
                Dr Vijay Kumar&apos;s approach brings together careful
                listening, modern respiratory diagnostics, and treatment plans
                designed around each patient&apos;s everyday life.
              </p>
              <p>
                Whether you are managing a long-term condition or seeking
                clarity about new symptoms, every consultation is built around
                one goal: helping you understand your health and move forward
                with confidence.
              </p>
              <a className="text-link dark" href="#appointment">
                Start a conversation <span aria-hidden="true">→</span>
              </a>
            </div>
            <figure className="about-image">
              <img
                src="/images/clinic-interior.jpg"
                alt="A bright, modern clinical consultation space"
                width="1600"
                height="1063"
                loading="lazy"
              />
              <figcaption>
                A calm setting for considered, confidential care
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="services-head">
              <div className="section-heading">
                <p className="eyebrow">Specialist services</p>
                <h2>Complete respiratory care, thoughtfully delivered.</h2>
              </div>
              <div className="slider-controls">
                <button
                  type="button"
                  onClick={previousService}
                  aria-label="Previous service"
                >
                  ←
                </button>
                <span>
                  {String(serviceIndex + 1).padStart(2, "0")} /{" "}
                  {String(services.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={nextService}
                  aria-label="Next service"
                >
                  →
                </button>
              </div>
            </div>

            <div className="service-stage" aria-live="polite">
              <article className="service-feature">
                <div className="service-image">
                  <img
                    src={services[serviceIndex].image}
                    alt=""
                    width="1600"
                    height="1067"
                    loading="lazy"
                  />
                  <span>{services[serviceIndex].tag}</span>
                </div>
                <div className="service-info">
                  <span className="service-number">
                    {String(serviceIndex + 1).padStart(2, "0")}
                  </span>
                  <h3>{services[serviceIndex].title}</h3>
                  <p>{services[serviceIndex].text}</p>
                  <a href="#appointment">
                    Discuss this service <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>

              <div className="service-list" aria-label="Choose a service">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    className={index === serviceIndex ? "active" : ""}
                    onClick={() => setServiceIndex(index)}
                    aria-pressed={index === serviceIndex}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="conditions section" id="conditions">
          <div className="container conditions-grid">
            <div className="conditions-intro">
              <p className="eyebrow">Areas of care</p>
              <h2>A considered approach to every breath.</h2>
              <p>
                Symptoms can overlap. A thorough assessment helps connect the
                clues and create a care plan that fits the whole picture.
              </p>
              <a className="button button-light" href="#appointment">
                Request an assessment
              </a>
            </div>
            <div className="condition-list">
              {conditions.map((condition, index) => (
                <div key={condition}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{condition}</p>
                  <span aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="care-journey section">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Your care journey</p>
              <h2>Clarity at every stage.</h2>
            </div>
            <div className="journey-grid">
              <article>
                <span>01</span>
                <h3>Listen</h3>
                <p>
                  A focused consultation to understand symptoms, history, and
                  what matters to you.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Investigate</h3>
                <p>
                  Appropriate respiratory testing and imaging, chosen with
                  purpose—not by default.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Plan</h3>
                <p>
                  A clear treatment pathway, explained simply and adapted as
                  your needs evolve.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="stories section" id="stories">
          <div className="container stories-grid">
            <div className="story-image">
              <img
                src="/images/patient-consultation.jpg"
                alt="A clinician listening to a patient during a consultation"
                width="1600"
                height="1067"
                loading="lazy"
              />
            </div>
            <div className="story-content">
              <p className="eyebrow">Patient stories</p>
              <div className="quote-mark" aria-hidden="true">
                “
              </div>
              <blockquote>{testimonials[testimonialIndex].quote}</blockquote>
              <div className="story-author">
                <div>
                  <strong>{testimonials[testimonialIndex].name}</strong>
                  <span>{testimonials[testimonialIndex].detail}</span>
                </div>
                <div className="slider-controls light-controls">
                  <button
                    type="button"
                    onClick={() =>
                      setTestimonialIndex(
                        (testimonialIndex - 1 + testimonials.length) %
                          testimonials.length,
                      )
                    }
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setTestimonialIndex(
                        (testimonialIndex + 1) % testimonials.length,
                      )
                    }
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="story-progress" aria-hidden="true">
                {testimonials.map((testimonial, index) => (
                  <span
                    className={index === testimonialIndex ? "active" : ""}
                    key={testimonial.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="appointment section" id="appointment">
          <div className="container appointment-grid">
            <div>
              <p className="eyebrow">Book an appointment</p>
              <h2>Let&apos;s take the next step towards easier breathing.</h2>
              <p>
                Share a few details and the clinic team can get back to you to
                arrange a suitable consultation.
              </p>
              <div className="appointment-aside">
                <span>For urgent breathing difficulty</span>
                <strong>Please contact your nearest emergency service.</strong>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  Full name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Phone number
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    placeholder="+91"
                  />
                </label>
              </div>
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                />
              </label>
              <label>
                How can we help?
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option value={service.title} key={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other respiratory concern">
                    Other respiratory concern
                  </option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about your concern"
                />
              </label>
              <button className="button button-primary form-button" type="submit">
                Request appointment <span aria-hidden="true">→</span>
              </button>
              <p className="form-note">
                This form is a design preview and is not yet connected to a
                clinic inbox.
              </p>
              {submitted && (
                <p className="form-success" role="status">
                  Thank you. Your request has been captured in this preview.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark" aria-hidden="true">
                VK
              </span>
              <span>
                <strong>Dr Vijay Kumar</strong>
                <small>Pulmonology & Chest Care</small>
              </span>
            </a>
            <p>
              Specialist respiratory care built around clarity, compassion,
              and confidence.
            </p>
          </div>
          <div>
            <strong>Explore</strong>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#conditions">Conditions</a>
            <a href="#stories">Testimonials</a>
          </div>
          <div>
            <strong>Appointments</strong>
            <p>Clinic details and consultation hours can be added here.</p>
            <a href="#appointment">Request an appointment →</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Dr Vijay Kumar. All rights reserved.</p>
          <p>
            Open-license photography from{" "}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              Unsplash
            </a>{" "}
            and{" "}
            <a href="https://pexels.com" target="_blank" rel="noreferrer">
              Pexels
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}
