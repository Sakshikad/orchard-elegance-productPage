import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@service/utils/hooks.js";
import { toggleDarkTheme } from "@modules/auth/service/authSlice.js";
import ProfilePage from "../User/ProfilePage";
import { Link } from "react-router-dom";

const NavItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Shop",
    dropDown: true,
    dropOptions: [
      {
        name: "Shop",
        to: "/shop",
      },
      {
        name: "Wishlist",
        to: "wishlist",
      },
      {
        name: "Single Product",
        to: "/product",
      },
      {
        name: "Cart",
        to: "/cart",
      },
      {
        name: "Checkout",
        to: "/checkout",
      },
    ],
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Blog",
    to: "/blog",
  },
  {
    name: "Contact",
    to: "/contact",
  },
  // {
  //   name: "Profile",
  //   to: "/profile",
  //   dropDown: true,
  //   dropOptions: [
  //     {
  //       name: "Profile",
  //       to: "/profile",
  //     },
  //     {
  //       name: "Settings",
  //       to: "/Settings",
  //     },
  //     {
  //       name: "Sign Out",
  //       to: "",
  //     },
  //   ],
  // },
];
const Navbar = () => {
  const dispatch = useAppDispatch();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const darkMode = useAppSelector((state) => state.user.darkMode);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    // console.log("toggleMenu");
    setIsMenuOpen(!isMenuOpen);
  };
  const dropMenu = React.useRef(null);

  const toggleDropdown = () => {
    // console.log("toggleDropdown");
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    // console.log("closeDropdown");
    setDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    // console.log("toggleMobileMenu");
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    dispatch(toggleDarkTheme());
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    setIsMenuOpen(false); // Close the dropdown menu when profile is clicked
    setIsProfileOpen(true); // Open the profile page
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-screen top-0 z-50 drop-shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5 px-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-lg text-organicGreen-100 font-extrabold whitespace-nowrap dark:text-white">
              Orchard Elegance
            </span>
          </a>
          <div className="flex">
            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-multi-level"
              aria-expanded="false"
              onClick={() => {
                toggleMobileMenu();

                closeDropdown();
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <button
              className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:hidden"
              onClick={toggleTheme}
            >
              {darkMode ? (
                <ion-icon name="sunny"></ion-icon>
              ) : (
                <ion-icon name="moon"></ion-icon>
              )}
            </button>
          </div>

          <div
            className={`w-full md:block md:w-auto ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium text-sm p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {NavItems?.map((nav, index) => {
                if (nav?.dropDown) {
                  return (
                    <li className="relative" ref={dropMenu} key={index}>
                      <button
                        id="dropdownNavbarLink"
                        data-dropdown-toggle="dropdownNavbar"
                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                        onClick={() => {
                          toggleDropdown();
                          if (isDropdownOpen) {
                            closeMobileMenu();
                          }
                        }}
                      >
                        {nav.name + " "}
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {/* <!-- Dropdown menu --> */}

                      <div
                        id="dropdownNavbar"
                        className={`z-10 ${
                          isDropdownOpen ? "" : "hidden"
                        } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute`}
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownLargeButton"
                        >
                          {nav.dropOptions.map((items, index) => (
                            <li key={index}>
                              <NavLink
                                to={items.to}
                                onClick={() => {
                                  toggleDropdown();

                                  closeMobileMenu();
                                }}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                {items.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <NavLink
                        to={nav.to}
                        aria-current="page"
                        className={({ isActive }) =>
                          [
                            "block py-2 px-3 rounded md:p-0",
                            ,
                            isActive
                              ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                              : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                          ].join(" ")
                        }
                        onClick={closeMobileMenu}
                      >
                        {nav.name}
                      </NavLink>
                    </li>
                  );
                }
              })}
              <li className="hidden md:block">
                <button
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleTheme}
                >
                  {darkMode ? (
                    <ion-icon name="sunny"></ion-icon>
                  ) : (
                    <ion-icon name="moon"></ion-icon>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
{
  /* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  <button
    type="button"
    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
  >
    <span className="absolute -inset-1.5"></span>
    <span className="sr-only">View notifications</span>
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  </button>
  <div className="relative ml-3">
    <div>
      <button
        type="button"
        onClick={toggleMenu}
        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>
    {isMenuOpen && (
      <div
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
      >
        <Link
          to="/profile" // Replace with the appropriate route for your ProfilePage
          onClick={handleProfileClick}
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-0"
        >
          Your Profile
        </Link>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabindex="-1"
          id="user-menu-item-1"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabindex="-1"
          id="user-menu-item-2"
        >
          Sign out
        </a>
      </div>
    )}
  </div>
</div>; */
}
