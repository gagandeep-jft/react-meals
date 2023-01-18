import Banner from "./components/Banner";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/UI/Navbar";
import { CartStore } from "./store/CartStore";
import "./App.module.css";

function App() {
  return (
    <div className="App">
      <CartStore>
        <header>
          <Navbar />
        </header>
        <Banner />
        <Menu />
      </CartStore>
    </div>
  );
}

export default App;
