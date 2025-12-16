import "./work-item-content.scss";

export const SwarmContent = () => {
    return (
        <div className="work-item-expanded-content">
            <h4>Web Developer // Swarm Foundation</h4>
            <div className="work-item-expanded-case-study-container">
                <div className="work-item-case-study-blob">
                    <h5>Context 🌐</h5>
                    <div className="case-study-blob-row">
                        <p>
                            Created by one of the founders of the decentralized internet movement, 
                            Swarm is a blockchain-based distributed storage platform specializing 
                            in storing various web3 services. As the decentralized web ecosystem 
                            grew, Swarm needed a modern, responsive website, that could effectively 
                            communicate complex blockchain concepts to both technical and non-technical users.
                        </p>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>My Role 👩‍💻</h5>
                    <div className="case-study-blob-row">
                        <p>
                            I joined the team to develop responsive UI components and improve 
                            the overall user experience. My main responsibilities included cleaning 
                            up source code that had been contributed by several developers over time, 
                            ensuring consistency and maintainability across the platform.
                        </p>
                    </div>
                </div>

                <div className="work-item-case-study-blob work-item-case-study-blob--with-video">
                    <h5>Solution 💡</h5>
                    <div className="work-item-case-study-text">
                        <ul>
                            <li>Developed responsive UI components</li>
                            <li>Refactored and cleaned up legacy code</li>
                            <li>Improved code consistency and maintainability</li>
                            <li>Collaborated with multiple developers</li>
                        </ul>
                    </div>
                    <div className="work-item-case-study-video">
                        <video 
                            src="/videos/swarm2.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="work-item-video"
                        />
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>Impact 📈</h5>
                    <div className="case-study-blob-row">
                        <p>
                            Successfully delivered a cleaner, more maintainable codebase with 
                            improved responsive design. The enhanced UI made complex blockchain 
                            storage concepts more accessible to users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
