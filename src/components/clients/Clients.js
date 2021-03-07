import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Clients extends Component {
  render() {
    const  clients = [
      {
        id: '342343423',
        firstName: 'Kevin',
        lastName: 'Jones',
        email: 'kjones@gmail.com',
        phone: '444-444-4444',
        balance: '50'
      },
      {
        id: '344987942',
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bsmith@gmail.com',
        phone: '334-444-4433',
        balance: '100.43'
      }

    ]

    if(clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {' '}
                <i className="fas fa-users"></i> Clients
              </h2>
            </div>
            <div className="col-md-6"></div>
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              { clients.map(client => (
                <tr key={client.id}>
                  <td>{client.firstName} {client.lastName}</td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm"><i className="fas fa-arrow-circle-right"></i> Details</Link>
                  </td>
                </tr>
              )) }
            </tbody>
          </table>

        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }

  }
}
