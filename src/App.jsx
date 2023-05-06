import { Route, Routes } from "react-router-dom";
import CountryList from "./CountryList";
import "./App.css";
import CountryDetails from "./CountryDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CountryList />}></Route>
        <Route path="/:id" element={<CountryDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
