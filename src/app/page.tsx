import "./start-page.scss";

export default function StartPage() {
  return (
    <div className="start-page-container">
      <div className="video-box-container">
        <video id="ocean-waves-video" src="/videos/ocean_waves.mp4" autoPlay playsInline muted loop />
      </div>
    </div>
  );
}
