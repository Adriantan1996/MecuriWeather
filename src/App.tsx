import React, { useState } from "react";
import ThemedBackground from "./Features/ThemeBackGround/ThemeBackGround";
import Header from "./Features/Header/Header";
import { ThemeContext } from "./Provider/ThemeProvider";
import Body from "./Features/Body/Body";
import SearchHistory from "./Features/SearchHistory/SearchHistory";

const App = () => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <ThemedBackground isDarkMode={isDarkMode}>
      <Header></Header>
      <Body></Body>
    </ThemedBackground>
  );
};

export default App;
