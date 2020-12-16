import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TitlePage } from "../Layouts/TitlePage";
import { ModalPortal } from "../Components/ModalPortal/modalPortal";

function App(): ReactElement {
  return (
    <Router>
      <div>
        <TitlePage />
      </div>
      <ModalPortal />
    </Router>
  );
}

export default App;
