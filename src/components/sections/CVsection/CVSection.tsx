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
            <ul>
              <li>
                Developed and enhanced the Local Offers
                feature, integrating it into idealo’s core
                price comparison application
              </li>
              <li>
                Created a map-based interface with
                location detection to display offers around
                the users’ location
              </li>
            </ul> 
          </div>
          <div className="cv-work-experience">
            <h3>Miles Mobility GmbH // Web Developer</h3>
            <h4>2020 July - 2020 December</h4>
            <ul>
              <li>
              Planning, development, and
              deployment of a new website for Miles Mobility,
              a prominent car-sharing company in Germany
              </li>
              <li>
                Built a headless CMS using Contentful and
                Gatsby.js, enabling dynamic features and
                faster marketing content updates
              </li>
            </ul> 
          </div>
          <div className="cv-work-experience">
            <h3>Plunet GmbH // Software Tester</h3>
            <h4>2015 September - 2020 June</h4>
            <ul>
              <li>
                Conducted testing of the translation management tool of Plunet 
                to ensure functionality,
                performance, and user experience
              </li>
              <li>
                Developed and maintained test plans and
                test cases to validate software functionality
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
