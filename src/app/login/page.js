
import Image from "next/image";

import React from "react";
import Image1 from "../../../public/google-logo.png";
import Image2 from "../../../public/facebook-logo.png";
import Image3 from "../../../public/LinkedIn_logo640px-s.png";

import Image4 from "../../../public/zoho-logo-web.png";
import Image5 from "../../../public/social.jpg";
import Image6 from "../../../public/images.png";
import Image7 from "../../../public/lock.png";
import Link from "next/link";

const LoginPage = () => {
  // const handleLogin = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);
  //   signIn(email, password)
  //     .then(result => {
  //       const user = result.user;
  //       console.log(user);
  //       Swal.fire({
  //         title: 'User Login Successful.',
  //         showClass: {
  //           popup: 'animate__animated animate__fadeInDown'
  //         },
  //         hideClass: {
  //           popup: 'animate__animated animate__fadeOutUp'
  //         }
  //       });
  //       navigate(from, { replace: true });
  //     })
  // }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
          {/* Caucel section  */}

          <div className="card w-full h-screen flex-shrink-0  max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <div className="flex justify-between">
                  <Image src={Image4} alt="Image" className='h-16 w-16  ' />
                  <button className="btn btn-secondary w-48 border-full">Try smart sign in</button>

                </div>

                <h1 className="text-2xl mt-4">Sign in </h1>
                <h1> <h1>to access Zoho Home</h1></h1>
                <form className="card-body" >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>

                  <div className="form-control mt-1">
                    <input disabled={false} className="btn btn-info" type="submit" value="Next" />
                  </div>
                  <p className="divider">OR</p>
                  <div>
                    <h1>sign in using</h1>
                  </div>
                  <div className="flex gap-4 ">
                    <Image src={Image1} alt="Image" className='h-10 w-10  rounded-full' />
                    <Image src={Image2} alt="Image" className='h-10 w-10 rounded-full ' />
                    <Image src={Image3} alt="Image" className='h-10 w-10 rounded-full' />
                  </div>
                </form>
                <div className=""><span className="text-sm">Dont have a Zoho account?</span> <Link className="text-sm text-sky-400 font-semibold" href='/singin' >Sign Up Now</Link></div>
              </div>



            </div>
          </div>
          <div className=" card md:w-2/6 h-screen text-center  lg:text-left shadow-2xl bg-base-100">
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <div>
                  <Image src={Image6} className="h-80 w-full" alt="Image" />
                  <h1 className="text-center text-xl mt-9">Password less sign-in</h1>
                  <h1 className="text-center px-6 mt-3">Move away from risky passwords and experience one-tap access to Zoho. Download and install OneAuth.</h1>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <button className="btn btn-info  btn-sm ">learn more</button>
                  </div>

                </div>
              </div>
              <div id="item2" className="carousel-item w-full">
                <div>
                  <Image src={Image5} className="h-80 w-full" alt="Image" />

                  <h1 className="text-center text-xl mt-9">MFA for all accounts</h1>
                  <h1 className="text-center px-6 mt-3">Secure online accounts with OneAuth 2FA. Back up OTP secrets and never lose access to your accounts.</h1>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <button className="btn btn-info  btn-sm ">learn more</button>
                  </div>
                </div>
              </div>
              <div id="item3" className="carousel-item w-full">
                <div>
                  <Image src={Image7} className="h-80 w-full" alt="Image" />
                  <h1 className="text-center text-xl mt-9">Enhanced sign-in security</h1>
                  <h1 className="text-center px-6 mt-3">Using only a password to sign in? To strengthen the security of your account, we’re introducing additional verification for any unusual sign-in attempt.</h1>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <button className="btn btn-info  btn-sm ">learn more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full py-2">
              <a href="#item1" className="btn btn-xs">1</a>
              <a href="#item2" className="btn btn-xs">2</a>
              <a href="#item3" className="btn btn-xs">3</a>
            </div>
          </div>

        </div>

      </div>
      <div className="bg-base-200 text-center pt-10">© 2023, InfoNexus Corporation Pvt. Ltd. All Rights Reserved. </div>
    </div>
  );
};

export default LoginPage;



















