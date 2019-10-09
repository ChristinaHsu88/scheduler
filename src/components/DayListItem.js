import React from "react";
import "./DayListItem.scss";
import className from 'classnames';

export default function DayListItem(props) {
  let dayClass = className({'day-list__item--selected': props.name, 'day-list__item--full': props.spots === 0});
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots > 1 ? props.spots + ' spots remaining' : props.spots === 0 ? 'no spots remaining' : props.spots + ' spot remaining'}</h3>
    </li>
  );
}