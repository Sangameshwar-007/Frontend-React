import React, { createContext, useState, useEffect } from "react";
import { fetchCompanies, fetchIndustries } from "../api/companiesAPI";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
    const [companies, setCompanies] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [filters, setFilters] = useState({
        search: "",
        location: "All",
        industry: "All",
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /** Load all data on mount */
    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const [companyData, industryData] = await Promise.all([
                    fetchCompanies(),
                    fetchIndustries(),
                ]);

                setCompanies(companyData);
                setFilteredCompanies(companyData);
                setIndustries(industryData);
                setError(null);
            } catch (err) {
                console.error("Error loading data:", err);
                setError("Failed to load data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    /** Filter logic */
    useEffect(() => {
        let filtered = companies;

        if (filters.search.trim()) {
            filtered = filtered.filter((c) =>
                c.name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        if (filters.industry !== "All") {
            filtered = filtered.filter((c) => c.industry === filters.industry);
        }

        if (filters.location !== "All") {
            filtered = filtered.filter((c) => c.location === filters.location);
        }

        setFilteredCompanies(filtered);
    }, [filters, companies]);

    return (
        <CompanyContext.Provider
            value={{
                companies,
                industries,
                filteredCompanies,
                filters,
                setFilters,
                loading,
                error,
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};
