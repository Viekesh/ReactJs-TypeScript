import React from "react";
import "./App.css";
import ProjectRoutes from "./Projects/MainComponents/ProjectRoutes";



const App: React.FC = () => {
  return (
      <div className="app">
        <ProjectRoutes />
      </div>
  )
};

export default App;