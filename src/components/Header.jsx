import { useState } from "react";
import { Vector } from "../utils/iconImports";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { LightMode, DarkMode } from "../utils/iconImports";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import useDarkMode from "../utils/theme";

import Justin from "../assets/images/Justin.png";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Header = ({ setShowSideBar, showSideBar }) => {
  const [selected, setSelected] = useState(new Date("2023-11-11"));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  return (
    <div className='flex sm:gap-4 gap-2 justify-end items-center h-[70px] border-b border-b-customGray/15  dark:border-b-white/40 px-4 text-customDarkGray custom-shadow dark:custom-shadow-dark  dark:bg-black/40 bg-white dark:custom-backdrop sticky top-0 left-0 w-full z-10'>
      <h1 className='mr-auto font-semibold text-lg hidden sm:block dark:text-white/80'>
        Dashboard
      </h1>
      <figure className='sm:hidden block mr-auto'>
        <img className='size-10' src={Vector} alt='logo' />
      </figure>
      <div className='hidden lg:block border overflow-hidden rounded-full h-8 w-full max-w-xs focus-within:border focus-within:border-customTurquoise pb-[0.5px] bg-white dark:bg-white/10 relative '>
        <input
          className='size-full p-2 pl-3 focus:outline-0 font-sans dark:bg-transparent'
          type='text'
          id='search'
          placeholder='Search...'
        />
      </div>
      <button className='-mr-3 dark:text-white/80 text-customDarkGray hidden md:block lg:hidden'>
        <FiSearch fontSize={22} />
      </button>
      <button onClick={() => toggleDarkMode()} className='sm:hidden'>
        <img
          className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300 bg-customTurquoise rounded-full block dark:hidden sm:dark:border '
          src={LightMode}
          alt='lightmode'
        />
        <img
          className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300 rounded-full hidden dark:block'
          src={DarkMode}
          alt='darkmode'
        />
      </button>
      <div className='flex items-center gap-2 relative'>
        <button
          className='dark:text-white/60 p-2 rounded-full'
          type='button'
          onClick={() => setShowDatePicker(!showDatePicker)}>
          <MdOutlineCalendarMonth fontSize={22} />
        </button>
        <p className='text-sm font-[500] dark:text-white/80 hidden sm:block'>
          {format(selected, "PPP")}
        </p>
        {showDatePicker && (
          <div className='absolute z-20 right-[-290%] sm:right-auto top-0  translate-y-10 bg-white dark:bg-black/80 dark:custom-backdrop rounded-lg shadow-xl transition duration-200 ease-linear dark:text-white/80'>
            <DayPicker
              mode='single'
              selected={selected}
              onSelect={setSelected}
              modifiersClassNames={{
                selected: "bg-customTurquoise",
              }}
              footer={footer}
            />
          </div>
        )}
      </div>

      <div className='border dark:text-white/80 p-2 rounded-full dark:border-none'>
        <IoMdNotificationsOutline fontSize={25} />
      </div>

      <div className='hidden sm:flex gap-2 p-1 border rounded-3xl items-center dark:bg-transparent dark:text-white/80 dark:border-gray-100/30'>
        <img className='size-8 object-cover' src={Justin} alt='user-pfp' />
        <div className='flex flex-col'>
          <p className='text-sm'>Justin Bergson</p>
          <small className='text-xs'>Justin@gmail.com</small>
        </div>
        <IoIosArrowDown fontSize={24} />
      </div>

      <button
        onClick={() => setShowSideBar(!showSideBar)}
        className='sm:hidden dark:text-white/80'>
        {showSideBar ? (
          <IoMdClose fontSize={27} />
        ) : (
          <HiOutlineMenuAlt3 fontSize={27} />
        )}
      </button>
    </div>
  );
};

export default Header;
