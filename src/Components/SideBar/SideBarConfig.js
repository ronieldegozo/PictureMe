import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaRegCompass } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoNotificationsOutline, IoAddCircleOutline  } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";

export const menu = [
    {
        title: "Home",
        icon: <IoHomeOutline className="text-2xl mr-5" ></IoHomeOutline>, 
        activeIcon:<IoHomeOutline className="text-2xl mr-5" ></IoHomeOutline>
    },
    {
        title:"Search", 
        icon: <IoIosSearch className="text-2xl mr-5" ></IoIosSearch>, 
        activeIcon: <IoIosSearch className="text-2xl mr-5" ></IoIosSearch>
    },
    {
        title:"Explore", 
        icon: <FaRegCompass className="text-2xl mr-5" ></FaRegCompass>, 
        activeIcon: <FaRegCompass className="text-2xl mr-5" ></FaRegCompass>
    },
    {
        title:"Reels", 
        icon:<RiVideoLine  className="text-2xl mr-5" ></RiVideoLine>, 
        activeIcon:<RiVideoLine  className="text-2xl mr-5" ></RiVideoLine>
    },
    {
        title:"Message", 
        icon:<FaRegMessage className="text-2xl mr-5" ></FaRegMessage>, 
        activeIcon:<FaRegMessage className="text-2xl mr-5" ></FaRegMessage>
    },
    {
        title:"Notification",
        icon: <IoNotificationsOutline className="text-2xl mr-5" ></IoNotificationsOutline>,
        activeIcon: <IoNotificationsOutline className="text-2xl mr-5" ></IoNotificationsOutline>
    },
    {
        title: "Create",
        icon: <IoAddCircleOutline className="text-2xl mr-5" ></IoAddCircleOutline>,
        activeIcon: <IoAddCircleOutline className="text-2xl mr-5" ></IoAddCircleOutline>
    },
    {
        title: "Profile",
        icon: <CgProfile  className="text-2xl mr-5"  ></CgProfile>,
        activeIcon: <CgProfile  className="text-2xl mr-5" ></CgProfile>
    }
]