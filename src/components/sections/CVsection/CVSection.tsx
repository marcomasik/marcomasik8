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
                    Developed and owned the frontend of the feature "local offers", in a
                    high-load, customer-facing application, that is comparing prices of
                    product in the german market
                  </li>
                  <li>
                    Scaled it from experiment to core product with an average yearly
                    growth rate on our main KPI (clicks that leads to shop page) of 54%
                  </li>
                  <li>
                    Tech stack: Java Spring Boot services generating offer lists, embedded
                    TypeScript micro frontends built with Astro.js and React, all deployed
                    on AWS (EKS, containerized microservices, managed databases, and
                    supporting infrastructure). 
                  </li>
                  <li>
                    Implemented event tracking with Snowplow and ran A/B tests 
                    using GrowthBook to optimize 
                    features, previously using SiteSpect for experimentation
                  </li>
                  <li>
                    Managed CI/CD pipelines and AWS infrastructure for 
                    multiple applications supporting local offers systems
                  </li>
                  <li>
                    Mentored junior developers, performed technical interviews for job
                    candidates and collaborated cross functionally with UX, data science,
                    and sales colleagues to deliver product requirements
                  </li>
                </ul> 
              </div>
              <div className="cv-work-experience">
                <h3>Miles Mobility GmbH // Web Developer</h3>
                <h4>2020 July - 2020 December</h4>
                <ul>
                  <li>
                    Planned, developed, and deployed a new official 
                    website for Miles Mobility, a prominent 
                    carsharing company in Germany
                  </li>
                  <li>
                    Analyzed user behavior using Hotjar (now Contentsquare), 
                    leveraging heatmaps and session recordings to optimize 
                    user flows
                  </li>
                  <li>
                    Built a headless CMS using Contentful and Gatsby.js, unlocking interactive frontend 
                    capabilities with JavaScript and faster marketing content updates
                  </li>
                  <li>Participated in marketing meetings and provided technical insights</li>
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
              <h2 className="cv-education-title">Employer references</h2>
              <div className="cv-employer-references">
                <ul>
                  <li>
                    <a href="/documents/Idealo_Abschlusszeugnis-Masik-Marco.pdf" download>
                      <div className="cv-document-icon">📄</div>
                      Idealo GmbH - Reference Letter
                    </a>
                  </li>
                  <li>
                    <a href="/documents/Miles_Marco_Masik_Reference letter.pdf" download>
                      <div className="cv-document-icon">📄</div>
                      Miles Mobility GmbH - Reference Letter
                    </a>
                  </li>
                  <li>
                    <a href="/documents/Plunet_Arbeitszeugnis_Marco_Masik.pdf" download>
                      <div className="cv-document-icon">📄</div>
                      Plunet GmbH - Reference Letter
                    </a>
                  </li>
                </ul>
              </div>
              <h2 className="cv-education-title">Education</h2>
              <div className="cv-work-experience">
                <h3>Beuth Hochschule für Technik Berlin</h3>
                <h4>2014 - 2017 Medieninformatik Bachelor of Science</h4>
                <ul>
                  <li>
                    Studied Media Informatics at the Beuth Hochschule für Technik Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv-work-tech-stack-container">
              <h3>Tech Stack</h3>
              <ul>
                {/* Js world */}
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
                    <img src="/images/logos/leaflet_logo.png" alt="Leaflet.js logo" />
                  </div>
                  Leaflet.js
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/jquery_logo.png" alt="jQuery logo" />
                  </div>
                  jQuery
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/vite_logo.png" alt="Vite logo" />
                  </div>
                  Vite
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/webpack_logo.png" alt="Webpack logo" />
                  </div>
                  Webpack
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/express_logo.png" alt="Express.js logo" />
                  </div>
                  Express.js
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/graphQL_logo.png" alt="GraphQL logo" />
                  </div>
                  GraphQL
                </li>
                {/* CSS world */}
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/sass_logo.png" alt="SASS logo" />
                  </div>
                  SASS/SCSS
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/tailwind_logo.png" alt="Tailwind logo" />
                  </div>
                  Tailwind CSS
                </li>
                {/* PHP Wordpress world */}
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/php_logo.png" alt="PHP logo" />
                  </div>
                  PHP
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/wordpress_logo.png" alt="Wordpress logo" />
                  </div>
                  Wordpress
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/mysql_logo.png" alt="MySQL logo" />
                  </div>
                  MySQL
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/laravel_logo.png" alt="Laravel logo" />
                  </div>
                  Laravel
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/woocommerce_logo.png" alt="Woo Commerce logo" />
                  </div>
                  Woo Commerce
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/shopify_logo.png" alt="Shopify logo" />
                  </div>
                  Shopify
                </li>
                {/* Backend world */}
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/java_logo.png" alt="Java logo" />
                  </div>
                  Java
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/java-spring-boot_logo.png" alt="Spring Boot logo" />
                  </div>
                  Spring Boot
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/maven_logo.png" alt="Maven logo" />
                  </div>
                  Maven
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/aws_logo.png" alt="AWS logo" />
                  </div>
                  AWS
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/google_cloud_logo.png" alt="Google Cloud logo" />
                  </div>
                  Google Cloud
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/mongodb_logo.png" alt="MongoDB logo" />
                  </div>
                  MongoDB
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/docker_logo.png" alt="Docker logo" />
                  </div>
                  Docker
                </li>
                {/* Analytics & Experimentation */}
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/snowplow_logo.png" alt="Snowplow logo" />
                  </div>
                  Snowplow
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/growthbook_logo.png" alt="GrowthBook logo" />
                  </div>
                  GrowthBook
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/hotjar_logo.png" alt="Hotjar logo" />
                  </div>
                  Hotjar
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/sitespect_logo.png" alt="SiteSpect logo" />
                  </div>
                  SiteSpect
                </li>
                {/* Tools world */}
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/cursor_logo.png" alt="Cursor logo" />
                  </div>
                  Cursor
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/chatgpt_logo.png" alt="ChatGPT logo" />
                  </div>
                  ChatGPT
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/gemini_logo.png" alt="Gemini logo" />
                  </div>
                  Gemini
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/claude_logo.png" alt="Claude logo" />
                  </div>
                  Claude
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/perplexity_logo.png" alt="Perplexity logo" />
                  </div>
                  Perplexity
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/github_logo.png" alt="GitHub logo" />
                  </div>
                  GitHub
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/figma_logo.png" alt="Figma logo" />
                  </div>
                  Figma
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/jira_logo.png" alt="JIRA logo" />
                  </div>
                  JIRA
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/teams_logo.png" alt="Teams logo" />
                  </div>
                  Teams
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/intellij_logo.png" alt="IntelliJ logo" />
                  </div>
                  IntelliJ
                </li>
                <li>
                  <div className="cv-work-tech-stack-icon">
                    <img src="/images/logos/vscode_logo.png" alt="VSCode logo" />
                  </div>
                  VSCode
                </li>
              </ul>
            </div>
          </div>
          <div id="my-cv-to-download">
            <a  href="/documents/Marco_Masik_CV.pdf" download>
              📄 Download my CV as a pdf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
