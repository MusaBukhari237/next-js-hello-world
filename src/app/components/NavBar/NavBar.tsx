import React from 'react'
import NavLogo from './NavLogo';
import NavItems from './NavItems';

export default function NavBar() {

    const navItems = [
        {
            "name": "Home",
            "url": "/"
        },
        {
            "name": "Users",
            "url": "/users"
        },
        {
            "name": "ToDo",
            "url": "/todo"
        }
    ];


    return (
        <div className="navbar bg-base-200" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavItems
                            Items={navItems}
                        />
                    </ul>
                </div>
                <NavLogo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <NavItems
                        Items={navItems}
                    />
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    )
}
