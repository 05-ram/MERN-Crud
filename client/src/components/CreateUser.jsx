import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from "axios";
const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/create', { name, email, age })
            .then(res => {
                alert(res.message);
                navigate('/')
            })
        setName('')
        setEmail('')
        setAge('')
    }
    return (
        <>
            <div className="mx-3 mt-3">
                <Button variant='outline-light' className='text-center'>
                    <Link to='/'>Back</Link>
                </Button>
            </div>
            <h3 className='text-center pt-4'>Create User</h3>
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <Form style={{ backgroundColor: '#00000026', padding: "24px" }} className='rounded' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 form-grp" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 form-grp" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 form-grp" controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>
                    <Button variant='success' type='submit'>Submit</Button>
                </Form>
            </div>
        </>

    )
}

export default CreateUser