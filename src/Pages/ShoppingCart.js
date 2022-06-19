import React, {Component} from 'react';
import axios from "axios";
import ProductItem from "./ProductItem";

class ShoppingCart extends Component {
    state = {
        products: [],
        // quantity: 0
    }

    async componentDidMount() {
        let res = await axios.get(`https://fakestoreapi.com/products`);
        this.setState({
            products: res && res.data ? res.data : [],
        });
        // console.log("check res", res.data);
    }
    handleIncrement = (data) =>{
        data.quantity = data.quantity + 1
        console.log("check quantity: ", data.product.id, data.quantity)
    }
    handleDecrement = (data) =>{
        data.quantity > 0 ? data.quantity = data.quantity -1 : data.quantity = 0
        console.log("check quantity: ", data.product.id, data.quantity)
    }
    render() {
        let Products = this.state
        // console.log("check: ", Products)
        // console.log("check products: ", products)
        return (
            <div className="container-fluid">
                <div className="row">
                    {
                        Products.products && Products.products.length > 0 && Products.products.map((prod) => {
                            return (
                                <>
                                    <ProductItem
                                        key={prod.id}
                                        product={prod}
                                        quantity={0}
                                        Increment={this.handleIncrement}
                                        Decrement={this.handleDecrement}
                                    >
                                       <button className="btn btn-primary">Buy now</button>
                                    </ProductItem>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ShoppingCart;