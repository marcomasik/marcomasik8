import "./work-item-content.scss";

export const IdealoContent = () => {
    return (
      <div className="work-item-expanded-content">
        <h4>Frontend Engineer // Idealo Internet GmbH, Berlin</h4>
        <ul className="work-item-expanded-content-header">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Astro.js</li>
          <li>React</li>
          <li>Java</li>
          <li>AWS</li>
          <li>AB Testing</li>
          <li>UX</li>
        </ul>
        <div className="work-item-expanded-case-study-container">

          <div className="work-item-case-study-blob">
            <h5>Context 🧩</h5>
            <div id="idealo-context" className="case-study-blob-row">
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
              <div className="case-study-blob-row--paragraphs-under-each-other">
                <p>We worked iteratively with Kanban, as it seemed the best way to manage the cross functional team. We conducted A/B tests 
                  to protect Idealo’s core KPIs (that makes the money) while improving our feature. 
                </p>
                <div id="idealo-solutions-paragraphs-and-images" className="case-study-blob-row--images-next-to-a-paragraph">
                  <div className="case-study-blob-row--image-text-row">
                    <div className="image-resizer-container">
                        <img src="/images/Local_Offers_Overview.png" alt="Local Offers on offer page" />  
                    </div>
                    <p>Our feature was accessible through
                        a new tab on the main price comparison page (offer page).
                    </p>
                  </div>
                    <div className="case-study-blob-row--image-text-row">
                      <div className="image-resizer-container">
                        <img src="/images/Local_Offer_Sidebar.png" alt="Local Offers in the sidebar" /> 
                      </div>
                      <p>Another way to access it was through the top widget in the sidebar,
                        that displayed cheap local alternative products near the user's location.
                      </p>
                    </div>
                    <div className="case-study-blob-row--image-text-row">
                      <div className="image-resizer-container">
                        <img src="/images/Local_Offers_map.png" alt="Local Offers map view" /> 
                      </div>
                      <p>Once opened the users saw a map with the local shops 
                          and their prices, and the same query displayed in a list view. The map was interactive, 
                          with buttons to adjust the radius of the search.
                      </p>
                    </div>
                </div>
                <p>
                  The map was powered by React and Leaflet.js library, embedded in the page through JSPs. 
                  The logic to fetch the database was written in Java Spring Boot. We started to work on migrating the frontend to Typescript and Astro.js.
                  All of this was on the same repository as the offer page with the online and used offers. 
                  We also had separated applications with their own repos to match IP addresses 
                  with postcodes, to store local shops, and to update the local inventory. These applications were managed on AWS.
                </p>
                <p>
                  To make sure not to break anything, every new feature had to be rolled out with unit tests and integration tests.
                  We managed our internal CI/CD pipeline and eventually took over maintenance of the offer page's 
                  pipeline since most of our features were deployed there.
                </p>
              </div>
            </div>
            <h6>Some of the highlights:</h6>
            <ul>
                <li>Local Offers integrated into main offer page of Idealo </li>
                <li>Map view built in React and Leaflet.js library </li>
                <li>IP, browser, and manual postcode detection to find the user's location </li>
                <li>Refactored code, removed jQuery, maintained CI/CD integration</li>
                <li>Separated applications to match IP addresses with postcodes, to store local shops, and to update the local inventory</li>
                <li>Managed on AWS</li>
              </ul>
          </div>

          <div className="work-item-case-study-blob">
            <h5>Impact 📈</h5>
            <p>The feature evolved into a permanent, profitable product of Idealo. By seeing the local prices, 
              the users have a broader sense of the market and are more motivated to commit to a purchase.
              Even tho all local offers click generated revenue, it also helped to increase the overall revenue of the offer page.
            </p>

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
            <p>We received many positive feedback over the years while conducting qualitative user tests with the users.</p>
          </div>

          <div className="work-item-case-study-blob">
            <h5>Reflection 🤓</h5>
            <p>Working on Local Offers taught me how to deliver
              value in a legacy system at a massive scale.  
              I grew into a frontend-focused full-stack engineer, as I had to take over responsibilities of the backend developers.
              I also gained strong product sense and ownership mindset, because I proactively got involved in other areas of the product development.
              Luckily we had a great team, that supported us and gave us the freedom to experiment and to fail and to learn from it.
            </p>
          </div>
          

        </div>
      </div>
    );
  };