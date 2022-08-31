import React from "react";
//images
import imageSignUp from "../../assets/imags/Fingerprint-bro.svg";
// react icons
import { FaTwitter, FaGoogle } from "react-icons/fa";
//react router dom
import {Link} from 'react-router-dom'

const inputsItem = [
  {
    id: 1,
    type: "text",
    label: "نام",
    name:"name"
  },
  {
    id: 2,
    type: "text",
    label: "نام خانوادگی",
    name:"lastname"
  },
  {
    id: 3,
    type: "email",
    label: "ایمیل",
    name:"email"
  },
  // {
  //   id: 4,
  //   type: "number",
  //   label: "موبایل",
  //   name:"number"
  // },
  // {
  //   id: 5,
  //   type: "password",
  //   label: "رمز",
  //   name:"password"
  // },
];
const SignUp = () => {
  return (
    <section className="h-screen">
      <div className="container h-full">
        <div className="flex items-center flex-wrap h-full text-gray-800">
          <div className="w-1/2 flex items-center justify-center h-full">
            <img src={imageSignUp} className="w-5/6 " alt="" />
          </div>
          <div className="w-1/2 h-full  flex items-center justify-center">
            <div className="flex p-6 rounded-lg shadow-lg bg-white max-w-md">
              <form>
                {inputsItem.name === "name" || inputsItem.name === "lastname" ? 
                  <div className="grid grid-cols-2 gap-4">
                  {inputsItem.map((item) => (
                    <div key={item.id} className="form-group">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label text-sm inline-block mb-2 mr-1 text-gray-700"
                      >
                        {item.label}
                      </label>
                      <input
                        type={item.type}
                        className=" flex w-full px-3 py-1.5 text-sm font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:outline-none"
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        name={item.name}
                      />
                      <div className="mt-[2px]">
                        <span className="text-red-600 text-[10px] bg-red-100 px-3 rounded-md py-[2px]">
                          ایمیل درست وارد نشده
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                : 
                <>
                {inputsItem.map((item) => (
                  <div key={item.id} className="form-group">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label text-sm inline-block mb-2 mr-1 text-gray-700"
                    >
                      {item.label}
                    </label>
                    <input
                      type={item.type}
                      className=" flex w-full px-3 py-1.5 text-sm font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:outline-none"
                      id="exampleInput123"
                      aria-describedby="emailHelp123"
                      name={item.name}
                    />
                    <div className="mt-[2px]">
                      <span className="text-red-600 text-[10px] bg-red-100 px-3 rounded-md py-[2px]">
                        ایمیل درست وارد نشده
                      </span>
                    </div>
                  </div>
                ))}</> }
                {/* <div className="grid grid-cols-2 gap-4">
                  {inputsItem.map((item) => (
                    <div key={item.id} className="form-group">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label text-sm inline-block mb-2 mr-1 text-gray-700"
                      >
                        {item.label}
                      </label>
                      <input
                        type={item.type}
                        className=" flex w-full px-3 py-1.5 text-sm font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:outline-none"
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        name={item.name}
                      />
                      <div className="mt-[2px]">
                        <span className="text-red-600 text-[10px] bg-red-100 px-3 rounded-md py-[2px]">
                          ایمیل درست وارد نشده
                        </span>
                      </div>
                    </div>
                  ))}
                </div> */}

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
                
                <p className="text-xs mt-5 py-1 text-center">
                   ورود شما به معنای پذیرش  
                  <Link className="text-color-main-1" to=""> شرایط لـــوگـــو </Link>
                   و
                  <Link className="text-color-main-1" to=""> قوانین حریم خصوصی  </Link>
                  است.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
