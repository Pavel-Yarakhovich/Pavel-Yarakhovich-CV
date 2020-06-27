import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TitlePage } from "../Layouts/TitlePage";

function App(): ReactElement {
  return (
    <Router>
      <div>
        <TitlePage />
      </div>
    </Router>
  );
}

export default App;
