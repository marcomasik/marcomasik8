import "./work-item-content.scss";

export const BorneoContent = () => {
    return (
        <div className="work-item-expanded-content">
            <h4>Web Developer // Borneo</h4>
            <div className="work-item-expanded-case-study-container">
                <div className="work-item-case-study-blob">
                    <h5>Context 🌿</h5>
                    <div className="case-study-blob-row">
                        <p>
                            Borneo is an eco-luxury fashion brand specializing in accessories 
                            inspired by Indonesian folk art and handcraft culture. The brand 
                            needed a complete digital presence that could showcase their unique 
                            aesthetic while providing a seamless e-commerce experience. 
                            The challenge was to create a platform that honored traditional 
                            Indonesian craftsmanship while appealing to modern luxury consumers.
                        </p>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>My Role 👩‍💻</h5>
                    <div className="case-study-blob-row">
                        <p>
                            I worked as a web developer on this project, handling both the 
                            website and webshop development, including comprehensive SEO 
                            optimization. One of the key challenges was migrating the entire 
                            webshop from WordPress to Squarespace while maintaining functionality 
                            and improving the user experience.
                        </p>
                    </div>
                </div>

                <div className="work-item-case-study-blob work-item-case-study-blob--with-video">
                    <h5>Solution 💡</h5>
                    <div className="work-item-case-study-text">
                        <ul>
                            <li>Complete website and webshop development</li>
                            <li>SEO optimization for better visibility</li>
                            <li>Custom Squarespace template creation</li>
                            <li>Unique lookbook design and functionality</li>
                            <li>WordPress to Squarespace migration</li>
                            <li>Indonesian folk art-inspired design elements</li>
                        </ul>
                    </div>
                    <div className="work-item-case-study-video">
                        <video 
                            src="/videos/borneo2.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="work-item-video"
                        />
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>Key Features ✨</h5>
                    <div className="case-study-blob-row">
                        <p>
                            Created custom Squarespace templates specifically designed for 
                            unique-looking lookbooks that could effectively showcase the 
                            brand's Indonesian-inspired accessories. The templates were 
                            built to highlight the craftsmanship and cultural heritage 
                            behind each piece while maintaining a luxury aesthetic.
                        </p>
                    </div>
                </div>

                <div className="work-item-case-study-blob">
                    <h5>Impact 📈</h5>
                    <div className="case-study-blob-row">
                        <p>
                            Successfully delivered a complete digital transformation that 
                            enhanced the brand's online presence. The migration to Squarespace 
                            improved site performance and user experience, while the custom 
                            lookbook templates provided a unique way to showcase the 
                            Indonesian folk art-inspired accessories to luxury consumers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
