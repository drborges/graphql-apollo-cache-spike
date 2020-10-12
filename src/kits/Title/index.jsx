// @flow

import * as React from "react"

import styles from "./styles.module.scss"

export type TitleProps = {}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className={styles.Title}>{children}</h1>
  )
}

export default Title
