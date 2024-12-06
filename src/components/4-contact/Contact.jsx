import "./contact.css";
import Lottie from "lottie-react";
import ContactAnimation from "../../animation/contact-us.json";

export default function Contact() {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon icon-envelope"> </span>
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form>
          <div className="flex">
            <label htmlFor="email">Email Adress: </label>
            <input required type="email" id="email" placeholder="Email" />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label className="msglabel" htmlFor="message">
              Your Message:
            </label>
            <textarea required placeholder="Message" id="message" />
          </div>

          <button className="submit">Submit</button>
        </form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: "355px" }}
            animationData={ContactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
