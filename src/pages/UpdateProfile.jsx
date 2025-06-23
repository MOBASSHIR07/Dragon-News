import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const UpdateProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get('name')?.trim();
    const photoURL = form.get('photoURL')?.trim();

    setError('');
    setSuccess('');

    if (!name || !photoURL) {
      setError('All fields are required.');
      return;
    }

    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        setSuccess('Profile updated successfully!');
        setError('');
      })
      .catch((err) => {
        console.error('Error updating profile:', err);
        setError('Failed to update profile. Please try again.');
      });
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className='text-2xl font-semibold text-center p-3'>Update Your Profile</h2>

        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name='name'
              type="text"
              placeholder="Name"
              defaultValue={user?.displayName || ''}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name='photoURL'
              type="text"
              placeholder="Photo URL"
              defaultValue={user?.photoURL || ''}
              className="input input-bordered"
              required
            />
          </div>

          {/* ✅ Error and success message */}
          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center mt-2">{success}</p>}

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
