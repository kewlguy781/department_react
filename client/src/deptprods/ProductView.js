import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {Segment, Label, Button, Item, Header} from 'semantic-ui-react';

const ProductView = ({match, history}) => {
    const [product, setProduct] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
    Axios.get(`/api/products/${match.params.id}`)
    .then((res) => {
        console.log(res.data)
        setProduct(res.data)
    })
    .catch((err) => {
        alert("eRr0R in ProductView // Pr0duCT");
    });
    
    Axios.get(`/api/products/${match.params.id}/comments`)
    .then((res) => {
      debugger;
        console.log(res.data)
        setComments(res.data)
    })
    .catch((err) => {
        alert("eRr0R in ProductView // CoMMeNTs");
    });

    }, []);

    const renderComments = () => {
        return comments.map((comment) => (
          <Item key={comment.id}>
            <Item.Content>
            <Item.Header as='a'>{comment.text}</Item.Header>
            <Item.Extra><Label>{comment. id}</Label> <Label>&#9998;</Label> <Label>&#128465;</Label> </Item.Extra>
            </Item.Content>
        </Item>   
        )
        )
    }



      
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
          <br />
          <br />
          <Item.Group>{renderComments()}</Item.Group>

        </div>
      );
};
    
    export default ProductView;
    
    

// To Do:
// using this http://localhost:3001/api/products/1 **
// Update React Router **
// List Product Description **
// List Comments
// Create Form (first new, then update)
// update


