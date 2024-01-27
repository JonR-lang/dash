import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const MobileHeader = () => {
  const [isSearchShown, setIsSearchShown] = useState(false);
  return (
    <div className='p-3 mt-2 -mb-2 dark:bg-black/90 flex justify-between items-center sm:hidden mx-3 rounded-md'>
      <h1 className='text-xl text-customDarkGray dark:text-white/80'>
        Dashboard
      </h1>
      <button
        onClick={() => {
          setIsSearchShown(true);
        }}
        className='dark:text-white/80 text-customDarkGray'>
        <FiSearch fontSize={24} />
      </button>
      <div
        className={` w-full pb-[0.5px] bg-white dark:bg-black/50 dark:custom-backdrop fixed ${
          isSearchShown ? "top-0" : "top-[-100%]"
        } left-0 h-[20vh] px-3 z-30 shadow-lg transition-[top] duration-200 ease-in`}>
        <input
          className='mt-5 p-2 pl-3 focus:outline-0 font-sans dark:bg-transparent rounded-full border w-full shadow-md focus:border-customTurquoise dark:text-white/80'
          type='text'
          id='search'
          placeholder='Search...'
        />
        <button
          onClick={() => {
            setIsSearchShown(false);
          }}
          className='absolute bottom-3 right-5 dark:text-white/80'>
          <IoMdClose fontSize={30} />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
