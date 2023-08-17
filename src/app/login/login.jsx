
"use client"
import React from 'react';
import { UserAuth } from '../Context/AuthContext';
import Image from 'next/image';
import Image1 from "../../../public/google-logo.png";
import Image2 from "../../../public/github2.png";
import Image3 from "../../../public/facebook-logo.png";

const LoginPage2 = () => {
    const {  googleSignIn, gitHubSignIn , FbSignIn } = UserAuth();
  const handleSignIn = async () => {
    try {
        await googleSignIn();
    } catch (error) {
        console.log(error);
    }
};
  const handelFbSignIn = async () => {
    try {
        await FbSignIn();
    } catch (error) {
        console.log(error);
    }
};
const handleGitSignIn = async () => {
    try {
        await gitHubSignIn();
    } catch (error) {
        console.log(error);
    }
};
    return (
        <div>
             <form className="card-body" >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                  </div>
                  {/* <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div> */}

                  <div className="form-control mt-1">
                    <div className="btn btn-info" onClick={handleSignIn} >Next</div>
                  </div>
                  <p className="divider">OR</p>
                  <div className="flex gap-5">
                  <div>
                    <h1>sign in using</h1>
                  </div>
                  <div className="flex gap-4 ">
                    <Image onClick={handleSignIn} src={Image1} alt="Image" className='h-10 border border-red-500 w-10  rounded-full' />
                    <Image onClick={handleGitSignIn} src={Image2} alt="Image" className='h-10 border border-red-500 w-10 rounded-full ' />
                    <Image onClick={handelFbSignIn} src={Image3} alt="Image" className='h-10 w-10 rounded-full' />
                  </div>
                  </div>
                  
                  
                </form>
        </div>
    );
};

export default LoginPage2;


