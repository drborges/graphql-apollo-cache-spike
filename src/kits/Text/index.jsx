// @flow

import * as React from "react"

import styles from "./styles.module.scss"

export type TextProps = {}

const Text = ({ children }: TextProps) => {
  return (
    <h1 className={styles.Text}>{children}</h1>
  )
}

export default Text
