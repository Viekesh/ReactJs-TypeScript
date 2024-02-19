import { useState } from "react";



const FetchAPI = () => {

    const APIGet = () => {

        async function logMovies() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const dataInJSON = await response.json();
            console.log(dataInJSON);
        }

    }

    return (
        <></>
    )
}



export default FetchAPI;