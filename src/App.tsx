import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
