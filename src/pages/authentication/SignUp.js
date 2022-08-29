import React from "react";
//images
import imageSignUp from "../../assets/imags/Fingerprint-bro.svg";

const inputsItem = [
  {
    id: 1,
    type: "text",
    label: "نام",
  },
  {
    id: 2,
    type: "text",
    label: "نام خانوادگی",
  },
  {
    id: 3,
    type: "email",
    label: "ایمیل",
  },
  {
    id: 4,
    type: "number",
    label: "موبایل",
  },
  {
    id: 5,
    type: "password",
    label: "رمز",
  },
];
const SignUp = () => {
  return (
    <section className="h-screen">
      <div className="container h-full">
        <div className="flex items-center flex-wrap h-full text-gray-800">
          <div className="w-1/2 flex items-center justify-center h-full">
            <img src={imageSignUp} className="w-5/6 " alt="" />
          </div>
          <div className="w-1/2 h-full bg-fuchsia-400 flex items-center justify-center">
            <div className="flex p-6 rounded-lg shadow-lg bg-white max-w-md">
              <form>
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
                      />
                      <div className="mt-[2px]">
                        <span className="text-red-600 text-[10px] bg-red-100 px-3 rounded-md py-[2px]">
                          ایمیل درست وارد نشده
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="form-group form-check text-center mb-6">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck25"
                    checked
                  />
                  <label
                    className="form-check-label inline-flex text-gray-800"
                    for="exampleCheck25"
                  >
                    Subscribe to our newsletter
                  </label>
                </div>
                <button
                  type="submit"
                  className=" w-full px-6 py-2.5  bg-color-main-1  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  ثبت نام
                </button>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <a
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-[#3b5998]"
                  // style="background-color: #3b5998"
                  href="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  {/* Facebook  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-3.5 h-3.5 mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                  Continue with Facebook
                </a>
                <a
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                  // style="background-color: #55acee"
                  href="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  {/* Twitter  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-3.5 h-3.5 mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                  Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
