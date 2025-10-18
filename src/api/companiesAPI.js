import companiesData from "../data/companies.json";
import industriesData from "../data/companies.json";

export const fetchCompanies = async () => {
     return new Promise((resolve) => {
        setTimeout(() => resolve(companiesData), 500);
    });
};

export const fetchIndustries = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(industriesData), 500);
    });
};
