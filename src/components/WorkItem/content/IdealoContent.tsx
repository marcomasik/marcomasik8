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

        </div>
      </div>
    );
  };