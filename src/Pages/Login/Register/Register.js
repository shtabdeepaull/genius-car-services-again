import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(event.target);

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        //   await createUserWithEmailAndPassword(email, password);
        //   await updateProfile({displayName:name});
        //   alert('updated profile');
        //   navigate('/home');
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input  type="checkbox" name="terms" id="terms" />
                {/* <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <input
                   
                    className='mx-auto w-50 btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an Account?? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login.</Link></p>
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default Register;