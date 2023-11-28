import React, { useEffect, useState } from "react";
import { getCategories, getQuote } from "./ServiceDB/QuoteDB";
import Categories from "./Component/Categories";
import Quote from "./Component/Quote";
import "./UseEffectHook.css";
import StocksAPI from "./StocksAPI";



const UseEffectHook = () => {

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState("");
    const [quote, setQuote] = useState({});

    // Fetch categories when the app is mounted
    useEffect(() => {
        getCategories().then(categs => {
            if (categs.length > 0) {
                setCategories(categs);
                setSelected(categs[0]);
            }
        });
    }, []);

    // When the category is changed, a new quote is fetched
    useEffect(() => {
        selected && getQuote(selected).then(q => setQuote(q));
    }, [selected]);

    // When the category is changed, the timer is reset
    // When the app is unmounted, the timer instance is cleaned up
    useEffect(() => {
        let timer = setInterval(() => {
            getQuote(selected).then(q => setQuote(q));
        }, 5000);

        return () => clearInterval(timer);
    }, [selected]);

    return (
        <>
            <div className="quote_master">
                <Categories
                    categories={categories}
                    selected={selected}
                    onSelected={category => setSelected(category)}
                />

                {quote && <Quote quote={quote.quote} author={quote.author} />}
            </div>

            <StocksAPI />
        </>
    );
};



export default UseEffectHook;



// here we can learn:
// running the side effects using useEffect hook
// incorporating side effects that do not require cleanup
// incorporation side effect that do require cleanup
// optimizing side effect



// One of the core function of class component is are lifecycle methods which allows you to run side effects.
// A class component typically features three major lifecycle methods.

// componentDidMount() method
// componentDidUpdate() method
// componentwillUnmount() method

// The componentDidMount() method is run synchronously once when the component is mounted into the DOM
// and is the perfect place to fetch initial data from a data source such as an API.

// Thereafter whenever the component updates, the componentDidUpdate() lifecycle function which also runs
// synchronously, can be used to run sideeffects and bring updated data based on a query for instance.

// In this case we can implement optimisations to ensure that side effects only run if a specific state or
// prop value changes.

// Continue to read portal...



// The useEffect hook is a function that implements a callback where you can define your side effects.
// for ex:



// function getStocks({ symbol }) {
//     const [rate, setRate] = useState();

//     useEffect(() => {
//         getRates(symbol).then(quote => setRate(quote));
//     }, []);

//     return <div>{symbol} : {rate}</div>
// }



// The useEffect() will run after every single render of the function component, when the DOM update is complete.

// This makes it really easy to understand.

// Hooks are very different from lifecycle methods. While the functionality that they provide seems similar,
// they’re not exactly lifecycle methods but rather an amalgamation of functionality that may resemble
// componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle features.

// One of the key differences here is that useEffect runs after every render asynchronously and without blocking
// the render.On the other hand, in class components, the componentDidMount and componentDidUpdate lifecycle
// methods run synchronously.

// Having said that, when trying to wrap your head around the useEffect hook, it is best not to compare or
// correlate the useEffect hook with lifecycle methods in a class component.

// This is because, unlike lifecycle methods that run at specific times during the life of a component, the
// useEffect hook runs every time a component renders or updates.

// This also means that the DOM has updated by the time useEffect runs.

// So, it is better to think of the useEffect hook as a way to synchronize an effect with dependencies.

// 