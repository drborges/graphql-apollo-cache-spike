// @flow

import * as React from "react"
import View from "kits/View"
import NavLink from "kits/NavLink"

export type SidebarProps = {
  children: Node
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <View width="md" stack>{children}</View>
  )
}

Sidebar.Item = ({ label, exact, path }) => {
  return (
    <NavLink exact={exact} to={path}>{label}</NavLink>
  )
}

export default Sidebar
