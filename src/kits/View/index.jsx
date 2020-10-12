// @flow

import * as React from "react"
import classnames from "classnames"

import styles from "./styles.module.scss"

export type ViewProps = {
  children: Node,
  padding: "none" | "xs" | "sm" | "md" | "lg" | "xl",
  margin: "none" | "xs" | "sm" | "md" | "lg" | "xl",
  width: "auto" | "xs" | "sm" | "md" | "lg" | "xl",
}

const View = ({
  children,
  width = "auto",
  padding = "none",
  margin = "none",
  stack = false,
}: ViewProps) => {
  const css = classnames(
    styles.View,
    styles[`padding-${padding}`],
    styles[`margin-${margin}`],
    styles[`width-${width}`],
    { [styles.stack]: stack },
  )

  return (
    <div className={css}>
      {children}
    </div>
  )
}

export default View
