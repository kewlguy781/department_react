import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {Segment, Label, Button, Header} from 'semantic-ui-react';

const ProductView = ({match, history}) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
    Axios.get(`/api/products/${match.params.id}`)
    .then((res) => {
        console.log(res.data)
        setProduct(res.data)
    })
    .catch((err) => {
        alert("eRr0R in ProductView");
    });
    }, []);

    return (
        <div>
          <Segment>
            <Header as="h1">{product.name}</Header>
            <Header as="h3">{product.department}</Header>
            <Label>  ${product.price} </Label>
          
            <p>{product.description}</p>
          </Segment>
          <br />
          <br />
          <Button color="purple" onClick={history.goBack}>
            Back
          </Button>
        </div>
      );
    };
    
    export default ProductView;
    
    

// To Do:
// using this http://localhost:3001/api/products/1
// Update React Router
// List Product Description
// List Comments
// Create Form (first new, then update)
// update


