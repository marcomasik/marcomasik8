"use client";

import "./start-page.scss";
import { Textfit } from 'react-textfit';

export default function StartPage() {
  return (
    <div className="start-page-container">
      <div className="video-box-container">
        <video id="ocean-waves-video" src="/videos/ocean_waves.mp4" autoPlay playsInline muted loop />
        <div className="text-container">
        <Textfit mode="single" min={20} max={120}>
          <h1 className="title">MARCO&nbsp;MASIK</h1>
          </Textfit>

          <h2 className="subtitle">FULL STACK DEVELOPER</h2>
          <ul className="start-page-menu">
            <li><a href="#works">WORKS</a></li>
            <li><a href="#cv">CV</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
