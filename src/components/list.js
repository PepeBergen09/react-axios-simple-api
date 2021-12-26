import React, { Component } from 'react';
import axios from 'axios';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = { listCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/list')
            .then(res => {
                this.setState({ listCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.listCollection.map((data, i) => {
            return (
                <tr>
                <td>
                    {data._id}
                </td>
                <td>
                    {data.name}
                </td>
                <td>
                    {data.email}
                </td>
            </tr>
            )

        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}