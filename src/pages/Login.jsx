import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setUser, userLogin } = React.useContext(AuthContext);
  const [error, setError] = React.useState('');

  const navigate = useNavigate();
  const location = useLocation()


  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');  // Reset error state before login attempt

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    userLogin(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
       
        form.reset();

        setError('');
        navigate(location?.state ? location.state : '/');
      })
      .catch(err => {
        let customMessage = '';
       


        switch (err.code) {
          case 'auth/invalid-credential':
            customMessage = 'Incorrect email or password. Please try again.';
            break;
          default:
            customMessage = err.message || 'Login failed. Please try again.';
        }


        setError(customMessage);  // ✅ Set error as a string

      });


  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className='text-2xl font-semibold text-center p-3'>Login your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered"  />
            {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}


            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className='text-center font-semibold'>Don't have an account ? <Link className=' text-red-500' to='/auth/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;