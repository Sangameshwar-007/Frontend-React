import React from "react";
import { CompanyProvider } from "./context/CompanyContext";
import CompaniesList from "./pages/CompaniesList";

import "./App.css";
//
const App = () => {
    return (
        <CompanyProvider>
            <div className="app">
                <h1 className="app-title">Companies Directory</h1>
                <CompaniesList/>
            </div>

        </CompanyProvider>

    );
};


export default App;
