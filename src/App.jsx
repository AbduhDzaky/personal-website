import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>

      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
