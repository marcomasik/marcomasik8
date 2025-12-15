import "./work-item-content.scss";

export const MuskinnContent = () => {
    return (
        <div className="work-item-expanded-content">
            <div className="work-item-expanded-case-study-container">
                <div className="work-item-header">
                    <h1>Müskinn</h1>
                    <p className="work-item-subtitle">Freelance Web Development Project</p>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>Project Overview</h3>
                    <p>
                        Custom website  and webshop development for Müskinn, a design studio 
                        focusing on conceptual backpacks and accessories, focusing on modern design 
                        and user experience. Built with responsive design principles and 
                        optimized performance.
                    </p>
                </div>

                <div className="work-item-case-study-blob work-item-case-study-blob--with-video">
                    <div className="work-item-case-study-text">
                        <h3>Technologies Used</h3>
                        <ul>
                            <li>HTML5 & CSS3</li>
                            <li>WordPress, PHP</li>
                            <li>JavaScript (ES6+)</li>
                            <li>Responsive Design</li>
                            <li>Performance Optimization</li>
                        </ul>
                    </div>
                    <div className="work-item-case-study-video">
                        <video 
                            src="/videos/muskinn2.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="work-item-video"
                        />
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>Key Features</h3>
                    <ul>
                        <li>Mobile-first responsive design</li>
                        <li>Fast loading times</li>
                        <li>SEO optimized</li>
                        <li>Cross-browser compatibility</li>
                        <li>Webshop functionality</li>
                        <li>Custom theme development</li>
                    </ul>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>Results</h3>
                    <p>
                        Delivered a modern, fast-loading webshop that improved user engagement 
                        and provided a solid foundation for the client's online presence.
                    </p>
                </div>
            </div>
        </div>
    );
};
