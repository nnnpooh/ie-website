import { useState } from 'react';
import styles from '/styles/Layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Menu, Container } from '@mantine/core';
import { IconSettings } from '@tabler/icons';

function Navbar() {
  const [active, setActive] = useState(false);
  const [curriculumActive, setCurriculumActive] = useState(false);
  const [memberActive, setMemberActive] = useState(false);
  const handleMobileMenuClick = () => {
    setActive(!active);
  };

  const handlecurriculumClick = () => {
    setCurriculumActive(!curriculumActive);
  };

  const handleMemberClick = () => {
    setMemberActive(!memberActive);
  };

  return (
    <nav className='bg-white h-24 flex items-center justify-center'>
      <Container>
        <div className='flex justify-between'>
          <div className='h-20 bg-red-300  ' style={{ width: '200px' }}>
            {/* <Image
              src='/industrial_engineering_logo.png'
              alt='ไออี มช'
              layout='fill'
              objectFit='contain'
            /> */}
          </div>

          <div>
            <Button.Group>
              <Button className='bg-primary hover:bg-primary-light'>
                Home
              </Button>
              <Button className='bg-primary hover:bg-primary-light'>
                About
              </Button>

              <Menu shadow='md' width={200}>
                <Menu.Target>
                  <Button className='bg-primary hover:bg-primary-light'>
                    Curriculum
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item icon={<IconSettings size={14} />}>
                    Settings
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Button.Group>
          </div>

          <div className='hidden lg:flex items-center space-x-1'>
            <Link href='/'>
              <a className={styles.menuItem}>Home</a>
            </Link>
            <Link href='/about'>
              <a className={styles.menuItem}>About</a>
            </Link>
            <Link href='#'>
              <a
                href='#'
                onClick={handlecurriculumClick}
                className={styles.menuItem}
              >
                Curriculum
              </a>
            </Link>
            <Link href='#'>
              <a onClick={handleMemberClick} className={styles.menuItem}>
                Members
              </a>
            </Link>
            <Link href='/comming_soon'>
              <a className={styles.menuItem}>Research</a>
            </Link>
            <Link href='/contact'>
              <a className={styles.menuItem}>Resources</a>
            </Link>
            <Link href='/contact'>
              <a className={styles.menuItem}>Contact</a>
            </Link>
            <Link href='/'>
              <a className={styles.menuItem}>EN</a>
            </Link>
            <Link href='/'>
              <a className={styles.menuItem}>Search</a>
            </Link>
          </div>

          {/* Curriculum  */}
          <div
            className={`${
              curriculumActive ? '' : 'hidden'
            } mobile-menu right-0 top-24 bg-white absolute border-pink-900 border-b-2 border-l-2 w-1/2 z-50`}
          >
            <ul className=''>
              <li className='active'>
                <Link href='/'>
                  <a className={`block text-sm px-2 py-4`}>Bachelor</a>
                </Link>
              </li>
              <li className=''>
                <Link href='/'>
                  <a className={`block text-sm px-2 py-4`}>Master</a>
                </Link>
              </li>
              <li className=''>
                <Link href='/'>
                  <a className={`block text-sm px-2 py-4`}>Doctoral</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* member  */}
          <div
            className={`${
              memberActive ? '' : 'hidden'
            } mobile-menu right-0 top-24 bg-white absolute border-pink-900 border-b-2 border-l-2 w-1/2 z-50`}
          >
            <ul className=''>
              <li className=''>
                <Link href='/member/faculty'>
                  <a className={`block text-sm px-2 py-4`}>Faculty Members</a>
                </Link>
              </li>
              <li className=''>
                <Link href='/member/staff'>
                  <a className={`block text-sm px-2 py-4`}>Supporting Staff</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className='md:hidden flex items-center'>
            <button
              className='outline-none mobile-menu-button ml-3 mr-4'
              onClick={handleMobileMenuClick}
            >
              <svg
                className=' w-10 h-10 hover:text-green-500 '
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* <!-- mobile menu --> */}

      <div
        className={`${
          active ? '' : 'hidden'
        } mobile-menu right-0 bg-white absolute border-pink-900 border-b-2 border-l-2 w-full z-50`}
      >
        <ul className=''>
          <li className='active'>
            <Link href='/'>
              <a className={`block text-sm px-2 py-4`}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className={`block text-sm px-2 py-4 `}>About</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a
                onClick={handlecurriculumClick}
                className={`block text-sm px-2 py-4 `}
              >
                Curriculum
              </a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a
                onClick={handleMemberClick}
                className={`block text-sm px-2 py-4 `}
              >
                Members
              </a>
            </Link>
          </li>
          <li>
            <Link href='/comming_soon'>
              <a className={`block text-sm px-2 py-4  `}>Research</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className={`block text-sm px-2 py-4  `}>Resources</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className={`block text-sm px-2 py-4  `}>Contact</a>
            </Link>
          </li>
          <li>
            <hr className='bg-black'></hr>
          </li>
          <li>
            <Link href='/contact'>
              <a className={`block text-sm px-2 py-4  `}>EN</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
