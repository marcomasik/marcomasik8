import { scrollToSection } from '../../utils/scrollToSection';

interface MenuBarProps {
  isVisible: boolean;
}

export const MenuBar = ({ isVisible }: MenuBarProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    window.history.pushState(null, '', `/${sectionId === 'start' ? '' : sectionId}`);
  };

  return (
    <nav className={`menu-bar-container ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="menu-bar-container-inner">
        <div className="menu-bar-logo">MARCO MASIK</div>
        <ul className="menu-bar-list">
          <li><a href="#works" onClick={(e) => handleClick(e, 'works')}>WORKS</a></li>
          <li><a href="#cv" onClick={(e) => handleClick(e, 'cv')}>CV</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};
