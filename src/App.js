import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Linguistic from "./Event/Lingusitic";
// import Logical from "./Event/Logical";
// import Musical from "./Event/Musical";
// import Kinesthetic from "./Event/Kinesthetic";
// import Spatial from "./Event/Spatial";
// import Interpersonnal from "./Event/Interpersonal";
// import Nature from "./Event/Nature";

import Home from "./home/home.js";
import Linguistic from "./home/Linguistic.js";
import Poetic from "./home/Poetic.js";
// import Logical from "./home/Logical.js";
// import Musical from "./home/Musical.js";
 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/linguistic" element={<Linguistic/>} />
         <Route path="/poetic" element={<Poetic/>} />
        {/*<Route path="/logical" element={<Logical/>} />
        <Route path="/musical" element={<Musical />} />
        <Route path="/kinesthetic" element={<Kinesthetic/>} />
        <Route path="/spatial" element={<Spatial/>} />
        <Route path="/interpersonnal" element={<Interpersonnal/>} />
        <Route path="/nature" element={<Nature/>} />*/}
        
      </Routes>
    </Router>

    
  );
}

export default App;