import React from "react";
import classNames from 'classnames';

import "components/Button.scss";

export default function Button(props) {
  // // let buttonClass = "button";

  // if (props.confirm) {
  //   buttonClass += " button--confirm"
  // }

  // if (props.danger) {
  //   buttonClass += " button--danger"
  // }
  let buttonClass = classNames({
    'button button--confirm': props.confirm,
    'button button--danger': props.danger,
    'button button': props
  })
  return <button className={buttonClass} 
  disabled={props.disabled} 
  onClick={props.onClick}>{props.children}</button>;
}
