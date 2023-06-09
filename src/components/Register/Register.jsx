import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Register = () => {

  const navigate = useNavigate();
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const { user, signUpWithEmail, updateUserProfile } = useContext(AuthContext);
  // console.log(user, signUpWithEmail);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgUrl = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6)
    {
      setError('Password should be at least 6 characters');
      return
    }
    else if (!/(?=.*[a-z])/.test(password))
    {
      setError('Password not valid,should contain at least one lower case');
      return
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
      setError('Password not valid,should contain at least one upper case');
      return;
    } else if (!/(?=.*[!#$%&? "])/.test(password)) {
      setError('Password not valid, use one special character');
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setError('Password not valid, use an one number');
      return;
    }
    // console.log(name, imgUrl, email, password);
    signUpWithEmail(email, password)
      .then(result => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        setError('')
        setSuccess('Registration Successfull');
        form.reset();
        updateUserProfile(name, imgUrl)
        navigate('/')
      
      })
      .catch(err => {
        // console.log(err.message);
        setSuccess('')
        setError(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div className='hero-content flex-col'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold'>Register now!</h1>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='name'
                  name='name'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo URL</span>
                </label>
                <input
                  type='url'
                  placeholder='photo url'
                  name='url'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
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
                  type='password'
                  placeholder='password'
                  name='password'
                  className='input input-bordered'
                  required
                />
              </div>
              <div>
                <p className='text-success'>{success ? success : ''}</p>
                <p className='text-red-600'>{error ? error : ''}</p>
              </div>
              <div className='label'>
                <p>
                  <span>
                    Already registered?Please{' '}
                    <Link
                      to='/login'
                      className=' link link-hover  text-blue-500'
                    >
                      Login
                    </Link>
                  </span>
                </p>
              </div>
              <div className='text-center mt-2 md:mt-4 w-auto'>
                <input
                  type='submit'
                  value='Register'
                  className='btn btn-primary'
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
