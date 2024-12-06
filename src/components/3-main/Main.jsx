import { useState, useEffect } from "react";
import Article from "./Article";
import "./main.css";
import { myProjects } from "./MyProject";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(myProjects);

  useEffect(() => {
    filterProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentActive]);

  function filterProjects() {
    if (currentActive === "all") {
      setFilteredProjects(myProjects);
    } else {
      const filtered = myProjects.filter((p) =>
        p.category.includes(currentActive)
      );
      setFilteredProjects(filtered);
    }
  }

  return (
    <main className="flex ">
      <section className="flex left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
          }}
          className={currentActive == "all" ? "active" : ""}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            setCurrentActive("css");
            filterProjects();
          }}
          className={currentActive == "css" ? "active" : ""}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            setCurrentActive("js");
            filterProjects();
          }}
          className={currentActive == "js" ? "active" : ""}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            setCurrentActive("react");
            filterProjects();
          }}
          className={currentActive == "react" ? "active" : ""}
        >
          React & MUI
        </button>

        <button
          onClick={() => {
            setCurrentActive("node");
            filterProjects();
          }}
          className={currentActive == "node" ? "active" : ""}
        >
          Node & Express
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            return (
              <motion.div
                key={project.imgPath}
                layout
                initial={{}}
                animate={{}}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
              >
                <Article project={project} key={project.imgPath} />
              </motion.div>
            );
          })}{" "}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
