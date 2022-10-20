import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logo } from "../assets/images";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleClick = () => {
    setClick(!click);
  };

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "hidden",
      },
    },
  };

  const handleNavClick = () => {
    if (pathname !== "/") navigate("/");
    setClick(false);

    return;
  };

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    if (
      pathname.includes("about") ||
      pathname.includes("contact") ||
      pathname.includes("faqs")
    ) {
      setStickyClass("gradient__bg");
      return () => setStickyClass("");
    } else {
      window.addEventListener("scroll", stickNavbar);
      return () => window.removeEventListener("scroll", stickNavbar);
    }
  }, [pathname]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 80 ? setStickyClass("gradient__bg") : setStickyClass("");
    }
  };
  return (
    <header
      className={`z-[9999] fixed top-0 left-0 right-0 py-5 px-6 lg:py-5 lg:px-16 flex justify-center ${stickyClass}`}>
      <nav className="flex flex-row justify-between items-center w-screen max-w-[110rem]">
        <div className="z-50">
          <Link
            to="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={logo} alt="" className="w-16" />
            <span className="ml-3 text-xl md:block hidden">
              PATARA EXCHANGE
            </span>
          </Link>
        </div>
        <div>
          <button
            className="-translate-y-4 -translate-x-8 md:hidden block absolute z-50"
            onClick={handleClick}>
            <Icon
              icon={click ? "ep:close" : "charm:menu-hamburger"}
              fontSize={30}
              color="fff"
            />
          </button>
          <aside>
            <nav className="md:flex hidden lg:space-x-16 space-x-8">
              <ul className="flex flex-row space-x-8  items-center text-white font-semibold lg:text-base text-sm">
                {MenuItems.map((items, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? items.cNameActive : items.cName
                        }
                        to={items.url}
                        onClick={handleNavClick}>
                        {items.title}
                      </NavLink>
                    </li>
                  );
                })}
                {/* <li>
                  <Link
                    className="cursor-pointer"
                    to="/"
                    onClick={handleNavClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer"
                    to="/about"
                    onClick={handleNavClick}>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer"
                    to="/contact"
                    onClick={handleNavClick}>
                    Contact
                  </Link>
                </li> */}
              </ul>
              <ul className="flex flex-row space-x-4 items-center lg:text-base text-sm">
                <li className="h-12 rounded-3xl text-center bg-orange-400 text-white font-semibold hover:-translate-y-1 transition-all duration-500 ease-in-out">
                  <a
                    className="px-6 w-full h-full flex justify-center items-center"
                    href="https://wa.me/message/RFB4WFBPM6WTL1"
                    target="_blank"
                    onClick={handleNavClick}
                    rel="noreferrer">
                    Trade Now
                    <span className="rounded-full bg-white ml-2">
                      <Icon
                        icon="fe:arrow-right"
                        fontSize={30}
                        className="text-orange-400 p-1.5"
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </nav>

            <motion.nav
              initial={false}
              animate={click ? "open" : "closed"}
              variants={variants}
              className={`md:hidden block bg-[#175754] absolute top-0 left-0 right-0 bottom-0 min-h-screen`}>
              <div className="flex flex-col justify-center h-full items-center min-w-full px-8">
                <div className="space-y-16 w-full max-w-md">
                  <ul className="flex flex-col space-y-10 items-center text-white font-semibold ">
                    {MenuItems.map((items, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? items.cNameActive : items.cName
                            }
                            to={items.url}
                            onClick={handleNavClick}>
                            {items.title}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="flex flex-col space-y-4 items-center min-w-full font-semibold">
                    <li className="h-12 w-full rounded-3xl bg-orange-400 text-white cursor-pointer hover:-translate-y-1 transition-all duration-500 ease-in-out">
                      <a
                        className="w-full h-full flex justify-center items-center "
                        href="https://wa.me/message/RFB4WFBPM6WTL1"
                        target="_blank"
                        onClick={handleNavClick}
                        rel="noreferrer">
                        Trade Now
                        <span className="rounded-full bg-white ml-2">
                          <Icon
                            icon="fe:arrow-right"
                            fontSize={30}
                            className="text-orange-400 p-1.5"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
