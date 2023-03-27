import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './LoginForm.css'

 function LoginForm(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
     body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    window.location.href = '/';
  }else {
    alert('Wrong email or password');
  }

  };   
  return (
    // <form onSubmit={handleSubmit}>
    //   <label for="email">Email Address</label>
    //   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder= "email address" />
    //   <label for="password">Password</label>
    //   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder= "password" />
    //   <button type="submit">Login</button>
    // </form>

    <Form className="form-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    <Form.Group className="mb-3">

    </Form.Group>
      <Form.Group className="btn">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>

      <Form.Group>
      <Form.Text className="text-muted">
          New user?
        </Form.Text>
        <Form.Group className="btn-2">
          <Button variant="link" type="submit">
            Sign up
            </Button>
        </Form.Group>
        
      </Form.Group>
    </Form>
  )
}
export default LoginForm;