import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const ForgetPassword = () => {
  const [error, setError] = useState('');
  const { passwordReset } = useContext(AuthContext);

  const handleForgetPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    // console.log(email);
    passwordReset(email)
      .then(() => {
        setError('');
        alert('Please check your email');
        form.reset()
      })
      .catch((err) => {
        setError('');
        setError(err.message);
    })
  }
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='text-center'>
          <h3 className='text-center text-3xl text-green-400 font-bold'>
            Forget Password???No Tension
          </h3>
        </div>
        <div className='card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleForgetPassword}>
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
              <div>
                <p className='text-red-600'>{error ? error : ''}</p>
              </div>
              <div className='text-center my-2'>
                <input
                  type='submit'
                  value='confirm'
                  className='btn btn-primary'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;