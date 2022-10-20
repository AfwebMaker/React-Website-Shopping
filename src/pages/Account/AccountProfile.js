import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const pic = 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'

const Account_Profile = () => {

    const [valueGeneralUserName, setValueGeneralUserName] = useState("");
    const [valueGeneralEmail, setValueGeneralEmail] = useState("");
    const [url, setUrl] = useState('');

    const getImage = (event) => {
        const file = event.target.files[0];
        console.log(event.target.files[0])
        const reader = new FileReader();
        console.log(reader)
        reader.readAsDataURL(file);

        reader.onload = () => {
            setUrl(reader.result);
        }
    }
    const clickHandler = () => {
            setUrl(pic);
            
    }

    return (
        <div className='lg:p-2'>
            <div className="flex items-center justify-between mb-10">
                <div>
                    <img
                    src={url === '' ? pic : url}
                    className="rounded-full w-32 lg:w-52 hover:opacity-75 transition-all duration-300 an"
                    alt="Avatar"
                    />
                </div>
                <div className=" w-full pr-3 lg:pr-10 flex flex-col">
                    <label htmlFor="formFileSm" className="form-label text-xs sm:text-sm lg:text-base inline-block mb-2 text-gray-700">تصویر خود را بارگزاری کنید</label>
                    <div className='flex-col'>
                        <input className="form-control block
                            w-24 px-2 py-1 text-sm font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFileSm" onChange={getImage} type={'file'} accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                        />
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block px-3 mt-2 py-2 bg-red-500 text-color-main-3 font-bold text-sm leading-tight uppercase rounded-md shadow-md hover:opacity-80 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg duration-300 ease-in-out transition-all"
                            onClick={clickHandler}
                        >
                            حذف تصویر
                        </button> 
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="generalUserName" className='mb-2 font-bold'>نام کاربری</label>
                <input
                    type="text"
                    value={valueGeneralUserName}
                    onChange={(e) => setValueGeneralUserName(e.target.value)}
                    id='generalUserName'
                    className="rounded-lg outline-none border-2 border-color-dark-main-2 h-12  py-2 px-4 caret-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:border focus:border-color-main-1 focus:bg-white hover:ring-4 hover:ring-color-light-main-1 hover:border hover:border-color-main-1 hover:bg-white transition-all duration-300"
                />
                {valueGeneralUserName ? <div className="flex items-start sm:items-center flex-col sm:flex-row text-sm text-color-Text2 mt-2"><p>آدرس شما در لوگو :</p><span className='flex bg-color-light-main-1 px-2 py-1 rounded-md border overflow-scroll max-w-[260px] border-color-main-1 mt-1 sm:mt-0 sm:mr-1'><span>{valueGeneralUserName}</span><span>/https://logo.com</span></span></div> : <div className="flex items-start sm:items-center flex-col sm:flex-row text-sm text-color-Text2 mt-2"><p>آدرس شما در لوگو :</p><span className='bg-color-light-main-1 px-2 py-1 rounded-md border border-color-main-1 mt-1 sm:mt-0 sm:mr-1'>https://logo.com/USERNAME</span></div>}
            </div>
            <div className='flex flex-col mt-10'>
                <label htmlFor="generalEmail" className='mb-2 font-bold'>ایمیل</label>
                <input
                    type="email"
                    value={valueGeneralEmail}
                    onChange={(e) => setValueGeneralEmail(e.target.value)}
                    id='generalEmail'
                    className="rounded-lg outline-none border-2 border-color-dark-main-2 h-12  py-2 px-4 caret-color-main-1 focus:ring-4 focus:ring-color-light-main-1 focus:border focus:border-color-main-1 focus:bg-white hover:ring-4 hover:ring-color-light-main-1 hover:border hover:border-color-main-1 hover:bg-white transition-all duration-300"
                />
            </div>
            <div className='flex flex-col mt-10 text-sm'>
                <p className='mb-3'>  غیرفعال کردن تبلیغات  <Link to='' className='rounded-md p-1 bg-color-main-1 text-[9px] text-color-main-3 mr-1'>حرفه ای</Link></p>
                <p className='leading-7'> می توانید با یک حساب <Link to='' className='rounded-md text-color-main-1'> حرفه ای </Link> یا <Link to='' className='rounded-md text-color-main-1'> کسب و کار حرفه ای </Link> تبلیغات را در سراسر سایت غیرفعال کنید.</p>
            </div>
            <div className="flex space-x-2 justify-end items-center mt-10">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-5 py-2.5 bg-color-main-1 text-color-main-3 font-bold text-base leading-tight uppercase rounded-lg shadow-md hover:opacity-80 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg duration-300 ease-in-out transition-all"
                >
                    ذخیره تغییرات
                </button>
            </div>
        </div>
    );
};

export default Account_Profile;