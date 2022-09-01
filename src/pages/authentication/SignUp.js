import React, { useState, useEffect } from "react";
//images
import imageSignUp from "../../assets/imags/Fingerprint-bro.svg";
// react icons
import { FaGoogle } from "react-icons/fa";
//react router dom
import { Link } from "react-router-dom";
// function 
import { validate } from "../../functions/validateForm";

const SignUp = () => {
  const [data, setData] = useState({
    userName: "",
    tel: "",
    password: "",
  });

  const [errors,setErrors] = useState({})
  const [focus,setFocus] = useState({})

  const changeHandler = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const focusHandler = (e) => {
    setFocus({...focus,[e.target.name]:true})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length){
      console.log(data)
    } else{
      setFocus({
        userName: true,
        tel: true,
        password: true,
      })
    }
  }

  

  useEffect(() => {
    setErrors(validate(data))
  },[data, focus])

  return (
    <section className="h-screen">
      <div className="container h-full">
        <div className="flex items-center flex-wrap h-full text-gray-800">
          <div className="w-1/2 flex items-center justify-center h-full">
            <img src={imageSignUp} className="w-5/6 " alt="" />
          </div>
          <div className="w-1/2 h-full bg-fuchsia-400 flex items-center justify-center">
            <div className="w-full h-full  flex items-center justify-center">
              <div className="flex items-center justify-center p-6 rounded-lg shadow-2xl bg-white max-w-[400px] w-full">
                <form onSubmit={submitHandler} className="w-full">
                  <div className="grid grid-cols-1 gap-y-4">
                    <div className="form-group">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label text-sm inline-block mb-2 mr-1 text-gray-700"
                      >
                        نام کاربری
                      </label>
                      <input
                        type="text"
                        className=" flex w-full px-3 py-1.5 text-sm font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:outline-none"
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        name="userName"
                        value={data.userName}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                      />
                      {errors.userName && focus.userName && 
                      <div className="mt-[2px]">
                        <span className="text-red-600 text-[10px] bg-red-100 px-2 rounded-md py-[2px] mr-1">
                          {errors.userName }
                        </span>
                      </div> }
                    </div>
                    <div className="form-group">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label text-sm inline-block mb-2 mr-1 text-gray-700"
                      >
                        موبایل
                      </label>
                      <input
                        type="tel"
                        className=" flex w-full px-3 py-1.5 text-sm font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:outline-none"
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        name="tel"
                        value={data.tel}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                      />
                      {errors.tel  && focus.tel && 
                      <div className="mt-[2px]">
                        <span className="text-red-600 text-[10px] bg-red-100 px-2 rounded-md py-[2px] mr-1">
                          {errors.tel  }
                        </span>
                      </div> }
                    </div>
                    <div className="form-group">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label text-sm inline-block mb-2 mr-1 text-gray-700"
                      >
                        رمز
                      </label>
                      <input
                        type="password"
                        className=" flex w-full px-3 py-1.5 text-sm font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:outline-none"
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                      />
                      {errors.password && focus.password && 
                      <div className="mt-[2px]">
                        <span className="text-red-600 text-[10px] bg-red-100 px-2 rounded-md py-[2px] mr-1">
                          {errors.password }
                        </span>
                      </div> }
                      
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" w-full px-6 py-3 mt-5 bg-color-main-1 text-white font-medium text-sm rounded-lg shadow-md  hover:ring-4 hover:ring-color-light-main-1 hover:shadow-lg  focus:opacity-75 focus:shadow-lg focus:outline-none focus:ring-0  active:opacity-75 active:shadow-lg transition-all duration-300 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    ثبت نام
                  </button>
                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">یا</p>
                  </div>

                  <a
                    className="px-7 py-3 text-color-Text3 font-medium text-sm rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-color-dark-main-2"
                    href="#!"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    {/* Google  */}
                    <FaGoogle className="ml-2 text-color-Text3" />
                    با گوگل ادامه دهید
                  </a>

                  <p className="text-[11px] mt-5 py-1 text-center">
                    ورود شما به معنای پذیرش
                    <Link className="text-color-main-1" to="">
                      {" "}
                      شرایط لـــوگـــو{" "}
                    </Link>
                    و
                    <Link className="text-color-main-1" to="">
                      {" "}
                      قوانین حریم خصوصی{" "}
                    </Link>
                    است.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
