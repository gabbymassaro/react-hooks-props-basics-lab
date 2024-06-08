import React from "react";
import Links from "./Links"

function About(props) {
  let bioTag = undefined
  if (props.bio !== undefined && props.bio !== "") {
    bioTag = <p>{props.bio}</p>
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioTag}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.links.github} linkedin = {props.links.linkedin}/>
    </div>
  );
}

export default About;
