import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/delete/' + id)
      .then(response => {
        console.log(response);
        window.location.reload()
      })
      .catch(err => console.log(err))
  }
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
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <div className="d-flex gap-3 align-items-center">
                    <Button variant="success">
                      <Link to={`/update/${user._id}`}>Edit</Link>
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>
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

export default Users;