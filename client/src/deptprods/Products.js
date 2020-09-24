import React, {useState, useEffect} from "react";
import axios from "axios";
import { Item } from "semantic-ui-react";

const Products = () => {
    //Set up States
    const [products, setProducts] = useState([]); //Notice this is array
    useEffect(() => {
        axios
        .get("/api/products")
        .then((res) => {
            setProducts(res.data);
            console.log('res.data :>> ', res.data);  
        })
        .catch((err)=>{
            alert("eRr0R!")
        })
    }, []) 

    const renderProducts = () => {
        return <h1> test </h1>
    }

return (
    <div>
        products
    </div>
);
}

export default Products