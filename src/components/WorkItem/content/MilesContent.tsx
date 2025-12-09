import "./work-item-content.scss";

export const MilesContent = () => {
    return (
            <div className="work-item-expanded-content">
                <h4>Web Developer // Miles Mobility GmbH, Berlin</h4>
                <div className="work-item-expanded-case-study-container">
                    <div className="work-item-case-study-blob">
                        <h5>Context 🚗</h5>
                        <div className="case-study-blob-row">
                        <p>
                            Miles Mobility is one of Germany’s largest independent car-sharing companies. 
                            Notable for being one of the few not backed by a car manufacturer. Operating across many German cities, 
                            its unique pay per distance model sets it apart from competitors.
                            As the company scaled, the marketing team needed a new website that could handle dynamic campaigns, achieve top SEO scores, 
                            and reflect the bold, youthful identity of the brand.                    
                        </p>
                        <div className="case-study-blob-image-container">
                            <img src="/images/MILES_Image_Fleet_AudiA1-1.jpg" alt="Miles Mobility Car" />
                        </div>
                        </div>
                    </div>
                    <div className="work-item-case-study-blob">
                        <h5>My role 👩‍💻</h5>
                        <div className="case-study-blob-row">
                            <p>I joined the marketing team as the only web developer, taking 
                                ownership from planning to deployment. 
                                While officially responsible for the website, 
                                I also contributed to campaign ideas and marketing discussions.
                            </p>
                            <p>The environment was fast-paced, 
                                startup-style, and full of ownership. 
                                I had to plan my own milestones, communicate with 
                                designers and stakeholders, and deliver a complete modern 
                                website within a short timeframe.
                            </p>
                        </div>
                    </div>
                    <div className="case-study-blob-image-container">
                        <img src="/images/miles-cars.png" alt="Miles Mobility Car" />
                    </div>
                    <div className="work-item-case-study-blob">
                        <h5>Solution 💡</h5>
                        <div className="case-study-blob-row">
                            <p>The old WordPress website limited design flexibility and animation capabilities. 
                                I researched and proposed a modern decoupled setup with full creative freedom, 
                                high performance, and easy content management.
                            </p>
                            <ol><h6>Key requirements:</h6>
                                <li>Develop freely with React components and animations.</li>
                                <li>Create reusable templates for campaigns.</li>
                                <li>Provide a code-free CMS for the marketing team.</li>
                                <li>Achieve top Lighthouse and SEO performance.</li>
                            </ol>
                            <ul><h6>Chosen architecture:</h6>
                                <li>Framework: Gatsby.js (React + SSR)</li>
                                <li>CMS: Contentful (Headless CMS + GraphQL API)</li>
                                <li>Hosting: Vercel (CDN + instant deploys)</li>
                            </ul>
                        </div>
                        <div className="case-study-blob-row">
                            <p>This decoupled frontend + content architecture empowered both developers and marketers. The website became fast and flexible. </p>
                        </div>
                    </div>
                    <div className="work-item-case-study-blob">
                        <div className="case-study-blob-row">
                            <div className="case-study-blob-image-container">
                                <h5>Before</h5>
                                <img src="/images/miles-mobile-before.png" alt="Miles Website Mobile View Before" />
                            </div>
                            <div className="case-study-blob-image-container">
                                <h5>After</h5>
                                <img src="/images/miles-mobile-after.png" alt="Miles Website Mobile View After" />
                            </div>
                        </div>
                    </div>
                    <div className="work-item-case-study-blob">
                        <h5>Impact 📈</h5>
                        <div className="impact-grid">
                            <div className="impact-row">
                                <div className="kpi-item">
                                    <div className="kpi-label">SEO (Lighthouse)</div>
                                    <div className="kpi-result">100/100</div>
                                </div>
                            </div>
                            
                            <div className="impact-row">
                                <div className="kpi-item">
                                    <div className="kpi-label">Google Ranking</div>
                                    <div className="kpi-result">Top result for "Miles Car Sharing"</div>
                                </div>
                            </div>
                            
                            <div className="impact-row">
                                <div className="kpi-item">
                                    <div className="kpi-label">Campaign Launch Speed</div>
                                    <div className="kpi-result">&lt; 2 days average</div>
                                </div>
                            </div>
                            
                            <div className="impact-row">
                                <div className="kpi-item">
                                    <div className="kpi-label">Architecture</div>
                                    <div className="kpi-result">Decoupled SSR + CMS</div>
                                </div>
                            </div>
                            
                            <div className="impact-row">
                                <div className="kpi-item">
                                    <div className="kpi-label">Team Efficiency</div>
                                    <div className="kpi-result">Non-devs manage content easily</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};  