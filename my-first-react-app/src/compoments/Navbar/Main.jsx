import React from 'react'
import classes from './Main.module.css'

function Main() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        <li className={`${classes.menu__item} ${classes.menu__active}`}><a href="my-first-react-app/src/compoments/Navbar/Main#" className={classes.active}>Profile</a></li>
        <li className={classes.menu__item}><a href="my-first-react-app/src/compoments/Navbar/Main#">Photo</a></li>
        <li className={classes.menu__item}><a href="my-first-react-app/src/compoments/Navbar/Main#">Messages</a></li>
        <li className={classes.menu__item}><a href="my-first-react-app/src/compoments/Navbar/Main#">Music</a></li>
        <li className={classes.menu__item}><a href="my-first-react-app/src/compoments/Navbar/Main#">Settings</a></li>
      </ul>
      <div className={classes.main}>
        <img src="https://st-gdefon.gallery.world/wallpapers_original/681786_gallery.world.jpg" alt="logo"/>
      </div>
    </nav>
  )
}

export default Main