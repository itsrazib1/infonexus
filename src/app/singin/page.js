import React from "react";
import Link from "next/link";
import SinginForm from "./singinForm"; // Import the SinginForm component

const Page = () => {
  return (
    <div>
      <div className="navbar flex justify-between sm:px-0 md:px-10 bg-base-100">
      <div className="  -px-2">
          <a className="btn btn-ghost normal-case text-xl">InfoNexus</a>
        </div>
        <div className="flex-none">
          <span className="font-semibold text-sm">Have a InfoNexus Account?</span>{" "}
          <Link href='/login' className="text-red-500 text-sm font-semibold ps-3 underline">
            SIGN IN
          </Link>
        </div>
      </div>
      <hr />
      {/* Use the SinginForm component */}
      <SinginForm />
    </div>
  );
};

export default Page;
