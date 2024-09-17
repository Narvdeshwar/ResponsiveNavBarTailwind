import React from "react";

export default function SignIn() {
  return (
    <div className="m-5 sm:w-[50%] sm:mx-auto bg-purple-200 md:w-[50%] p-2 rounded-lg shadow-2xl">
      <div className="md:flex md:justify-center md:items-center border-purple-100">
        {/* user-icon */}
        <div className="bg-purple-100 h-[100px] w-[100px] mx-auto rounded-full overflow-hidden mt-2 mb-2">
          <img
            src="https://images.pexels.com/photos/28316690/pexels-photo-28316690/free-photo-of-a-photo-of-a-river-and-a-rock-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <hr />
        <div className="md:border-t-2 md:border-b-2 md:"></div>
        <form className="p-2 md:w-[80%]">
          <label htmlFor="" className="mx-1">
            Username :
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full rounded-xl p-2 mt-2 mb-2 font-bold"
            placeholder="enter name here !"
          />
          <label htmlFor="" className="mx-1">
            Email :
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full rounded-xl p-2 mt-2 mb-2 font-bold"
            placeholder="enter email here !"
          />
          <label htmlFor="" className="mx-1">
            Password :
          </label>
          <input
            type="password"
            name=""
            id=""
            className="w-full rounded-xl p-2 mt-2 mb-2 font-bold"
            placeholder="enter password here !"
          />
          <button className="bg-purple-800 w-full rounded-2xl mt-2 mb-2 text-white p-2">
            login
          </button>
          <h1 className="text-center">
            New here &nbsp;<a href="" className="text-blue-500 font-bold">create new account !</a>
          </h1>
        </form>
      </div>
    </div>
  );
}
