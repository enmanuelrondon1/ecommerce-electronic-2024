import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoIosClose,
  IoMdCart,
  IoMdSearch,
} from "react-icons/io";
import { DarkMode } from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "/#about",
  },
  {
    id: 3,
    name: "Contact",
    href: "/#conctac",
  },
  {
    id: 4,
    name: "Blogs",
    href: "/#blog",
  },
];

const DrowDownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "New Arrivals", link: "/new-arrivals" },
  { id: 3, name: "Best Sellers", link: "/best-sellers" },
  { id: 4, name: "Discounted Items", link: "/discounts" },
  { id: 5, name: "Popular Categories", link: "/categories" },
];

// export const Navbar = ({ handleOrderPopup }) => {
//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
//       <div className="py-4">
//         <div className="container flex justify-between items-center ">
//           {/* logo and links section  */}
//           <div className="flex  items-center gap-4 ">
//             <a
//               href="#"
//               className="uppercase text-primary font-semibold tracking-widest text-2xl sm:text-3xl "
//             >
//               Eshop
//             </a>

//             {/* menu items  */}
//             <div className="hidden lg:block ">
//               <ul className="flex items-center gap-4 ">
//                 {MenuLinks.map((item, index) => (
//                   <li key={index} className="">
//                     <a
//                       href={index.href}
//                       className="inline-block px-4 font-semibold text-gray-500 hover:text-red-500 dark:hover:text-red-500 duration-200 "
//                     >
//                       {item.name}
//                     </a>
//                   </li>
//                 ))}

//                 <li className="relative group cursor-pointer">
//                   <a
//                     href="#"
//                     className="flex items-center gap-[2px] py-2 text-gray-500 font-semibold hover:text-primary dark:hover:text-primary duration-200 "
//                   >
//                     Quick Links
//                     <span>
//                       <FaCaretDown className="transition-all duration-300 group-hover:rotate-180 mx-2" />
//                     </span>
//                   </a>
//                   <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md text-black p-2  shadow-md dark:bg-gray-700 ">
//                     <ul>
//                       {DrowDownLinks.map((item, index) => (
//                         <li
//                           key={index}
//                           className="inline-block w-full rounded-md p-2   hover:bg-primary/20 "
//                         >
//                           <a href={index}>{item.name}</a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* navbar right section */}
//           <div className="flex justify-between items-center gap-4 ">
//             {/* Search bar section  */}
//             <div className="relative group hidden sm:block ">
//               <input type="text" placeholder="Search" className="search-bar " />
//               <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 " />
//             </div>
//             {/* order button section  */}
//             <button onClick={() => console.log(true)} className="relative p-3 ">
//               <FaCartShopping className=" text-xl text-gray-600 dark:text-gray-400  " />
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs ">
//                 4
//               </div>
//             </button>

//             {/* dark mode  */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* lower Navbar  */}
//     </div>
//   );
// };

import React, { useState } from "react";

const NAVBAR_CLASSES = {
  NAV: "bg-background fixed top-0 left-0 right-0 z-50 shadow-md",
  CONTAINER: "container mx-auto flex justify-between items-center p-4",
  LOGO: "text-2xl font-bold text-primary",
  LINKS: "hidden md:flex space-x-4",
  LINK: "text-muted-foreground hover:text-primary",
  DROPDOWN: "absolute hidden bg-white shadow-lg mt-2 rounded-md",
  DROPDOWN_LINK: "block px-4 py-2 text-muted-foreground hover:bg-zinc-200",
  ICON_BUTTON: "text-muted-foreground hover:text-primary",
  CART_COUNT:
    "absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1",
  TOGGLE_BUTTON: "bg-secondary text-secondary-foreground p-2 rounded-lg",
};

export const Navbar = ({ handleOrderPopup, orderPopup }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={NAVBAR_CLASSES.NAV}>
      <div className={NAVBAR_CLASSES.CONTAINER}>
        <div className={NAVBAR_CLASSES.LOGO}>ESHOP</div>
        <div className={NAVBAR_CLASSES.LINKS}>
          <a href="#" className={NAVBAR_CLASSES.LINK}>
            Home
          </a>
          <a href="#" className={NAVBAR_CLASSES.LINK}>
            About
          </a>
          <a href="#" className={NAVBAR_CLASSES.LINK}>
            Contact
          </a>
          <a href="#" className={NAVBAR_CLASSES.LINK}>
            Blogs
          </a>
          <div className="relative">
            <button
              className={NAVBAR_CLASSES.ICON_BUTTON}
              onClick={toggleDropdown}
            >
              Quick Links
            </button>
            <div
              className={
                showDropdown
                  ? NAVBAR_CLASSES.DROPDOWN
                  : `${NAVBAR_CLASSES.DROPDOWN} hidden`
              }
            >
              <a href="#" className={NAVBAR_CLASSES.DROPDOWN_LINK}>
                Link 1
              </a>
              <a href="#" className={NAVBAR_CLASSES.DROPDOWN_LINK}>
                Link 2
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className={NAVBAR_CLASSES.ICON_BUTTON}>
            <div className="relative group hidden sm:block ">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
              />

              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
                alt="Search"
                className="text-gray-400/70 group-hover:text-primary transition-all duration-300  sm:text-2xl absolute top-1/2 -translate-y-1/2 right-3 "
              />
            </div>
          </button>
          <button
            onClick={() => handleOrderPopup()}
            className={`NAVBAR_CLASSES.ICON_BUTTON relative p-3 `}
          >
            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs "></div>
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=🛒"
              alt="Cart"
            />

            <span className={NAVBAR_CLASSES.CART_COUNT}>4</span>
          </button>
          <button className={NAVBAR_CLASSES.TOGGLE_BUTTON}>
            <DarkMode />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
