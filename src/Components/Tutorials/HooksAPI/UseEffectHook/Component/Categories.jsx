import React from "react";
import Button from "./Button";



const Categories = ({ categories, selected, onSelected }) => {
    return (
        <>
            <div className="categories_panel">
                {
                    categories.map((title, index) => (
                        <Button title={title} key={index} onClicked={cat => onSelected(cat)} />
                    ))
                }

                <div className="selected_category">
                    {selected.toUpperCase()}
                </div>
            </div>
        </>
    )
};



export default Categories;
