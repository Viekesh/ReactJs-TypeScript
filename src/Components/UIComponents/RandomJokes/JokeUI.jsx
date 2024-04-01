import { useState } from "react";
import "./JokeUI.scss";
import Joke from "./Joke";



const JokeUI = () => {

    const [category, setCategory] = useState("general");

    return (
        <>
            <section className="joke_container">
                <div className="joke_category_picker">
                    <select onChange={e => setCategory(e.target.value)}>
                        <option value="general">General</option>
                        <option value="programming">Programming</option>
                    </select>
                </div>
                <Joke category={category} />
            </section>
        </>
    )
}



export default JokeUI;