import { FC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

// import styles from "/styles/Layout.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { Button, Menu, Container, Switch } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

import { IconChevronDown, IconSchool, IconUsers } from '@tabler/icons';

const Navbar: FC = () => {
  const [value, toggle] = useToggle(['th', 'en']);

  const router = useRouter();
  const path = router.pathname;

  // Translation
  const { t, lang } = useTranslation('nav');

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
  const bg = 'bg-primary';
  const bgActive = 'bg-primary-300';
  const bgHover = 'hover:bg-primary-500';
  return (
    <nav className='bg-white'>
      <Container size='xl'>
        {/* Navbar */}
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div
            className='relative h-28 w-full cursor-pointer m-4'
            onClick={() => {
              router.push('/');
            }}
          >
            <Image
              src='/industrial_engineering_logo.png'
              alt='Industrial Engineering, CMU'
              layout='fill'
              objectFit='contain'
              objectPosition='left'
            />
          </div>

          {/* Desktop Navbar */}
          <div className='flex gap-3 items-center'>
            {/* Buttons */}
            <div>
              {/* Home */}
              <Button.Group>
                <Button
                  className={`${path === '/' ? bgActive : bg} ${bgHover}`}
                  onClick={() => {
                    router.push('/');
                  }}
                >
                  {t('home')}
                </Button>
                {/* About */}
                <Menu shadow='md' width={200} trigger='hover'>
                  <Menu.Target>
                    <Button
                      className={`${
                        path === '/about' ? bgActive : bg
                      } ${bgHover}`}
                    >
                      {t('about')}
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>{t('about')}</Menu.Label>
                    <Menu.Item
                      icon={<IconSchool size={14} />}
                      onClick={() => {
                        router.push('/about');
                      }}
                    >
                      {t('about-department')}
                    </Menu.Item>
                    <Menu.Item
                      icon={<IconUsers size={14} />}
                      onClick={() => {
                        router.push('/people/faculty');
                      }}
                    >
                      {t('about-faculty')}
                    </Menu.Item>
                    <Menu.Item icon={<IconUsers size={14} />}>
                      {t('about-staff')}
                    </Menu.Item>
                    <Menu.Item icon={<IconUsers size={14} />}>
                      {t('about-admin')}
                    </Menu.Item>
                    <Menu.Item icon={<IconUsers size={14} />}>
                      {t('about-retired')}
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                {/* Curriculum */}
                <Menu shadow='md' width={200} trigger='hover'>
                  <Menu.Target>
                    <Button
                      className={`${
                        path === '/curriculum' ? bgActive : bg
                      } ${bgHover}`}
                    >
                      <div className='flex items-center gap-1'>
                        <div>{t('curriculum')}</div>
                        <IconChevronDown size={20} />
                      </div>
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item>Settings</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Button.Group>
            </div>

            {/* Language Switch */}
            <Switch
              onLabel={<div>TH</div>}
              offLabel={<div>EN</div>}
              color={'cmu.8'}
              size={'lg'}
              checked={router.locale === 'th' ? true : false}
              onChange={(event) => {
                router.push(router.pathname, router.pathname, {
                  locale: event.currentTarget.checked ? 'th' : 'en',
                });
              }}
            />
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
};

export default Navbar;
