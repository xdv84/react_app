import React from 'react'
import classes from './Footer.module.css'

function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className="classes.footer__ul">
        <li className={classes.footer__li}>About me</li>
        <li className={classes.footer__li}>My portfolio</li>
        <li className={classes.footer__li}>My project</li>
      </ul>
    </footer>
  )
}

export default Footer