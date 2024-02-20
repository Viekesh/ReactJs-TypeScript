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



    // const APIPost = () => {

    //     const logJsonData = async () => {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //         const dataInJSON = await response.json();
    //         console.log(dataInJSON);
    //         setData(dataInJSON);
    //     }
    // }

    const postData = async (url = "", data = {}) => {

        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: "cors", // no-cors, *cors, same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit

            // redirect: "follow", // manual, *follow, error
            // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                title: input.title,
                body: input.body,
                userId: parseInt(input.userId),
            }), // body data type must match "Content-Type" header

            headers: {
                "Content-Type": "application/json; charset= utf-8",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.json(); // parses JSON response into native JavaScript objects
    };

    postData("https://jsonplaceholder.typicode.com/posts",).then((data) => {
        console.log(data);
    }); // JSON data parsed by `data.json()` call

    const [input, setInput] = useState({});

    const handleChange = (event) => {
        setInput((input) => ({
            ...input,

            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
        console.log(input);
    }

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


                <form action="" className="y_axis_center">
                    <input type="text" name="title" onChange={handleChange} />
                    <input type="text" name="body" onChange={handleChange} />
                    <input type="text" name="userId" onChange={handleChange} />
                    <button type="submit" value="submit" onClick={handleSubmit}>Click</button>
                </form>
            </section>
        </>
    )
}



export default FetchAPI;