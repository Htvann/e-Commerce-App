import React, {Component} from 'react';

class Home extends Component {
    state = {
        pageTitle: "Customers",
        customersCount: 5,
        customers: [
            {id: 1, name: "Scort", phone: "123-456", address: "New York"},
            {id: 2, name: "Scort", phone: null, address: "New York"},
            {id: 3, name: "Scort", phone: "123-456", address: "New York"},
            {id: 4, name: "Scort", phone: null, address: "New York"},
            {id: 5, name: "Scort", phone: "123-456", address: "New York"},
        ]
    }
   refreshCount = () =>{
        this.setState(
            {customersCount: 0}
        )
   }
    render() {
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">
                    {this.state.pageTitle}
                    <span className="badge badge-secondary m-2">
                        {this.state.customersCount}
                    </span>
                    <button className="btn btn-danger" onClick={()=>this.refreshCount()}>Refresh</button>
                </h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.customers.map((cust)=>{
                        return(
                            <tr key={cust.id}>
                                <td>{cust.id}</td>
                                <td>{cust.name}</td>
                                <td>{cust.phone == null ? "No phone": cust.phone}</td>
                                <td>{cust.address}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;