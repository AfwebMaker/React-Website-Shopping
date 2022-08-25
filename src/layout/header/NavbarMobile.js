import React from 'react';

const NavbarMobile = ({menu , }) => {
    return (
        <div className={menu ? "slidingNavbar" : "slidingNavbar -right-[1000px]"}>
                <ul className="flex w-44 flex-col items-center">
                    {/* {data.map(item => <li className="p-3 w-full flex items-center justify-center rounded-3xl mt-3" key={item.id}>{item.title}</li>)} */}
                </ul>
        </div>
    );
};

export default NavbarMobile;