import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  Instagram,
  Menu,
  X,
  Sparkles,
  Scissors,
  Heart,
  Flower2,
  MapPin,
  Clock,
  MessageCircle,
  ChevronDown,
  Star,
} from "lucide-react";
import { salon, whatsappUrl } from "./config";
import "./styles.css";
const nav = [
  ["Services", "services"],
  ["Our story", "about"],
  ["The gallery", "gallery"],
  ["Visit us", "contact"],
];
function Brand() {
  return (
    <a href="#home" className="brand" aria-label={`${salon.name} home`}>
      <span className="brand-mark">{salon.initials}</span>
      <span>
        {salon.name}
        <small>{salon.tagline}</small>
      </span>
    </a>
  );
}
function App() {
  const [menu, setMenu] = useState(false);
  const [notice, setNotice] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    document.documentElement.lang = salon.locale;
    document.documentElement.dir = salon.direction;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (notice) dialog.current?.showModal();
    else dialog.current?.close();
  }, [notice]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  const book = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (salon.isDemo) {
      e.preventDefault();
      setNotice(true);
    }
  };
  const Booking = ({
    className = "",
    children = (
      <>
        Book via WhatsApp <ArrowUpRight size={17} />
      </>
    ),
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => (
    <a
      href={whatsappUrl}
      onClick={book}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  );
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([name, id]) => (
              <a href={`#${id}`} key={id}>
                {name}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a
              className="instagram-head"
              href={salon.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram (demo profile)"
            >
              <Instagram size={18} />
            </a>
            <Booking className="header-book">
              Book an appointment <ArrowUpRight size={15} />
            </Booking>
            <button
              className="menu-button"
              aria-label={menu ? "Close navigation" : "Open navigation"}
              aria-expanded={menu}
              aria-controls="mobile-nav"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menu && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {nav.map(([name, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setMenu(false)}>
                {name}
                <ArrowUpRight size={18} />
              </a>
            ))}
            <Booking className="button">Book via WhatsApp</Booking>
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero" id="home">
          <img
            className="hero-image"
            src={salon.images.hero.src}
            alt={salon.images.hero.alt}
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">
              <span /> YOUR MOMENT. YOUR BEAUTY.
            </p>
            <h1>
              The art of feeling
              <br />
              <em>beautiful.</em>
            </h1>
            <p className="hero-description">
              Thoughtful beauty. Exceptional care.
              <br />A little time for yourself, beautifully spent.
            </p>
            <div className="hero-buttons">
              <Booking className="button">
                Book via WhatsApp <ArrowUpRight size={17} />
              </Booking>
              <a href="#services" className="text-link">
                Explore services <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>A BEAUTY SANCTUARY IN KUWAIT</span>
            <a href="#services">
              SCROLL TO DISCOVER <ChevronDown size={14} />
            </a>
            <span>MADE FOR YOU, ALWAYS</span>
          </div>
          <div className="hero-stamp">
            THE BEAUTY
            <br />
            <i>of being you.</i>
          </div>
        </section>
        <div className="intro-line">
          <span>INDIVIDUAL BEAUTY</span>
          <i>✧</i>
          <span>THOUGHTFUL RITUALS</span>
          <i>✧</i>
          <span>EXCEPTIONAL CARE</span>
          <i>✧</i>
          <span>A MOMENT FOR YOU</span>
        </div>
        <section className="section services" id="services">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">01 / OUR EXPERTISE</p>
              <h2>
                Beauty, in every <em>detail.</em>
              </h2>
            </div>
            <p>
              Little rituals. Beautiful transformations.
              <br />
              Discover care tailored to your individuality.
            </p>
          </div>
          <div className="service-grid">
            {salon.services.map((s, i) => (
              <a
                href={whatsappUrl}
                onClick={book}
                target="_blank"
                rel="noreferrer"
                className="service-card reveal"
                key={s.name}
              >
                <div className="service-image">
                  <img src={s.image} alt={s.alt} loading="lazy" />
                  <span className="service-index">0{i + 1}</span>
                  <span className="round-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <div className="service-title">
                  <h3>{s.name}</h3>
                </div>
                <p>{s.description}</p>
                <small>{s.detail}</small>
              </a>
            ))}
          </div>
          <p className="service-note">
            Every appointment begins with you.{" "}
            <Booking>
              Let’s find your perfect treatment <ArrowUpRight size={13} />
            </Booking>
          </p>
        </section>
        <section className="about" id="about">
          <div className="about-photo reveal">
            <img
              src={salon.images.about.src}
              alt={salon.images.about.alt}
              loading="lazy"
            />
            <div className="photo-caption">
              A SPACE TO SLOW DOWN. A MOMENT TO SHINE.
            </div>
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">02 / THE WEBORA PHILOSOPHY</p>
            <h2>
              More than beauty.
              <br />
              <em>A feeling.</em>
            </h2>
            <p>
              We believe the most beautiful thing you can be is yourself. Our
              salon is a space to pause, feel cared for, and reconnect with your
              own kind of beauty.
            </p>
            <p>
              From the first consultation to the finishing touch, every detail
              is considered. Personal attention, thoughtful treatments, and an
              unhurried atmosphere — all centered on you.
            </p>
            <div className="signature">Beautifully, yours.</div>
            <a href="#contact" className="text-link">
              Step inside our world <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="section gallery" id="gallery">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">03 / A GLIMPSE INSIDE</p>
              <h2>
                A little inspiration.
                <br />
                <em>A lot of beauty.</em>
              </h2>
            </div>
            <a
              href={salon.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              <Instagram size={17} /> Follow our story{" "}
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="gallery-grid">
            {salon.gallery.map((p, i) => (
              <figure
                className={`gallery-item gallery-${i} reveal`}
                key={p.src}
              >
                <img src={p.src} alt={p.alt} loading="lazy" />
                <figcaption>
                  <span>{p.label}</span>
                  <ArrowUpRight size={20} />
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="demo-caption">
            A visual moodboard · Demonstration photography, not salon portfolio
            work.
          </p>
        </section>
        <section className="why section">
          <div className="why-intro reveal">
            <p className="eyebrow">THE DIFFERENCE IS IN THE FEELING</p>
            <h2>
              Considered care.
              <br />
              <em>Uncompromising beauty.</em>
            </h2>
          </div>
          <div className="benefits">
            {[
              {
                icon: Sparkles,
                title: "A premium experience",
                text: "Thoughtful touches and attentive care, from your arrival to your final reveal.",
              },
              {
                icon: Scissors,
                title: "Passionate specialists",
                text: "A professional approach, a creative eye, and a love for the details.",
              },
              {
                icon: Heart,
                title: "Uniquely personal",
                text: "Treatments shaped around your preferences, your routine, and your beauty.",
              },
              {
                icon: Flower2,
                title: "Room to unwind",
                text: "A welcoming sanctuary where you can slow down and simply enjoy the moment.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div className="benefit reveal" key={title}>
                <Icon size={25} strokeWidth={1} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section testimonials">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">04 / KIND WORDS</p>
              <h2>
                Moments worth <em>sharing.</em>
              </h2>
            </div>
            <span className="placeholder-pill">ILLUSTRATIVE TESTIMONIALS</span>
          </div>
          <div className="testimonial-grid">
            {[
              "A space that makes you feel cared for, with every little detail thoughtfully considered.",
              "The kind of appointment you look forward to. Calm, personal, and beautifully unhurried.",
              "From the warm welcome to the final touch, such a lovely moment of time for myself.",
            ].map((quote, i) => (
              <article className="quote reveal" key={quote}>
                <div className="stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Star key={j} size={12} fill="currentColor" />
                  ))}
                </div>
                <blockquote>“{quote}”</blockquote>
                <p>
                  <span>0{i + 1}</span> Example client{" "}
                  <small>PLACEHOLDER REVIEW</small>
                </p>
              </article>
            ))}
          </div>
          <p className="demo-caption">
            Sample copy for layout purposes only. Replace with verified client
            reviews before launch.
          </p>
        </section>
        <section className="contact section" id="contact">
          <div className="contact-copy reveal">
            <p className="eyebrow">05 / YOUR NEXT BEAUTIFUL MOMENT</p>
            <h2>
              Make time
              <br />
              <em>for yourself.</em>
            </h2>
            <p>
              A fresh look. A little self-care. A special occasion.
              <br />
              Your beautiful moment begins with a conversation.
            </p>
            <Booking className="button">
              Let’s book your visit <ArrowUpRight size={17} />
            </Booking>
            <small className="contact-demo">
              Demo template · Contact details are placeholders.
            </small>
          </div>
          <div className="contact-details reveal">
            <div>
              <MapPin size={20} />
              <div>
                <h3>Find your sanctuary</h3>
                <p>
                  {salon.address.map((l) => (
                    <React.Fragment key={l}>
                      {l}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <a
                  className="text-link"
                  href={salon.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore the area on Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div>
              <Clock size={20} />
              <div>
                <h3>A time that suits you</h3>
                {salon.openingHours.map((h) => (
                  <p className="hours" key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.hours}</span>
                  </p>
                ))}
              </div>
            </div>
            <div>
              <Instagram size={20} />
              <div>
                <h3>Keep in touch</h3>
                <a href={salon.instagramUrl} target="_blank" rel="noreferrer">
                  {salon.instagramHandle} <ArrowUpRight size={13} />
                </a>
                <p className="phone">
                  WhatsApp: +{salon.whatsappNumber}{" "}
                  {salon.isDemo && "(placeholder)"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <Brand />
          <p>
            A little luxury.
            <br />
            An entirely personal experience.
          </p>
          <nav aria-label="Footer navigation">
            {nav.map(([name, id]) => (
              <a href={`#${id}`} key={id}>
                {name}
              </a>
            ))}
          </nav>
          <a
            href={salon.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {salon.name}. Beauty salon
            demonstration template.
          </span>
          <span>
            Website by{" "}
            <a href="#home">
              Webora Studio <ArrowUpRight size={11} />
            </a>
          </span>
        </div>
      </footer>
      <Booking className="floating-whatsapp">
        <MessageCircle size={24} />
        <span className="sr-only">Book via WhatsApp</span>
      </Booking>
      <dialog
        aria-labelledby="booking-dialog-title"
        ref={dialog}
        onCancel={() => setNotice(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setNotice(false);
        }}
      >
        <button
          className="dialog-close"
          aria-label="Close dialog"
          onClick={() => setNotice(false)}
        >
          <X size={21} />
        </button>
        <p className="eyebrow">WEBORA STUDIO / DEMONSTRATION</p>
        <h2 id="booking-dialog-title">
          Your next beautiful
          <br />
          <em>moment awaits.</em>
        </h2>
        <p>
          This is a salon website template. The WhatsApp number is a
          placeholder, so bookings are not yet available.
        </p>
        <p>
          Explore our services and inspiration in the meantime. A live salon
          version will connect you directly with its booking team.
        </p>
        <button className="button" onClick={() => setNotice(false)}>
          Continue exploring <ArrowRight size={16} />
        </button>
      </dialog>
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
