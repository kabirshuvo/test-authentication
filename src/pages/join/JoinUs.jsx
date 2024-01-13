import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const JoinUs = () => {
  const [SignInFormOpen, setSignInFormOpen] = React.useState(false);

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

          <form className="flex flex-col gap-2 w-full space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="py-2 px-3 rounded-md outline-none bg-dark/5"
            />
            <input
              type="password"
              placeholder="Password"
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

          <form className="flex flex-col gap-2 w-full space-y-2">
            <input
              type="text"
              placeholder="Name"
              className="py-2 px-3 rounded-md outline-none bg-dark/5"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-2 px-3 rounded-md outline-none bg-dark/5"
            />
            <input
              type="password"
              placeholder="Password"
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
