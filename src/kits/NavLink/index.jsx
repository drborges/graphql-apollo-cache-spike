// @flow

import * as React from "react"
import { NavLink as Link } from "react-router-dom"

import styles from "./styles.module.scss"

export type NavLinkProps = {
  children: Node,
  exact: boolean,
  to: string,
}

const NavLink = ({ children, exact = false, to }: NavLinkProps) => {
  return (
    <Link to={to} exact={exact} activeClassName={styles.active} className={styles.NavLink}>
      {children}
    </Link>
  )
}

export default NavLink
