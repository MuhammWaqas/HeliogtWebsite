// Context.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState({
        locationInfo: null,
        buildingInsights: null,
        averageBill: 275, // Default value for average bill
        homeOwnership: null, // Property to store rent/own selection
        houseType: null, // Property to store selected house type
        userInfo: { // New property to store user information
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }
    });

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    );
};