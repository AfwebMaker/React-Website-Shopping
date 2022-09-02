import React, { useState, useEffect } from "react";
//images
import imageSignUp from "../../assets/imags/Fingerprint-bro.svg";
// react icons
import { FaGoogle } from "react-icons/fa";
//react router dom
import { Link } from "react-router-dom";
// function
import { validate } from "../../functions/validateForm";
import { notify } from "../../functions/notify";
// tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [data, setData] = useState({
    userName: "",
    tel: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({});

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("ثبت نام شما با موفقیت انجام شد", "success");
      
    } else {
      notify("ثبت نام شما با موفقیت انجام نشد", "error");
      setFocus({
        userName: true,
        tel: true,
        password: true,
      });
    }
  };

  useEffect(() => {
    setErrors(validate(data));
  }, [data, focus]);

  return (
    <section className="h-screen">
      <div className="container h-full">
        <div className="flex items-center flex-wrap h-full text-gray-800">
          <div className="w-1/2 flex items-center justify-center h-full">
            <img src={imageSignUp} className="w-5/6 " alt="" />
          </div>
          <div className="w-1/2 h-full  flex items-center justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                className="absolute -top-5 right-[640px]  rotate-[150deg] "
                viewBox="0 0 270.95 237.981"
              >
                <defs>
                  <clipPath id="a">
                    <rect
                      width="160.21"
                      height="225.262"
                      fill="#15cfaa24"
                    ></rect>
                  </clipPath>
                </defs>
                <g transform="translate(0 146.359) rotate(-66)">
                  <g clip-path="url(#a)">
                    <path
                      d="M29.237,190.173C18.646,188.036,13.247,175.466,0,179.5c1.813,2.379,2.686,4.086,4.039,5.214C18.975,197.142,33.9,209.6,49.066,221.747c2.486,1.989,6.653,4.13,9.159,3.354,4.61-1.43,3.764-6.1,2.81-10.183-2.968-12.693-5.775-25.426-8.664-38.228-7.106,3.342-7.106,3.342-5.392,25.337C18.938,172.78,23.417,128.542,57,107.563c1.9,3.45,3.68,6.935,5.689,10.284,5.919,9.859,13.959,17.125,25.179,20.578,8.263,2.545,15.9,1.684,21.966-4.7,6.238-6.569,5.637-14.4,2.58-22.282C105.789,94.37,90.687,86.08,72.525,89.466c-2.241.418-4.546.482-7.625.791-1.768-23.123,2.726-44.164,16.576-62.175C102.829.312,132.4,6.878,152.055,21.6c2.429,1.82,4.519,4.093,8.155,7.43-.774-7.714-4.736-11.55-8.595-15.241C136.372-.784,110.5-4.281,91.793,5.582A60.855,60.855,0,0,0,64.94,33.343c-8.706,17.825-12.824,36.578-10.7,56.489.208,1.959.292,3.93.48,6.537-14.83,10.7-27.916,22.992-33.049,41.718-5.013,18.285,2.12,34.839,7.568,52.086M67,101.845c17.165-7.855,32.549-2.327,37.328,13.166,1.128,3.653.7,8.929-1.229,12.109-2.753,4.531-8.061,3.886-12.827,2.026-12.354-4.821-19.2-14.251-23.272-27.3"
                      transform="translate(0 -0.002)"
                      fill="#15cfaa24"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-full h-full  flex items-center justify-center">
              <div className="flex items-center justify-center p-6 rounded-lg shadow-2xl bg-white max-w-[400px] w-full">
                <form onSubmit={submitHandler} className="w-full">
                  <div className="flex items-center ">
                  <span to="" className="text-2xl font-bold mb-5 flex text-color-Text3 pb-1">
                     ثبت نام 
                  </span>
                  <span className="text-2xl font-bold mb-5 flex text-color-main-1 mx-2 pt-1">
                  /
                  </span>
                  <Link to="/signIn" className="text-2xl font-bold mb-5 flex text-color-Text2 pb-1">
                     ورود  
                  </Link>
                  </div>

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
                        className={(errors.userName && focus.userName ? "uncomplited" : "forminput")}
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        name="userName"
                        value={data.userName}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                      />
                      {errors.userName && focus.userName && (
                        <div className="mt-[2px]">
                          <span className="text-red-600 text-[10px] bg-red-100 px-2 rounded-md py-[2px] mr-1">
                            {errors.userName}
                          </span>
                        </div>
                      )}
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
                        className={(errors.tel && focus.tel ? "uncomplited" : "forminput")}
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        name="tel"
                        value={data.tel}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                      />
                      {errors.tel && focus.tel && (
                        <div className="mt-[2px]">
                          <span className="text-red-600 text-[10px] bg-red-100 px-2 rounded-md py-[2px] mr-1">
                            {errors.tel}
                          </span>
                        </div>
                      )}
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
                        className={(errors.password && focus.password ? "uncomplited" : "forminput")}
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                      />
                      {errors.password && focus.password && (
                        <div className="mt-[2px]">
                          <span className="text-red-600 text-[10px] bg-red-100 px-2 rounded-md py-[2px] mr-1">
                            {errors.password}
                          </span>
                        </div>
                      )}
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
      <ToastContainer />
    </section>
  );
};

export default SignUp;
