import React, {useState, useEffect} from "react";
import axios from "axios";
import { Item, Label } from "semantic-ui-react";

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
    }, []) // Again notice this is array because its the type we want to put it into

    const renderProducts = () => {
        return products.map((product) => (
            <Item key={product.id}>
                <Item.Content>
                <Item.Header as='a'>{product.name} <Label>View Product</Label> </Item.Header>
                <Item.Meta>Department: {product.department}</Item.Meta>
                <Item.Description>Description: {product.description}</Item.Description>
                <Item.Extra><Label>{product.price}</Label> &#9998; &#128465; </Item.Extra>
                </Item.Content>
            </Item>
        ))
    }

return (
    <div>
        <Item.Group>{renderProducts()}</Item.Group>
    </div>
);
}

export default Products