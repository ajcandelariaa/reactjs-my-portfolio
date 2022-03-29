import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
