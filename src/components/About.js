import React from "react";
import DownArrow from "../images/down-arrow.png";

const About = () => (
  <section className="About">
    <div>
      <h1>Hi,</h1>
      <h1>I'm Patricia Nunes</h1>
      <p>Junior Web Development, based in Sydney, seeking for my first job.</p>
      <p>
        I just finished the ​Software Engineering Immersive course at GA. Now I
        am looking for a junior position preferable as a ​Frontend​, but I am
        also keen to work as a ​Backend.​
      </p>
      <p>
        The kind of company that I want to work with cares about its employees
        as much as it does about the technology.
      </p>
      <p>
        Check out <a href="#">my work</a> and feel free to{" "}
        <a href="#">get in touch</a>.
      </p>
      <a href="#">
        <img src={DownArrow} alt="My work" />
      </a>
    </div>
  </section>
);

export default About;
