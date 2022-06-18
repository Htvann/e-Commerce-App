import React, {Component} from 'react';
import axios from "axios";
import ProductItem from "./ProductItem";

class ShoppingCart extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        let res = await axios.get(`https://fakestoreapi.com/products`);
        this.setState({
            products: res && res.data ? res.data : [],
        });
        console.log("check res", res.data);
    }

    render() {
        let {products} = this.state
        console.log("check products: ", products)
        return (
            <div className="container-fluid">
                <div className="row">
                    {
                        products && products.length > 0 && products.map((prod) => {
                            return (
                                <ProductItem key={prod.id} product={prod}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ShoppingCart;