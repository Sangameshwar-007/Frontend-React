import logo from './logo.svg';
import './App.css';
import React from "react";
import {CompanyProvider} from "./context/CompanyContext";
import CompaniesList from "./pages/CompaniesList";


const App() {
  return (
    <CompanyProvider>
      <div classsName="app">
        <h1 className="app-titlee">Companies Directory</h1>
        <CompaniesList/>
      </div>
    </CompanyProvider>
  );
}

export default App;
