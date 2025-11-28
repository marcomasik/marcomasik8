interface MenuBarProps {
  isVisible: boolean;
}

export const MenuBar = ({ isVisible }: MenuBarProps) => (
  <nav className={`menu-bar-container ${isVisible ? 'visible' : 'hidden'}`}>
    <div className="menu-bar-container-inner">
      <div className="menu-bar-logo">MARCO MASIK</div>
      <ul className="menu-bar-list">
        <li><a href="#works">WORKS</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </nav>
);
