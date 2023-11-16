import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Monitoring } from "./pages";

function App() {


  return (
  <Router>
      <Routes>
        
          <Route path="/" element={<h1>Sameer Anand</h1>} />
          <Route path="/monitoring" element={<Monitoring/>} />
       
      </Routes>
    </Router>
  
  );
}

export default App;
