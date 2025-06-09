import React, { useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const containerStyle = {
    backgroundColor: theme === "light" ? "#DDF6D2" : "#333446",
    minHeight: "100vh",
    padding: "20px",
    color: theme === "light" ? "#000" : "#fff" // for better text visibility
  };

  return (
    <div style={containerStyle}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>Switch Mode</button>
      <p>The current theme is: {theme}</p>
    </div>
  );
}

export default ThemeSwitcher;
