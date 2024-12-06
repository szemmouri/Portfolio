import "./hero.css";
import Lottie from "lottie-react";
import HeroAnimation from "../../animation/HeroAnimation.json";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div>
          <img className="avatar" src="../avatar.webp" alt="" />
          <span className="icon-verified verified" />
        </div>

        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="subtitle">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="social-icons flex">
          <div className="icon-x icon" />
          <div className="icon-linkedin-square icon" />
          <div className="icon-github icon" />
          <div className="icon-instagram icon" />
        </div>
      </div>
      <div className="right-section animation">
        <Lottie animationData={HeroAnimation} />
      </div>
    </section>
  );
}
