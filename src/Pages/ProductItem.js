import React, {Component} from 'react';

class ProductItem extends Component {
    state={
        product: this.props.product,
        // quantity: this.props.quantity
        quantity: 0
    }

    render() {
        let data = this.state
        // console.log("check data: ", data)
        return (
            <div className="col-4">
                <div className="card m-2" >
                    <div className="card-body">
                        <div className="text-muted">
                            {data.product.id}
                        </div>
                        <div className="p-5 border-top">
                            {data.product.title}
                        </div>
                        <div>${data.product.price}</div>
                    </div>
                    <div className="card-footer">
                        <div className="float-left">
                            <span className="badge">{data.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={()=>this.props.Increment(data)}>+</button>
                                <button className="btn btn-outline-success" onClick={()=>this.props.Decrement(data)}>-</button>
                            </div>
                        </div>
                        <div className="float-right">{this.props.children}</div>
                    </div>
                    {/*<button className="btn btn-primary">Buy now</button>*/}
                </div>
            </div>
        );
    }
}

export default ProductItem;