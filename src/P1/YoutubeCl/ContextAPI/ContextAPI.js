import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromAPI } from "../Utils/API";



export const Context = createContext();

export const AppContext = (props) => {

    // here we will use "useState" to create state
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    // initial value of "selectedCategory" is "New"
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {

        // our parameter and dependancy is same ("selectedCategory"), whenever we click our left side panel ("menu")
        // the state is changed according to values we are click on and when the state is changed then our
        // useEffect method is called then after that our api is called
        fetchSelectedCategoryData(selectedCategory);

    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);

        // here we have to add our end point ("`search/?q=${query}`") after that it will return us promise
        // under that promise we will get some response then we will check that response by "console.log"
        fetchDataFromAPI(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            // setSearchResults(contents);
            setLoading(false);
        });
    };

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};


