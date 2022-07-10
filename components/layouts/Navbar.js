import { useState } from "react";
import styles from "/styles/Layout.module.css";

function Navbar() {

  const [active, setActive] = useState(false);

  const handleMobileMenuClick = () => {
    setActive(!active)
  }

  return (
    <nav className={styles.container}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className={styles.logo}>
            <a href="/" className="flex items-center py-4 px-2">
              <img src="/industrial_engineering_logo.png" alt="ไออี มช" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className={styles.menuItem}>Home</a>
            <a href="/about" className={styles.menuItem}>About</a>
            <a href="/how_to" className={styles.menuItem}>Curriculum</a>
            <a href="/about_us" className={styles.menuItem}>Members</a>
            <a href="/comming_soon" className={styles.menuItem}>Research</a>
            <a href="/contact" className={styles.menuItem}>Resources</a>
            <a href="/contact" className={styles.menuItem}>Contact</a>
            <a href="/" className={styles.menuItem}>EN</a>
            <a href="/" className={styles.menuItem}>Search</a>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
          <button
                className="outline-none mobile-menu-button ml-3 mr-4"
                onClick={handleMobileMenuClick}
              >
                <svg
                  className=" w-10 h-10 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
        </div>
      </div>

       {/* <!-- mobile menu --> */}

       <div
          className={`${active?"":"hidden"} mobile-menu right-0 bg-white absolute border-pink-900 border-b-2 border-l-2 w-1/2 z-50`}
        >
          <ul className="">
            <li className="active">
              <a
                href="/"
                className={`block text-sm px-2 py-4`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`block text-sm px-2 py-4 `}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/how_to"
                className={`block text-sm px-2 py-4 `}
              >
                Curriculum
              </a>
            </li>
            <li>
              <a
                href="/about_us"
                className={`block text-sm px-2 py-4 `}
              >
               Members
              </a>
            </li>
            <li>
              <a
                href="/comming_soon"
                className={`block text-sm px-2 py-4  `}
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block text-sm px-2 py-4  `}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block text-sm px-2 py-4  `}
              >
                Contact
              </a>
            </li>
            <li>
              <hr className="bg-black"></hr>
            </li>
            <li>
              <a
                href="/contact"
                className={`block text-sm px-2 py-4  `}
              >
                EN
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
