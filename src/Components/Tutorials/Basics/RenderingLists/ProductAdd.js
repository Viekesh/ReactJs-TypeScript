import { useState } from "react";



const ProductAdd = ({ data, add }) => {

    const [chosen, setChosen] = useState();

    return (
        <>
            <div className="add_product">
                <select
                    onChange={
                        e => e.target.value ? setChosen(e.target.value) : alert("Please Select A Product")
                    }
                >
                    <option value={null}>Please Select A Product</option>
                    {
                        data && data.map(d => (
                            <option key={d.id} value={d.id}>
                                {d.name} - ${d.cost}
                            </option>
                        ))
                    }
                </select>

                <button
                    onClick={() =>
                        chosen ? add(data.find(i => i.id === chosen)) : alert("Please Select A Product")
                    }
                >
                    Add To Cart
                </button>
            </div>
        </>
    )
}



export default ProductAdd;