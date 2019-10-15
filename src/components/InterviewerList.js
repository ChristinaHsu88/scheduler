import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
      {
        props.interviewers.map((interviewer) => {
          console.log(interviewer, 'interviewersssss')
          return (
            <InterviewerListItem
            id={interviewer.id}
            name={interviewer.name}
            src={interviewer.avatar}
            />
          )
        })
      }
      </ul>
    </section>
  );
}