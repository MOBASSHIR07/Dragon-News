import React from 'react';
import { FaGit, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold mb-3'>Login With</h2>
            <div className='*:w-full space-y-1'>
                <button className="btn">
                    <FaGoogle className="text-[#4285F4] mr-2" /> {/* Official Google Blue */}
                    Login with Google
                </button>
                <button className="btn">
                    <FaGithub className="text-black mr-2" />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;