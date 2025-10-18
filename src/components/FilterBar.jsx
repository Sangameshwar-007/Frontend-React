import React, { useContext, useState } from "react";
import { CompanyContext } from "../context/CompanyContext";
import {
    Box,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    IconButton,
    Paper,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const FilterBar = () => {
    const { filters, setFilters} = useContext(CompanyContext);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

    return (
        <Box width="100%" mb={3}>
            {/* Desktop & Mobile Header */}
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: "#103cae",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "#fff",
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    Filter Companies
                </Typography>

                {/* Hamburger icon for mobile */}
                <IconButton
                    sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
                    onClick={toggleMobileMenu}
                >
                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Paper>

            {/* Filter Inputs */}
            <Box
                sx={{
                    display: { xs: mobileOpen ? "block" : "none", md: "flex" },
                    flexWrap: "wrap",
                    gap: 2,
                    mt: 2,
                    justifyContent: { md: "center" },
                }}
            >
                <TextField
                    label="Search company"
                    variant="outlined"
                    fullWidth
                    sx={{ minWidth: 180 }}
                    value={filters.search}
                    onChange={(e) =>
                        setFilters({ ...filters, search: e.target.value })
                    }
                />
                <FormControl fullWidth sx={{ minWidth: 180 }}>
                    <InputLabel>Location</InputLabel>
                    <Select
                        value={filters.location}
                        label="Location"
                        onChange={(e) =>
                            setFilters({ ...filters, location: e.target.value })
                        }
                    >
                        <MenuItem value="All">All Locations</MenuItem>
                        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                        <MenuItem value="Bangalore">Bangalore</MenuItem>
                        <MenuItem value="Chennai">Chennai</MenuItem>
                        <MenuItem value="Pune">Pune</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>Industry</InputLabel>
                    <Select
                        label="Industry"
                        value={filters.industry}
                        onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                    >
                        <MenuItem value="All">All Industries</MenuItem>
                        <MenuItem value="IT Services">IT Services</MenuItem>
                        <MenuItem value="SaaS">SaaS</MenuItem>
                        <MenuItem value="Cloud Computing">Cloud Computing</MenuItem>
                        <MenuItem value="E-commerce">E-commerce</MenuItem>
                        <MenuItem value="FinTech">FinTech</MenuItem>
                        <MenuItem value="EdTech">EdTech</MenuItem>
                        <MenuItem value="Transportation">Transportation</MenuItem>
                        <MenuItem value="FoodTech">FoodTech</MenuItem>
                    </Select>
                </FormControl>



            </Box>
        </Box>
    );
};

export default FilterBar;
