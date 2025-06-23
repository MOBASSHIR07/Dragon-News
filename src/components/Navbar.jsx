import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const Navbar = () => {
    const { user, logout } = React.useContext(AuthContext);
    const navigate = useNavigate(); // ✅ useNavigate inside component

    const handleLogout = () => {
        logout()
            .then(() => {
                
                navigate('/auth/login'); // ✅ Navigate after logout
            })
            .catch((err) => console.error('Logout error:', err));
    };
    return (
        <div className='flex justify-between itemm-center'>
            <div>
                {
                    user && user.name
                }
            </div>
            <div className='space-x-4'>
                <Link to='/' className='text-gray-500 hover:text-[#d72050] px-3 py-2'>Home</Link>
                <Link to='/career' className='text-gray-500 hover:text-[#d72050] px-3 py-2'>Career</Link>
                <Link to='/about' className='text-gray-500 hover:text-[#d72050] px-3 py-2'>About</Link>
                {
                    user && user.email && (
                        <Link to='/auth/updateprofile' className='text-gray-500 hover:text-[#d72050] px-3 py-2'>Profile</Link>
                    )
                }
            </div>
            <div className='flex items-center gap-2'>

                {
                    user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                    ) : (
                        <img
                            src={userIcon}
                            alt="Default Icon"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                    )
                }
                {
                    user?.email ? (
                        <div className='flex items-center gap-2'>
                            <span className='text-sm'>Welcome, {user.email}</span>
                            <button onClick={handleLogout} className='btn btn-error rounded-none'>Logout</button>
                        </div>
                    ) : (
                        <Link to='/auth/login' className='btn btn-neutral rounded-none'>Login</Link>
                    )
                }

            </div>
        </div>
    );
};

export default Navbar;