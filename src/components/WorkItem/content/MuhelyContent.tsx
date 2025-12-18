import "./work-item-content.scss";

export const MuhelyContent = () => {
    return (
        <div className="work-item-expanded-content">
            <div className="work-item-expanded-case-study-container">
                <div className="work-item-header">
                    <h1>Mühely Foundation</h1>
                    <p className="work-item-subtitle">Web Developer</p>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>Project Overview</h3>
                    <p>
                        Mühely Foundation is an artist collective in Budapest that organizes classes 
                        for the public, mostly about contemporary dances. They needed a new website 
                        to replace their old, slow, and outdated site with a modern, fast, and 
                        user-friendly platform.
                    </p>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>My Role & Responsibilities</h3>
                    <ul>
                        <li>Participated in logo and design creation as a helper to the UX designer</li>
                        <li>Implemented the new design in WordPress</li>
                        <li>Developed a booking system connected to Google Calendar</li>
                        <li>Created functionality for users to book dance classes online</li>
                        <li>Ensured responsive design and performance optimization</li>
                    </ul>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>Technologies Used</h3>
                    <ul>
                        <li>WordPress & PHP</li>
                        <li>Google Calendar API</li>
                        <li>HTML5 & CSS3</li>
                        <li>JavaScript</li>
                        <li>Responsive Design</li>
                        <li>Custom booking system integration</li>
                    </ul>
                </div>

                <div className="work-item-case-study-blob">
                    <h3>Key Features</h3>
                    <ul>
                        <li>Modern, clean design reflecting the artistic nature of the collective</li>
                        <li>Integrated booking system for dance classes</li>
                        <li>Real-time synchronization with Google Calendar</li>
                        <li>Mobile-responsive design for easy access on all devices</li>
                        <li>Improved loading speed and performance</li>
                        <li>User-friendly class scheduling interface</li>
                    </ul>
                </div>

                <div className="work-item-case-study-blob work-item-case-study-blob--with-video">
                    <div className="work-item-case-study-text">
                        <h3>Results</h3>
                        <p>
                            Successfully delivered a modern website that replaced the outdated platform 
                            with improved performance and user experience. The integrated booking system 
                            streamlined the class registration process, making it easier for students 
                            to book contemporary dance classes while automatically managing the 
                            foundation's schedule through Google Calendar integration.
                        </p>
                    </div>
                    <div className="work-item-case-study-video">
                        <img 
                            src="/images/muhely_screenshot.png" 
                            alt="Mühely Foundation website screenshot"
                            className="work-item-video"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
