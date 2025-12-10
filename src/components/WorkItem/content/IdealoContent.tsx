import "./work-item-content.scss";

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
                Idealo is the biggest price comparison platform in Germany. Their websites have nearly 100 million monthly visitors.
                To expand their business and to provide a full coverage of available prices, the company experimented with a new feature, called Local Offers: 
                showing prices of products from nearby shops to the users location.
              </p>
              <div className="case-study-blob-image-container">
                <img src="/images/axel_springen_neubau.jpeg" alt="Idealo Building" />
              </div>
            </div>
            <p>The team where I worked on Local Offers was a cross-functional team of 1 sale manager, 1 data scientist, 1 UX designer, 2-3 developers, 1 product owner and 1 project manager.</p>
            <h6>Some of the challenges:</h6>
            <ul>
              <li>Building a new feature in a legacy system</li>
              <li>Legacy stack: JSP, jQuery, Java Spring Boot</li>
              <li>Maintaining the profitability of the existing platform</li>
              <li>Privacy-friendly location detection</li>
              <li>Building up an inventory of local shops</li>
            </ul>
        
          </div>
          <div className="work-item-case-study-blob">
            <h5>My Role 🧐</h5>
              
              <p>As explained above our cross functional team had 2-3 developers. 
                  Usually the setup was one senior developer and two regular developers, one backend and one frontend.
                  I was given full responsibility of the frontend development of the feature.
                  We had no blueprint for how to manage our team, so we had to figure it out as we went along.
                  As part of this freedom we also exchanged ideas and feedbacks about the areas where our other team members were working (data science, sales, UX). 
                  Sometimes we did not have senior developer and/or backend developer on the team, so I was responsible for the entire development process. 
                  I also helped to teach the junior developers the basics of coding.
              </p>
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