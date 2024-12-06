import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.remove("light");
    }
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <header className="flex">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="menu icon-menu circle-btn"
        />
        <div />
        <nav>
          <ul className="flex">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
            setTheme(localStorage.getItem("theme"));
          }}
          className="circle-btn"
        >
          {theme === "light" ? (
            <span className="icon-moon-o"></span>
          ) : (
            <span className="icon-sun"></span>
          )}
        </button>
        {showModal && (
          <div className="fixed">
            <ul className="modal">
              <li>
                <button
                  className="icon-close circle-btn"
                  onClick={() => {
                    setShowModal(false);
                  }}
                />
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Articles</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="">Uses</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
