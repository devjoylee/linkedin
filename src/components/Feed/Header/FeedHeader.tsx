import { HeaderLink } from '@components/Common';
import { SearchBar, ThemeButton } from '@components/Feed';
import { BsChatDotsFill, BsBellFill } from 'react-icons/bs';
import { MdPeopleAlt, MdOutlineApps } from 'react-icons/md';
import { IoMdBriefcase, IoMdHome } from 'react-icons/io';
import { NarrowLogo } from '@images';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const FeedHeader = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme: theme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className='sticky top-0 z-40 bg-white dark:bg-black py-2'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-around md:justify-between px-3'>
        {/* Left */}
        <div className='flex items-center space-x-2 md:w-full md:max-w-xs lg:mr-16'>
          <NarrowLogo
            className='flex-shrink-0 w-[38px] h-[38px]'
            color={mounted && theme === 'dark' ? '#eee' : '#0a66c2'}
          />
          <SearchBar />
        </div>

        {/* Right */}
        <ul className='flex items-center justify-around flex-1 sm:space-x-6 sm:mx-3 md:mx-5'>
          <HeaderLink Icon={<IoMdHome />} text='Home' active />
          <HeaderLink Icon={<MdPeopleAlt />} text='My Network' />
          <HeaderLink Icon={<IoMdBriefcase />} text='Jobs' />
          <HeaderLink Icon={<BsChatDotsFill />} text='Messaging' />
          <HeaderLink Icon={<BsBellFill />} text='Notifications' />
          <HeaderLink Icon={<IoMdBriefcase />} text='Me' />
          <HeaderLink Icon={<MdOutlineApps />} text='Work' />
        </ul>

        <ThemeButton />
      </div>
    </header>
  );
};
