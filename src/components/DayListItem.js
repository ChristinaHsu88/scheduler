import React from "react";
import "./DayListItem.scss";
// need to import this doc so we can access the stylesheet element
import classNames from 'classnames';

export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.spots >= 0 && props.selected === true,
    'day-list__item--full': props.spots === 0
  });
  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots > 1 ? props.spots + ' spots remaining' : props.spots === 0 ? 'no spots remaining' : props.spots + ' spot remaining'}</h3>
    </li>
  );
}