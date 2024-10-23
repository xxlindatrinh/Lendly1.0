import React from "react";
import logo from "./logo.png"; // Importér logo
import "./App.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Lendly Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;

import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen"; // Importér loading skærmen
import LoginPage from "./LoginPage"; // Importér loginsiden

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulerer indlæsning (f.eks. API kald eller andet)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading screen vises i 3 sekunder
  }, []);

  return <>{isLoading ? <LoadingScreen /> : <LoginPage />}</>;
};
