import "./work-item-content.scss";

export const GolemContent = () => {
    return (
        <div className="work-item-expanded-content">
            <div className="work-item-expanded-case-study-container">
                <div className="work-item-header">
                    <h1>Golem</h1>
                    <p className="work-item-subtitle">Web Developer</p>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>Project Overview</h3>
                    <p>
                        Golem is a leading German IT newspaper. I was tasked with coding 
                        HTML and CSS prototypes based on provided designs to test how 
                        articles could be presented on their online platform.
                    </p>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>My Role & Responsibilities</h3>
                    <ul>
                        <li>Coded HTML and CSS prototypes from provided designs</li>
                        <li>Implemented draft layouts for article presentation</li>
                        <li>Focused on technical implementation of design concepts</li>
                    </ul>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>Technologies Used</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Responsive Design</li>
                        <li>Prototype Development</li>
                    </ul>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>Results</h3>
                    <p>
                        Successfully delivered functional HTML/CSS prototypes that helped 
                        test different article layout concepts. Some elements from these 
                        prototypes gradually found their way into the newspaper's layout.
                    </p>
                </div>
            </div>
        </div>
    );
};
