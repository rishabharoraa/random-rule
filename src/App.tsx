import "./App.css";
import MainPage from "./components/mainPage/MainPage";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-8"></div>
      <MainPage />
    </>
  );
}

export default App;
