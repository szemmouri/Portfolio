import "./main.css";

export default function Article({ project }) {
  return (
    <article className=" card">
      <img width="266" src={project.imgPath} alt="" />
      <div style={{ width: "266px" }} className="box">
        <h2 className="title">{project.projectTitle}</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore
          dolor in, accusantium laudantium accusamus.
        </p>
        <div className="icons flex">
          <div className=" flex" style={{ gap: "10px" }}>
            <div className="icon-link link"></div>
            <div className="icon-github github"></div>
          </div>
          <a href="#" className="flex link">
            more
            <span
              style={{ alignSelf: "center" }}
              className="icon-arrow-right"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
