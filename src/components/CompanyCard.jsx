import React from "react";


const CompanyCard = ({ company }) => {
    return (
        <div className="company-card"
            // style={{ backgroundColor: "yellow", padding: "20px" }}

        >
            <h3>{company.name}</h3>
            <p><strong>Industry:</strong> {company.industry}</p>
            <p><strong>Location:</strong> {company.location}</p>
            <p><strong>Employees:</strong> {company.employees}</p>

        </div>
    );
};

export default CompanyCard;
