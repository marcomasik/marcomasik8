export const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <div className="contact-container-inner">
        <h2>Contact</h2>
          <div className="contact-container-inner-left">
            <p>Get in touch with me here:</p>
            <div className="contact-container-inner-left-links">
              <a href="https://www.linkedin.com/in/marco-masik-8787878787/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/marco-masik" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.instagram.com/marco.masik/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="contact-container-inner-right">
            <img src="/images/contact-image.png" alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};
