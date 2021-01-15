import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-#fffdd0-300">
            <div className="container mx-auto flex justify-between">
                <nav className="flex justify-between">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-black"
                        className="inline-flex items-center py-6 px-3 mr-4 text-black hover:text-dark-700 text-3xl font-bold cursive tracking-widest"
                    >
                        BONFIRE
                    </NavLink>
                    <NavLink to="/"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-black-800 hover:text-green-500"
                        activeClassName="text-black-800 bg-red-600"
                    >
                        HOME
                    </NavLink>

                    <select className="px-3 py-3 my-6" >
                        <option>MEN</option>
                    </select>
                    <select className="px-3 py-3 my-6">
                        <option>WOMEN</option>
                    </select>
                    <NavLink to="/lookbook"
                        activeClassName="text-red-100 bg-red-600"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-black-800 hover:text-green-500"
                    >
                        LOOKBOOK
                    </NavLink>
                    <NavLink to="/blog"
                        activeClassName="text-red-100 bg-red-600"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-black-800 hover:text-green-500"
                    >
                        BLOG
                    </NavLink>
                    <NavLink to="/cart"
                        activeClassName="text-red-100 bg-red-600"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-black-800 hover:text-green-500"
                    >
                        CART
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}