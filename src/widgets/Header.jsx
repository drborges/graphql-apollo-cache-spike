// @flow

import * as React from "react"
import View from "kits/View"
import Title from "kits/Title"

export type HeaderProps = {
  title: strinig,
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View padding="md">
      <Title>{title}</Title>
    </View>
  )
}

export default Header
