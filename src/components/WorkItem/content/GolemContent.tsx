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
                        Golem is a leading German IT newspaper. I was tasked with creating 
                        prototypes to explore new article layouts and improve the reading 
                        experience for their online platform.
                    </p>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>My Role & Responsibilities</h3>
                    <ul>
                        <li>Developed HTML and CSS prototypes for article layouts</li>
                        <li>Created draft designs for improved article presentation</li>
                        <li>Focused on readability and user experience optimization</li>
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
                        Successfully delivered multiple prototype layouts that demonstrated 
                        improved article presentation and enhanced readability for the 
                        German IT news platform.
                    </p>
                </div>
            </div>
        </div>
    );
};
