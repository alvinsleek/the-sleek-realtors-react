import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './SignupForm.css';


function SignupForm () {
    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    // const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ email, password, password_confirmation: passwordConfirmation }),
            });

            if(response.ok) {
                //redirect to homepage
                window.location.href = '/Home.js';
                } else {
                    alert('Sign up failed');
            };


    // const handleSignup = (e) => {
    //     e.preventDefault();

    //     history.push('/signup');
    // };
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </Form.Group>

    <Button variant="primary" type="submit">
    Sign Up
    </Button>
    </Form>
            
        // <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        // <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        // <input
        // type="password"
        // value={passwordConfirmation}
        // onChange={(e) => setPasswordConfirmation(e.target.value)}
        // />
        // <button type="submit">Sign up</button>
    
  );
}


export default SignupForm;