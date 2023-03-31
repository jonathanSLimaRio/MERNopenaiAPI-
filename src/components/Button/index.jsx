import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

export function Button({ kind, size, onClick, children, className }) {
  // const classes = [styles.Button, styles[kind], styles[size], className];
  {
    /* <button type='button' className={classes.join(' ')} onClick={onClick}></button> */
  }
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
