import "./work-item-content.scss";

export const KMonitorContent = () => {
    return (
        <div className="work-item-expanded-content">
            <h4>Web Developer // K-Monitor</h4>
            <div className="work-item-expanded-case-study-container">
                <div className="work-item-case-study-blob">
                    <h5>Context 🔍</h5>
                    <div className="case-study-blob-row">
                        <p>
                            K-Monitor is a non-profit organization dedicated to researching corruption 
                            in Hungary. Their comprehensive database contains information and links to 
                            newspaper articles about wealthy individuals and politicians who have 
                            numerous companies and use taxpayers' money for personal enrichment. 
                            The platform serves as a crucial resource for transparency and accountability.
                        </p>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>My Role 👩‍💻</h5>
                    <div className="case-study-blob-row">
                        <p>
                            I worked as a web developer on this project, utilizing LESS (CSS preprocessor) 
                            within a systematically built design guideline. I collaborated closely with 
                            the UX designer to create an intuitive user interface for the corruption 
                            database. The project used a custom PHP framework, providing flexibility 
                            for the complex data relationships and search functionality required.
                        </p>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>Solution 💡</h5>
                    <div className="case-study-blob-row">
                        <ul>
                            <li>Developed user interface using LESS/SCSS</li>
                            <li>Worked with systematic design guidelines</li>
                            <li>Close collaboration with UX designer</li>
                            <li>Custom PHP framework implementation</li>
                            <li>Database interface for corruption research</li>
                            <li>Public accessibility for journalists and citizens</li>
                        </ul>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>Impact 📈</h5>
                    <div className="case-study-blob-row">
                        <p>
                            Successfully created an accessible online database interface that helps 
                            journalists and the public identify connections between politicians, 
                            wealthy individuals, and potential scandals. The platform serves as 
                            a vital tool for transparency, enabling newspapers to quickly research 
                            and verify information about public figures involved in corruption cases.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
