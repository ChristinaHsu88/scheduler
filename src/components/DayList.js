// import DayListItem from "./DayListItem";
import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // three props 1. days: Array, 2. day: String, 3. setDay: Function (accept the name of the day)
  // responsible for rendering a list of DayListItem component
  
  // console.log(props); show entire props that got passed in
  // let selectDay;
  // props.days.map((day) => {
    // if (day.name === props.day) {
      // console.log(day.name)
      // return (
      //   <DayListItem 
      //   key={day.id}
      //   name={day.spots}
      //   selected={day.name === props.day}
      //   setDay={props.setDay}
      // />
      // )
      // selectDay = day;
    //}
  //})
  return (
    <ul>
      {props.days.map((day) => {
        return (
        <DayListItem 
          key={day.id}
          name={day.name}
          spots={day.spots}
        />
        )
      })}
    </ul>
  );
}