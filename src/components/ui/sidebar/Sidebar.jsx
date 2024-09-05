'use client'
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiGoogletasks } from "react-icons/si";
import { GoChecklist } from "react-icons/go";
import { MdOutlineAccessTime } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { PiMicrosoftTeamsLogoThin } from "react-icons/pi";
import { CgOrganisation } from "react-icons/cg";
import { PiWashingMachineThin } from "react-icons/pi";
import { FcMakeDecision } from "react-icons/fc";
import { IoDocumentSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";
import { usePathname } from "next/navigation";



const Sidebar = () => {

    const navLinks = [
       
        {
            name: "Profile",
            path: "/profile/details",
            icon: CgProfile
        },
        {
            name: "Tasks",
            path: "/tasks",
            icon: SiGoogletasks
        },
        {
            name: "Checklists",
            path: "/checklists",
            icon: GoChecklist
        },
        {
            name: "Time Tracker",
            path: "/timeTracker",
            icon: MdOutlineAccessTime
        },
        {
            name: "Schedule",
            path: "/schedule",
            icon: RiCalendarScheduleFill
        },
        {
            name: "Team",
            path: "/team",
            icon: PiMicrosoftTeamsLogoThin
        },
        {
            name: "Organisation Chart ",
            path: "/organisationChart ",
            icon: CgOrganisation
        },
        {
            name: "Machinery",
            path: "/machinery",
            icon: PiWashingMachineThin
        },
        {
            name: "Decision Tree",
            path: "/decisionTree",
            icon: FcMakeDecision
        },
        {
            name: "Documents",
            path: "/documents",
            icon: IoDocumentSharp
        },
        {
            name: "Update",
            path: "/update",
            icon: GrUpdate
        },
        {
            name: "FAQ",
            path: "/faq",
            icon: FaQuestion 
        },

    ]

    const pathName = usePathname()

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                navLinks.map((link, index) => {
                                    const isActive = pathName === link.path
                                    return (
                                        <li
                                        className="mb-1"
                                            key={index}>
                                                <Link
                                                className={isActive ? "text-orange-600" : ""}
                                                 href={link.path}> <link.icon /> {link.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex  items-start justify-start mr-32">
                    <ul className="menu px-1">
                    {
                                navLinks.map((link, index) => {
                                    const isActive = pathName === link.path
                                    return (
                                        <li
                                        className="mb-1"
                                            key={index}>
                                           
                                                <Link
                                                className={isActive ? "text-orange-600" : ""}
                                                 href={link.path}> <link.icon/> {link.name}</Link>
                                        </li>
                                    )
                                })
                            }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;