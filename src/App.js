import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Monitoring } from "./pages";

function App() {


  return (
  <Router>
      <Routes>
        
          <Route path="/monitoring" element={<Monitoring/>} />
          <Route path="/*" element={<Navigate to={"/monitoring"}/>} />
       
      </Routes>
    </Router>
  
  );
}

export default App;
