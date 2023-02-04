import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div className="header d-flex justify-content-center sticky-top">
        <NavBar></NavBar>
      </div>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
