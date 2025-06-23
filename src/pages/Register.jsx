import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const { createNewUser, setUser } = React.useContext(AuthContext);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get('email').trim();
    const name = form.get('name').trim();
    const photoURL = form.get('photoURL').trim();
    const password = form.get('password').trim();

    setError('');
    setSuccess('');

    // ✅ Client-side validation
    if (!email || !name || !photoURL || !password) {
      setError('All fields are required.');
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

    // ✅ Firebase registration
    createNewUser(email, password)
      .then(result => {
        setUser(result.user);
        setSuccess('Registration successful!');
        setError('');
       
        event.target.reset();
        navigate('/auth/login', { replace: true }); // Redirect to login after registration
      })
      .catch((error) => {
        const errorCode = error.code;
        console.error('Error during registration:', errorCode);

        let customMessage = '';
        switch (errorCode) {
          case 'auth/email-already-in-use':
            customMessage = 'Email is already registered.';
            break;
          case 'auth/invalid-email':
            customMessage = 'Invalid email address.';
            break;
          case 'auth/weak-password':
            customMessage = 'Password is too weak.';
            break;
          default:
            customMessage = error.message || 'Registration failed. Please try again.';
        }
        setError(customMessage);
        setSuccess('');
      });
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className='text-2xl font-semibold text-center p-3'>Register your Account</h2>

        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>

          {/* ✅ Error and success message */}
          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center mt-2">{success}</p>}

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>

        <p className='text-center font-semibold'>
          Already have an account? <Link className='text-red-500' to='/auth/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
