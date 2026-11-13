import { useState } from "react";
import "./App.css";

import Header from "./components/header/header";

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "dark" : "light"}>
      <div className="page">
        <Header theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};
export default App;
