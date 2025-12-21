import "./cv-section.scss";

export const CVSection = () => {
  return (
    <section id="cv" className="section">
      <div className="cv-container">
        <div className="cv-container-inner">
          <h2>Work experience</h2>
          <div className="cv-work-experience">
            <h3>Idealo GmbH // Frontend Engineer</h3>
            <h4>2021 April - 2025 July</h4>
            <p>Developed and enhanced the Local Offers
feature, integrating it into idealo’s core
price comparison application
</p>
<p>Created a map-based interface with
location detection to display offers around
the users’ location</p>
          </div>
          <div className="cv-work-experience">
            <h3>Miles Mobility GmbH // Web Developer</h3>
            <h4>2020 July - 2020 December</h4>
          </div>
          <div className="cv-work-experience">
            <h3>Plunet GmbH // Software Tester</h3>
            <h4>2015 September - 2020 June</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
