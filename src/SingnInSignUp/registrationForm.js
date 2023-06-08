import React, { useState, useEffect } from "react";
const registrationForm = () => {
  const nameChangeHandler = (event) => {
    console.log('name changed', event.target.value)
  }
  const emailChangeHandler = (event) => {
    console.log('email changed', event.target.value)
  }
  return (
    <div>
      <h1 className="text-6xl text-center">Register form</h1>
      <form className=" ">
        <div className="w-1/2 mx-auto border my-8 border-red-400">
          <div className="my-8 ">
            <label className="text-xl mx-6">Name</label>
            <input onChange={nameChangeHandler} type="text" placeholder="Type here" className="input bg-gray-300 input-bordered w-full max-w-xs" />
          </div>
          <div className="my-8">
            <label className="text-xl mx-6">Email</label>
            <input onChange={emailChangeHandler} type="text" placeholder="Type here" className="input bg-gray-300 input-bordered w-full max-w-xs" />
          </div>
          <div className="ml-4">
            <button className="btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default registrationForm;