import React, { useState, useEffect } from 'react';
//images
import imageSignIn from "../../assets/imags/5464649_2853458.jpg";
// react icons
import { FaGoogle } from "react-icons/fa";
//react router dom
import { Link } from "react-router-dom";
// function
import { validateSignIn } from "../../functions/validateForm";
import { notify } from "../../functions/notify";
// tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {

    const [data, setData] = useState({
        types: "",
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
          notify("خوش آمدید", "success");
          
        } else {
          notify("موارد زیر را چک کنید", "error");
          setFocus({
            types: true,
            password: true,
          });
        }
      };
    
      useEffect(() => {
        setErrors(validateSignIn(data));
      }, [data, focus]);

    return (
        <section className="max-w-[1536px] m-auto px-[20px] md:px-[32px] xl:px-[72px] flex items-center justify-center h-screen">
      <div className="container h-full">
        <div className="flex items-center justify-center flex-wrap h-full text-gray-800">
          <div className="w-1/2 hidden lg:flex items-center justify-center h-full">
            <img src={imageSignIn} className="w-5/6 " alt="" />
          </div>
          
          <div className="lg:w-1/2 h-full  flex items-center justify-center">
            <div className="w-full h-full  flex items-center justify-center">
              <div className="flex items-center justify-end p-6 rounded-lg shadow-2xl bg-white max-w-[400px] w-full">
                <form onSubmit={submitHandler} className="w-full">
                  <div className="flex items-center ">
                  <Link to="/signup" className="text-2xl font-bold mb-5 flex text-color-Text2 pb-1">
                     ثبت نام 
                  </Link>
                  <span className="text-2xl font-bold mb-5 flex text-color-main-1 mx-2 pt-1">
                  /
                  </span>
                  <span className="text-2xl font-bold mb-5 flex text-color-Text3 pb-1">
                     ورود  
                  </span>
                  </div>

                  <div className="grid grid-cols-1 gap-y-4">
                    <div className="form-group">
                      <label
                        className="form-label text-sm inline-block mb-2 mr-1 text-gray-700" 
                      >
                        نام کاربری یا موبایل یا ایمیل
                      </label>
                      <input
                        type= "text"
                        className={(errors.types && focus.types ? "uncomplited" : "forminput")}
                        name="types"
                        value={data.types}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                      />
                      {errors.types && focus.types && (
                        <div className="mt-[2px]">
                          <span className="text-red-600 text-[10px] bg-red-100 px-2 rounded-md py-[2px] mr-1">
                            {errors.types}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label text-sm inline-block mb-2 mr-1 text-gray-700"
                      >
                        رمز
                      </label>
                      <input
                        type="password"
                        className={(errors.password && focus.password) ? "uncomplited" : "forminput"}
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
                    ورود
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

export default SignIn;