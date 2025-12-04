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
          </div>

        </div>
      </div>
    );
  };