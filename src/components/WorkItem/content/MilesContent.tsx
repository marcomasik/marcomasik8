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
                </div>
            </div>

    );
};  