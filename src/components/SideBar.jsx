import React from "react";
import { Link } from "react-router-dom";
import { MdAssignment, MdContactMail, MdCheckCircleOutline, MdOutlineInfo } from "react-icons/md";

export default function SideBar() {
    const todoCategoryLinks = [{ name: "Daily", path: "/" , icon:<MdAssignment />, iconColor: "text-blue-500"},
            { name: "Completed", path: "/completed" , icon:<MdCheckCircleOutline />, iconColor: "text-green-500"}];

    const otherLinks = [
        {name: "About", path: "/about", icon:<MdOutlineInfo />, iconColor: "text-purple-500"},
        {name: "Contact", path: "/contact_us", icon:<MdContactMail />, iconColor: "text-orange-500"}];

    return(
        <>
            <div className="sidebar bg-black/88 pl-2 pr-2 pt-2 pb-2 w-85">
                <ul className="border-b-1 border-gray-500 pb-2 mb-2">
                    {todoCategoryLinks.map((link) => (
                        <li key={link.name} className="flex flex-row items-center font-sans text-sm text-white rounded-sm pt-1 pb-2 pl-4   mb-0 w-full h-9 hover:bg-gray-800">
                            {React.cloneElement(link.icon, { className: `${link.iconColor} w-5 h-5` })}
                            <Link className="ml-4" to={link.path} >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul>
                    {otherLinks.map((link) => (
                        <li key={link.name} className="flex flex-row items-center font-sans text-sm text-white  rounded-sm pt-1 pb-2 pl-4   mb-0 w-full h-9 hover:bg-gray-800">
                           {React.cloneElement(link.icon, {className: `${link.iconColor} w-5 h-5`})}
                           <Link className="ml-4" to={link.path}>
                               {link.name}
                           </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
}