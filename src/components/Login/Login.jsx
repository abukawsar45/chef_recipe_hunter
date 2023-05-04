import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const location = useLocation();
 
  const from = location.state?.from?.pathname || '/';

  const navigate = useNavigate();

  const { SignInWithGoogle, signInWithGithub, loginWithEmailAndPassword } =
    useContext(AuthContext);


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
    loginWithEmailAndPassword(email,password)
      .then(result => {
        const loggedUser = result.user;
       
        setError('');
        setSuccess('login successfull');
        form.reset();
        navigate(from)
      })
      .catch(error => {
       
        setSuccess('');
        setError(error.message);
    })

  }
  const handleGoogleLogin = () => {
    SignInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
       
        setError('');
        setSuccess('Login successful');
        navigate(from);
      })
      .catch((err) => {
       
        setSuccess('');
        setError(err.message);

    })
  }
  const handleGithubLogin = () => {
    signInWithGithub()
      .then(result => {
        const loggedUser = result.user;
       
        setError('');
        setSuccess('Login successful');
        navigate(from);
      })
      .catch(err => {
       
        setSuccess('');
        setError(err.message);
      });
  }

  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold'>Please Login!</h1>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleLogin}>
              <div className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='text'
                    placeholder='email'
                    name='email'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='text'
                    placeholder='password'
                    name='password'
                    className='input input-bordered'
                    required
                  />
                </div>
                <span>
                  <Link
                    to='/forgetten_password'
                    className=' link link-hover text-blue-500'
                  >
                    forgetten password
                  </Link>
                </span>
                <div>
                  <p className='text-success'>{success ? success : ''}</p>
                  <p className='text-red-600'>{error ? error : ''}</p>
                </div>
                <div className='label'>
                  <p>
                    <span>
                      First time in this website?Please{' '}
                      <Link
                        to='/register'
                        className=' link link-hover text-blue-500'
                      >
                        Register
                      </Link>
                    </span>
                  </p>
                </div>
                <div className='text-center'>
                  <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col md:flex-row justify-center gap-2 w-6/12 my-6 mx-auto'>
          <div>
            <img
              onClick={handleGoogleLogin}
              className='link'
              src='https://i.ibb.co/gSTHXZJ/google-btn.png'
              alt=''
            />
          </div>
          <div>
            <img
              onClick={handleGithubLogin}
              className='link'
              src='https://i.ibb.co/g9f4P0S/github-btn.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;