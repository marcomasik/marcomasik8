import "./work-item-content.scss";

export const MomentumContent = () => {
    return (
        <div className="work-item-expanded-content">
            <h4>Web Developer, Software Engineer & Editor in Chief // Momentum Movement</h4>
            <div className="work-item-expanded-case-study-container">
                <div className="work-item-case-study-blob">
                    <h5>Context 🏛️</h5>
                    <div className="case-study-blob-row">
                        <p>
                            Momentum is a Hungarian political movement that evolved into a political party 
                            now represented in the Hungarian Parliament. As one of the founding members, 
                            I took on multiple IT responsibilities to establish the party's digital presence 
                            and internal systems from the ground up.
                        </p>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>My Role 👨‍💻</h5>
                    <div className="case-study-blob-row">
                        <ul>
                            <li><strong>Web Developer:</strong> Created and maintained the party's campaign website</li>
                            <li><strong>Software Engineer:</strong> Developed internal digital systems for member administration</li>
                            <li><strong>Editor in Chief:</strong> Managed website content strategy and editorial oversight</li>
                            <li><strong>Founding Member:</strong> Contributed to the party's establishment and digital strategy</li>
                        </ul>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>Solution 💡</h5>
                    <div className="case-study-blob-row">
                        <p>
                            <strong>Public Website:</strong> Built a custom WordPress theme tailored for political 
                            campaigns, featuring dynamic content management for news, events, and policy updates.
                        </p>
                        <p>
                            <strong>Internal Systems:</strong> Developed a Laravel-based intranet system to manage 
                            party membership, internal communications, and administrative processes.
                        </p>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>Technologies Used 🛠️</h5>
                    <div className="case-study-blob-row">
                        <ul>
                            <li>WordPress (Custom Theme Development)</li>
                            <li>Laravel (Internal Systems)</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>HTML/CSS/JavaScript</li>
                        </ul>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>Impact 📈</h5>
                    <div className="case-study-blob-row">
                        <p>
                            Successfully established Momentum's digital infrastructure from the ground up, 
                            supporting the movement's growth from a grassroots initiative to a parliamentary 
                            political party. The systems facilitated effective campaign management, member 
                            engagement, and internal organization during critical election periods.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
