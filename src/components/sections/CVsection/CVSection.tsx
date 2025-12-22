import "./cv-section.scss";

export const CVSection = () => {
  return (
    <section id="cv" className="section">
      <div className="cv-container">
        <div className="cv-container-inner">
          <h2>Work experience</h2>
          <div className="cv-work-content-container">
            <div className="cv-work-experiences-container">
              <div className="cv-work-experience">
                <h3>Idealo GmbH // Frontend Engineer</h3>
                <h4>2021 April - 2025 July</h4>
                <ul>
                  <li>
                    Developed and enhanced the "local offers"
                    feature, integrating it into idealo’s core
                    price comparison application
                  </li>
                  <li>
                    Created a map based interface with
                    location detection to display offers around
                    the users’ location
                  </li>
                  <li>
                    Managed CI/CD pipelines and AWS infrastructure for 
                    multiple applications supporting local offers systems
                  </li>
                  <li>
                    Mentored junior developers and 
                    collaborated cross functionally with UX, data science, 
                    and sales teams to deliver product requirements
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
                    a prominent carsharing company in Germany
                  </li>
                  <li>Analysing and comparing technologies for future website development</li>
                  <li>
                    Built a headless CMS using Contentful and
                    Gatsby.js, enabling dynamic features and
                    faster marketing content updates
                  </li>
                  <li>Partcipate in marketing meetings and provide technical insights</li>
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
              <div className="cv-work-experience">
                <h3>Freelance web developer</h3>
                <h4>2014 October - 2020 June</h4>
                <ul>
                  <li>
                    Developed and maintained websites for clients
                    using WordPress, HTML, CSS, and JavaScript  
                  </li>
                  <li>
                    Implemented responsive design and SEO best practices
                    to improve website performance and user experience
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv-work-tech-stack-container">
              <h3>Tech Stack</h3>
              <ul>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/react_logo.png" alt="React logo" />
                  </div>
                  React
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/next_logo.png" alt="Next.js logo" />
                  </div>
                  Next.js
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/node_logo.png" alt="Node.js logo" />
                  </div>
                  Node.js
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/javascript_logo.png" alt="JavaScript logo" />
                  </div>
                  JavaScript
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/typescript_logo.png" alt="TypeScript logo" />
                  </div>
                  TypeScript  
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/astro_logo.png" alt="Astro.js logo" />
                  </div>
                  Astro.js
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/gatsby_logo.png" alt="Gatsby.js logo" />
                  </div>
                  Gatsby.js
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/something.png" alt="Something logo" />
                  </div>
                  Something
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/something.png" alt="Something logo" />
                  </div>
                  Something
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/something.png" alt="Something logo" />
                  </div>
                  Something
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/something.png" alt="Something logo" />
                  </div>
                  Something
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/something.png" alt="Something logo" />
                  </div>
                  Something
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/something.png" alt="Something logo" />
                  </div>
                  Something
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/something.png" alt="Something logo" />
                  </div>
                  Something
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/something.png" alt="Something logo" />
                  </div>
                  Something
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
