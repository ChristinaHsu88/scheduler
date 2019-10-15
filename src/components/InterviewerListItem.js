import React from "react";
import "./Interviewers.scss";

export default function InterviewerListItem(props) {
  console.log(props, 'default');
  return (
    <li className="interviewers__item">
      <img
      className="interviewers__item-image"
      name={props.name}
      src={props.src}
      alt={props.name}
      />
      {props.name}
    </li>
  );
}