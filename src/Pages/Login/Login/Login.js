import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user) {
          navigate(from, {replace: true});
      }

    

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
        {/* <PageTitle title="Login"></PageTitle> */}
        <h2 className='text-primary text-center mt-2'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">   
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
               Login
            </Button>
        </Form>
        {/* {errorElement} */}
        <p>New to Genius Car?? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register.</Link></p>
        <p>Forget Password?? <button to="/register" className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button></p>
        <SocialLogin></SocialLogin>
        {/* <ToastContainer/> */}
    </div>
    );
};

export default Login;