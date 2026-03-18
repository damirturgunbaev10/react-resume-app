import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <nav className="navbar__container">
          <h1 className="nvabar__logo">My Info</h1>

          <ul className="navbar__ul">
            <li className="navbar__li">
              <a className="navbar__link" href="#about">About</a>
            </li>
            <li className="navbar__li">
              <a className="navbar__link" href="#skills">Skills</a>
            </li>
            <li className="navbar__li">
              <a className="navbar__link" href="#contact">Contact</a>
            </li>
          </ul>

          <button className="navbar__btn">Contact me</button>
        </nav>
      </header>

      <section className="intro" id="about">
        <div className="intro__container">
          <h1 className="intro__title">
            Hi, I'm Damir and I want to become a professional front end
            developer
          </h1>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="skills__container">
          <h2 className="skills__title">Skills</h2>
          <p className="skills__subtitle">Technologies I work with</p>

          <div className="skills__list">
            <div className="skills__item">
              <div className="skills__icon">
                <i className="ri-html5-line"></i>
              </div>
              <span className="skills__name">HTML</span>
              <p className="skills__description">
                Building structured and semantic web pages.
              </p>
            </div>

            <div className="skills__item">
              <div className="skills__icon">
                <i className="ri-css3-line"></i>
              </div>
              <span className="skills__name">CSS</span>
              <p className="skills__description">
                Creating responsive and modern UI designs.
              </p>
            </div>

            <div className="skills__item">
              <div className="skills__icon">
                <i className="ri-javascript-line"></i>
              </div>
              <span className="skills__name">JavaScript</span>
              <p className="skills__description">
                Adding interactivity and dynamic behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div></div>
      </section>

      <section className="contacts" id="contact">
        <div className="contacts__container">
          <h2 className="contacts__title">Contact Me</h2>
          <p className="contacts__subtitle">
            Feel free to reach out for collaboration or just a friendly hello
          </p>

          <div className="contacts__list">
            <a href="mailto:youremail@example.com" className="contacts__item">
              Email
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="contacts__item"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="contacts__item"
            >
              Instagramm
            </a>

            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noreferrer"
              className="contacts__item"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__left">
            <h3 className="footer__logo">Damir.dev</h3>
            <p className="footer__text">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="footer__center">
            <a href="#projects" className="footer__link">
              About
            </a>
            <a href="#about" className="footer__link">
              Projects
            </a>
            <a href="#contact" className="footer__link">
              Contacts
            </a>
          </div>

          <div className="footer__right">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              LinkedIn
            </a>
            <a href="mailto:youremail@example.com" className="footer__link">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
