import React, { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";
import CompanyCard from "../components/CompanyCard";
import FilterBar from "../components/FilterBar";
import Loader from "../components/Loader";

const CompaniesList = () => {
    const { filteredCompanies, loading, error } = useContext(CompanyContext);

    if (loading) return <Loader />;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="companies-container">
            <FilterBar />
            <div className="company-grid">
                {filteredCompanies.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                ))}
            </div>
        </div>
    );
};

export default CompaniesList;



