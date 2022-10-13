import React from "react";
//react router dom
import { Link, useLocation, Outlet } from "react-router-dom";

const dataSidebar = [
  {
    id: 1,
    title: "عمومی",
    url: "/account/general",
  },
  {
    id: 2,
    title: "ویرایش نمایه",
    url: "/account/profile",
  },
  {
    id: 3,
    title: "کلمه عبور",
    url: "/account/password",
  },
  {
    id: 4,
    title: "پروفایل های اجتماعی",
    url: "/account/social_profiles",
  },
  {
    id: 5,
    title: "اعلان های ایمیل",
    url: "/account/notifications",
  },
  {
    id: 6,
    title: "جلسات",
    url: "/account/sessions",
  },
  {
    id: 7,
    title: "برنامه های کاربردی",
    url: "/account/applications",
  },
  {
    id: 8,
    title: "صادرات داده",
    url: "/account/export",
  },
];

const Account = () => {
  const location = useLocation().pathname;

  return (
    <div className="p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full py-8  grid grid-cols-12">
        <div className="col-span-12 mb-14 flex items-center">
          <div className="flex items-center justify-center">
            <Link to="/profile">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-full w-12 hover:opacity-75 transition-all duration-300 an"
                alt="Avatar"
              />
            </Link>
          </div>
          <div className="mr-5">
            <div className="flex">
              <Link
                to="/profile"
                className="text-xl font-bold flex text-color-Text3 hover:opacity-75 transition-all duration-300"
              >
                سیدمیثاق حمزه زاده موسوی
              </Link>
              <span className="text-2xl font-bold flex text-color-dark-main-2 mx-2">
                /
              </span>
              <span className="text-xl font-bold flex text-color-Text3 ">
                {location === "/account/general" && "عمومی"}
                {location === "/account/profile" && "ویرایش نمایه"}
                {location === "/account/password" && "کلمه عبور"}
                {location === "/account/social_profiles" &&
                  "پروفایل های اجتماعی"}
                {location === "/account/notifications" && "اعلان های ایمیل"}
                {location === "/account/sessions" && "جلسات"}
                {location === "/account/applications" && "برنامه های کاربردی"}
                {location === "/account/export" && "صادرات داده"}
              </span>
            </div>

            <p className="text-sm text-color-Text2">
              نام کاربری خود را به روز کنید و حساب خود را مدیریت کنید
            </p>
          </div>
        </div>
        <div className="col-span-3 text-sm">
          <ul className="px-2">
            {dataSidebar.map((item) => (
              <li
                key={item.id}
                className={
                  location === item.url
                    ? "text-color-Text3 font-bold hover:text-color-Text3"
                    : "text-color-Text2 hover:text-color-Text3"
                }
              >
                <Link to={item.url} className="flex w-full py-2">
                  {item.title}
                </Link>
              </li>
            ))}
            <hr className="my-3" />
            <li className="text-red-500 rounded-lg">
              <Link className="flex w-full py-2" to="/account/destroy_confirm">
                حذف حساب کاربردی
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-9"><Outlet /></div>
      </div>
    </div>
  );
};

export default Account;
