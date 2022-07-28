import { Header } from "./components/header";
import { Hero } from "./components/hero";
import "./App.css";
import { Movies } from "./components/movies";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Movies/>
    </div>
  );
}
