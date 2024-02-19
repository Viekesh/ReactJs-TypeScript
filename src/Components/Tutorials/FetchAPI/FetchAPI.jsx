import { useEffect, useState } from "react";
import "./FetchAPI.css";



const FetchAPI = () => {

    const [data, setData] = useState([]);

    const APIGet = () => {

        const logJsonData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const dataInJSON = await response.json();
            console.log(dataInJSON);
            setData(dataInJSON);
        }

        // instead of above code we can also use this

        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        logJsonData();
    }

    // useEffect(() => {
    //     APIGet();
    // }, []);

    // if you want to call an api on page load then we have to use useEffect hook
    // if you're using a function component or componentDidMount method if you're using class
    // component 

    return (
        <>
            <section className="fetch_api">
                <h1>MyAPI</h1>
                <button onClick={APIGet}>FetchAPI</button>
                <br />
                {/* <pre>
                    {
                        JSON.stringify(data, null, 2)
                    }
                </pre> */}

                {
                    data.map((data) => {
                        return (
                            <div className="fetch_data_list">
                                <ul>
                                    <li key={data.id}>{data.userId} : {data.title}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}



export default FetchAPI;