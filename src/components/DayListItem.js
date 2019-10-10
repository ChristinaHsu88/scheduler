import React from "react";
import "./DayListItem.scss";
import classNames from 'classnames';

export default function DayListItem(props) {
  const dayClass = classNames({'day-list__item--selected': props.name, 'day-list__item--full': props.spots === 0});
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass}>{props.name}</h2>
      <h3 className={dayClass}>{props.spots > 1 ? props.spots + ' spots remaining' : props.spots === 0 ? 'no spots remaining' : props.spots + ' spot remaining'}</h3>
    </li>
  );
}