import "./contact-section.scss";

export const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <div className="contact-container-inner">
        <h2>Contact</h2>
          <div className="contact-container-content">
          <img src="/images/avatar_marco.png" alt="Contact" />
            <div className="contact-container-inner-left">
              <p>Get in touch with me here:</p>
              <p>hello@marcomasik.com</p>
              <div className="contact-container-inner-left-links">
                <a href="http://linkedin.com/in/marco-masik/" target="_blank" rel="noopener noreferrer">
                  <div className="contact-container-inner-left-links-icon">
                    <img src="/images/logos/linkedin_logo.png" alt="LinkedIn" />
                  </div>
                  LinkedIn
                </a>
                <a href="https://github.com/marco-masik" target="_blank" rel="noopener noreferrer">
                  <div className="contact-container-inner-left-links-icon">
                    <img src="/images/logos/gitHub_logo.png" alt="GitHub" />
                  </div>
                  GitHub
                </a>
              </div>
            </div>
            <div className="contact-container-inner-right">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
