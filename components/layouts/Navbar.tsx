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
    <nav className='bg-white'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='relative h-24 w-40 cursor-pointer'>
            <Image
              src='/industrial_engineering_logo.png'
              alt='ไออี มช'
              layout='fill'
              objectFit='contain'
            />
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
