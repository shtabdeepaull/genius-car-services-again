import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating ,updateError] = useUpdateProfile(auth);
   

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    // if(user){
    //     navigate('/home');
    // }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister =async (event) =>{
        event.preventDefault();
        // console.log(event.target.password.value);
        const name= event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName:name});
        navigate('/home');
       
    }
   
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' required/>
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <input type="password" name="password" id="" placeholder='Your Password' required/>
                <input onClick={() => setAgree(!agree)}  type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input  
                disabled={!agree}
                className='mx-auto w-50 btn btn-primary mt-2' 
                type="submit"
                 value="Register" />
                <p>Already have an Account?? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login.</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;