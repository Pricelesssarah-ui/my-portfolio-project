import React, { useState, useEffect } from "react";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import TypographyLoader from "./components/TypographyLoader";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API call)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 2-second loading time
  }, []);

  return (
    <>
    {isLoading ? (
        <TypographyLoader />
      ) : (

        <Router>
          <AnimatedRoutes />
        </Router>
     
      )}
    </>
    
  );
}

export default App;
