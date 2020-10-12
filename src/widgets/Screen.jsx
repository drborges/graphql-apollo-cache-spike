// @flow

import * as React from "react"
import View from "kits/View"
import Header from "widgets/Header"
import Sidebar from "widgets/Sidebar"

export type ScreenProps = {
  children: Node,
  title: string,
}

const Screen = ({ children, title }: ScreenProps) => {
  return (
    <View>
      <Screen.Sidebar>
        <Sidebar>
          <Sidebar.Item label="Home" path="/" exact />
          <Sidebar.Item label="Users" path="/users" />
        </Sidebar>
      </Screen.Sidebar>

      <View stack>
        <Screen.Header>
          <Header title={title} />
        </Screen.Header>

        <Screen.Body>{children}</Screen.Body>
      </View>
    </View>
  );
};

Screen.Sidebar = ({ children }) => <>{children}</>
Screen.Header = ({ children }) => <>{children}</>
Screen.Body = ({ children }) => <>{children}</>

export default Screen;
