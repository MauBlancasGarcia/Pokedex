import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="header d-flex justify-content-center sticky-top">
        <NavBar></NavBar>
      </div>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
