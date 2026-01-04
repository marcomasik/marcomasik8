import { Textfit } from 'react-textfit';
import { scrollToSection } from '../../../utils/scrollToSection';
import "./start-section.scss";

export const StartSection = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    window.history.pushState(null, '', `/${sectionId}`);
  };

  return (
    <section id="start" className="section">
      <div className="start-page-container">
        <div className="video-box-container">
          <video id="ocean-waves-video" src="/videos/ocean_waves.mp4" autoPlay playsInline muted loop />
          <div className="text-container">
            <Textfit mode="single" min={16} max={120} className="title-desktop">
              <h1 className="title">MARCO&nbsp;MASIK</h1>
            </Textfit>
            <h1 className="title title-mobile">
              MARCO<br />MASIK
            </h1>
            <ul className="start-page-menu">
              <Textfit mode="single" min={8} max={120}>
                <li><a href="#works" onClick={(e) => handleClick(e, 'works')}>WORKS</a></li>
                <li><a href="#cv" onClick={(e) => handleClick(e, 'cv')}>CV</a></li>
                <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>CONTACT</a></li>
              </Textfit>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
