import "./idealo-content.scss";

export const IdealoContent = () => {
    return (
      <div className="work-item-expanded-content">
        <h4>Frontend Engineer // Idealo Internet GmbH, Berlin</h4>
        <ul className="work-item-expanded-content-header">
          <li>Java</li>
          <li>React</li>
          <li>Astro.js</li>
          <li>AWS</li>
          <li>AB Testing</li>
          <li>UX</li>
        </ul>
        <div className="work-item-expanded-case-study-container">

          <div className="work-item-case-study-blob">
            <h5>Context 🧩</h5>
            <div className="case-study-blob-row">
              <p>
                Idealo aimed to expand its price comparison platform by adding Local Offers: showing prices from nearby shops without reducing online conversions.
              </p>
              <div className="case-study-blob-image-container">
                <img src="/images/axel_springen_neubau.jpeg" alt="Idealo Building" />
              </div>
            </div>
            <ul>
              <li>Legacy stack: JSP, jQuery, Java Spring Boot</li>
              <li>Privacy-friendly location detection</li>
              <li>Onboarding local vendors</li>
            </ul>
        
          </div>
          <div className="work-item-case-study-blob">
            <h5>My Role 🧐</h5>
              
              <p>Sole Frontend Engineer in a cross-functional team.</p>
              <ul>
                <li>Developed prototypes, A/B tests, and production features  </li>
                <li>Migrated frontend from JSP/jQuery to React & Astro.js  </li>
                <li>Supported AWS migration and UX planning  </li>
                <li>Collaborated with stakeholders across departments  </li>
              </ul>
          </div>
          <div className="work-item-case-study-blob">
            <h5>Solution</h5>
            <div className="case-study-blob-row">
              <div className="case-study-blob-image-container">
                <img src="/images/localOffers.png" alt="Local Offers" />
              </div>
              <p>We worked iteratively with Kanban and A/B tests 
              to protect Idealo’s core KPIs while improving UX.</p>
            </div>
            <h6>Some of the highlights:</h6>
            <ul>
                <li>Local Offers integrated into main offer page (New / Used / Local tabs) </li>
                <li>Map view with adjustable radius (5–50 km) </li>
                <li>IP, browser, and manual postcode detection  </li>
                <li>Ordered by price for consistency  </li>
                <li>Refactored code, removed jQuery, simplified CI/CD integration</li>
              </ul>
          </div>

          <div className="work-item-case-study-blob">
            <h5>Impact 📈</h5>
            <p>Feature evolved into a permanent, profitable Idealo product.</p>

            <h6>Number of lead-outs to local shops (aka 'LOcal Lead Outs'  aka LOLOs):</h6>
            <div className="case-study-impact-container">
            <div className="year-column">
                <div className="year">Year</div>
                <div className="value">LOLOs</div>
              </div>
              <div className="year-column">
                <div className="year">2021</div>
                <div className="value">200k</div>
              </div>
              <div className="year-column">
                <div className="year">2022</div>
                <div className="value">400k</div>
              </div>
              <div className="year-column">
                <div className="year">2023</div>
                <div className="value">550k</div>
              </div>
              <div className="year-column">
                <div className="year">2024</div>
                <div className="value">730k</div>
              </div>
            </div>
            <p>Yes. Our main KPIs abrevation was LOLOs :) It was a fun team!</p>
            <p>User feedback praised the usefulness of the feature.</p>
          </div>

          <div className="work-item-case-study-blob">
            <h5>Reflection 🤓</h5>
            <p>Working on Local Offers taught me how to deliver
              value in a legacy system at massive scale.  
              I grew into a frontend-focused full-stack engineer 
              with strong product sense and ownership mindset.
            </p>
          </div>
          

        </div>
      </div>
    );
  };