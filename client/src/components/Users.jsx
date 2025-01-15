import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([
    {
      name: 'Ram',
      email: 'ram@gmail.com',
      age: 25
    }
  ])
  return (
    <div className="container mt-5">
      <Link to='/create' className="btn btn-success mb-2">Add +</Link>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <div className="d-flex gap-3 align-items-center">
                    <Button variant="success">
                      <Link to='/update'>Edit</Link>
                    </Button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Users