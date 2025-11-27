"use client";

import "./start-page.scss";
import { Textfit } from 'react-textfit';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WorksPage from './works/page';
import CVPage from './cv/page';
import ContactPage from './contact/page';


export default function StartPage() {
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            // Update URL without page reload
            window.history.pushState(null, '', `/${sectionId === 'start' ? '' : sectionId}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    const hash = window.location.pathname.slice(1);
    if (hash && hash !== '') {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="start" className="section">
        <div className="start-page-container">
          <div className="video-box-container">
            <video id="ocean-waves-video" src="/videos/ocean_waves.mp4" autoPlay playsInline muted loop />
            <div className="text-container">
              <Textfit mode="single" min={16} max={120}>
                <h1 className="title">MARCO&nbsp;MASIK</h1>
              </Textfit>
              <div className="subtitle-container">
                <Textfit mode="single" min={8} max={120}>
                  <h2 className="subtitle">FULL STACK DEVELOPER</h2>
                </Textfit>
              </div>
              <ul className="start-page-menu">
                <Textfit mode="single" min={8} max={120}>
                  <li><a href="#works">WORKS</a></li>
                  <li><a href="#cv">CV</a></li>
                  <li><a href="#contact">CONTACT</a></li>
                </Textfit>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="section">
        <div>
          <h1>Works</h1>
          <p>My portfolio and projects will be displayed here.</p>
        </div>
      </section>

      <section id="cv" className="section">
        <div>
          <h1>CV</h1>
          <p>My curriculum vitae and experience will be displayed here.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <div>
          <h1>Contact</h1>
          <p>Get in touch with me here.</p>
        </div>
      </section>
    </>

  );
}
