import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 bg-base-200 text-base-content'>
        <div>
            
          <hr/>
          <hr className='border-2' />
          <span className='footer-title'>Services</span>
          <a className='link link-hover'>Home Cookies</a>
          <a className='link link-hover'>Birthday Party</a>
          <a className='link link-hover'>Home Delivery</a>
          <a className='link link-hover'>Marrige Function</a>
        </div>
        <div>
          <span className='footer-title'>About us</span>
          <a className='link link-hover'>Phone: 017**</a>
          <a className='link link-hover'>Tele-Phone: 267***</a>
          <a className='link link-hover'>Bonani-Dhaka,BD</a>
        </div>
        <div>
          <span className='footer-title'>Legal</span>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </div>
        <div>
          <span className='footer-title'>Newsletter</span>
          <div className='form-control w-80'>
            <label className='label'>
              <span className='label-text'>Enter your email address</span>
            </label>
            <div className='relative'>
              <input
                type='text'
                placeholder='username@site.com'
                className='input input-bordered w-full pr-16'
              />
              <button className='btn btn-primary absolute top-0 right-0 rounded-l-none'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;