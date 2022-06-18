import React, {Component} from 'react';

class ProductItem extends Component {
    state={
        product: this.props.product
    }
    render() {
        return (
            <div className="col-4">
                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted">
                            {this.state.product.id}
                        </div>
                        <div className="p-5 border-top">
                            {this.state.product.title}
                        </div>
                        <div>${this.state.product.price}</div>
                    </div>
                    <div className="card-footer text-right">{this.props.children}</div>
                    {/*<button className="btn btn-primary">Buy now</button>*/}
                </div>
            </div>
        );
    }
}

export default ProductItem;