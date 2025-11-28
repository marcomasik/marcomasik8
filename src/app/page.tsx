"use client";

import "./start-page.scss";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MenuBar, StartSection, WorksSection, CVSection, ContactSection } from '../components';

export default function StartPage() {
  const router = useRouter();
  const [showMenuBar, setShowMenuBar] = useState(false);

  useEffect(() => {
    const startSection = document.getElementById('start');
    
    const menuBarObserver = new IntersectionObserver(
      ([entry]) => {
        // Show nav when start section is NOT visible
        setShowMenuBar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (startSection) {
      menuBarObserver.observe(startSection);
    }

    return () => menuBarObserver.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            window.history.pushState(null, '', `/${sectionId === 'start' ? '' : sectionId}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.pathname.slice(1);
    if (hash && hash !== '') {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <MenuBar isVisible={showMenuBar} />
      <StartSection />
      <WorksSection />
      <CVSection />
      <ContactSection />
    </>

  );
}
