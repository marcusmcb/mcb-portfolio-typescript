import "./App.css";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <div className="App">
      <Footer />
      <Outlet />
      <Header />
    </div>
  );
}

export default App;
