import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React, { useState } from 'react';
import axios from 'axios';

const JoinUs = () => {
  const [SignInFormOpen, setSignInFormOpen] = React.useState(false);

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Registration state
  const [name, setName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    const user = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      const { data } = await axios.post(
        'https://backend.amraotech.com/Auth-api/login/',
        user,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      localStorage.clear();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
      window.location.href = '/';
    } catch (error) {
      console.error('Error during login:', error);
      // Handle the error, such as displaying an error message to the user
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const newUser = {
      username: name,
      email: registerEmail,
      password: registerPassword,
      is_client:false, 
      is_job_seeker:false, 
      password2:registerPassword
    };

    try {
      const { data } = await axios.post(
        'https://backend.amraotech.com/Auth-api/register/',
        newUser,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      // Handle successful registration, redirect, show a success message, etc.
      console.log('User registered successfully:', data);
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle the error, such as displaying an error message to the user
    }
  };

  const handleSignInForm = () => {
    setSignInFormOpen(!SignInFormOpen);
    console.log('Sign In Form Appear');
  };

 return (
  <div className="container my-10 md:my-20 xl:my-40 flex flex-col justify-center">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto items-center">
      {/* User Sign In */}
      <section
        className={`
          ${SignInFormOpen ? 'hidden md:p-10' : 'flex'}
          flex flex-col items-center text-center md:col-span-2 p-10 space-y-5`}
      >
        <h1 className="text-2xl font-semibold">Welcome Back</h1>
        <p>To keep connected with us please login here</p>
        <button
          onClick={handleSignInForm}
          className="bg-dark text-light w-full py-2 rounded-full uppercase font-semibold"
        >
          Sign In
        </button>
      </section>

      {/* User Sign In Form */}
      <section
        className={`${
          SignInFormOpen
            ? 'flex flex-col md:col-span-3 p-10 md:p-20 bg-light'
            : 'hidden'
        } flex flex-col items-center text-center md:col-span-2 space-y-5`}
      >
        <h1 className="text-2xl font-semibold">Login</h1>

        <form className="flex flex-col gap-2 w-full space-y-2" onSubmit={login}>
          <input
            type="text"
            placeholder="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
          />
          <input
            type="password"
            placeholder="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
          />
          <button
            type="submit"
            className="bg-dark text-light w-full py-2 rounded-full uppercase font-semibold"
          >
            Sign In
          </button>
        </form>
      </section>

      {/* User Register */}
      <section
        className={`
          ${SignInFormOpen ? 'flex md:col-span-2 p-10 md:pr-10 py-20' : 'hidden'}
          flex flex-col items-center text-center md:col-span-2 space-y-5`}
      >
        <h1 className="text-2xl font-semibold">Register Today</h1>
        <p>To keep connected with us please register here</p>
        <button
          onClick={handleSignInForm}
          className="bg-dark text-light w-full py-2 rounded-full uppercase font-semibold"
        >
          Register
        </button>
      </section>

      {/* User Register Form */}
      <section
        className={`${
          SignInFormOpen ? 'md:col-span-2 hidden' : 'flex'
        } flex flex-col items-center md:col-span-3 bg-light w-full h-full p-10 space-y-4`}
      >
        <h1 className="text-2xl font-semibold">Create Account</h1>
        <div className="flex gap-5">
          <Facebook />
          <Linkedin />
          <Twitter />
        </div>

        <p className="opacity-60">or use your email for registration</p>

        <form className="flex flex-col gap-2 w-full space-y-2" onSubmit={register}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
          />
          <input
            type="email"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            className="py-2 px-3 rounded-md outline-none bg-dark/5"
          />
          <button
            type="submit"
            className="bg-dark text-light w-full py-2 rounded-full uppercase font-semibold"
          >
            Sign Up
          </button>
        </form>
      </section>
    </div>

    <div className="mt-20"></div>
  </div>
);
};

export default JoinUs;
