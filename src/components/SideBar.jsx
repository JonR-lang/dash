import {
  Vector,
  Category,
  Trending,
  Profile,
  Box,
  Discount,
  Info,
  LightMode,
  DarkMode,
  ArrowRight,
  Settings,
  LogOut,
} from "../utils/iconImports";
import { NavLink } from "react-router-dom";
import useDarkMode from "../utils/theme";
import { Justin } from "../utils/imageImports";

const isActiveStyle =
  "border-r-[3px] border-r-black dark:border-r-white/80 flex w-full sm:justify-center items-center gap-2";
const isNotActiveStyle = "flex w-full sm:justify-center items-center gap-2";

const SideBar = ({ setShowSideBar }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className=' flex flex-col sm:min-w-20 bg-white dark:bg-transparent dark:custom-backdrop h-full relative'>
      <div className='flex flex-col bg-customSideBar dark:bg-black/40 dark:custom-backdrop sm:h-[95%] h-full py-5 sm:items-center border-r-2 border-r-customLightGray/15 pl-4 sm:pl-0'>
        <figure className='-ml-2 sm:-ml-0 sm:block flex justify-between items-center pr-2'>
          <img className='size-14 sm:size-10' src={Vector} alt='logo' />
          <img className='size-12 object-cover sm:hidden' src={Justin} />
        </figure>
        <div className='flex flex-col sm:items-center gap-4 mt-5 w-full  sm:pl'>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              setShowSideBar(false);
            }}
            to='/'
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <img
              className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300'
              src={Category}
              alt='category'
            />
            <p className='text-gray-500 sm:hidden'>Dashboard</p>
          </NavLink>

          <NavLink
            className={isNotActiveStyle}
            onClick={(e) => {
              e.preventDefault();
              setShowSideBar(false);
            }}>
            <img
              className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300'
              src={Trending}
              alt='trending'
            />
            <p className='text-gray-500 sm:hidden'>Trending</p>
          </NavLink>

          <NavLink
            className={isNotActiveStyle}
            onClick={(e) => {
              e.preventDefault();
              setShowSideBar(false);
            }}>
            <img
              className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300'
              src={Profile}
              alt='profile'
            />
            <p className='text-gray-500 sm:hidden'>Profile</p>
          </NavLink>

          <NavLink
            className={isNotActiveStyle}
            onClick={(e) => {
              e.preventDefault();
              setShowSideBar(false);
            }}>
            <img
              className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300'
              src={Box}
              alt='box'
            />
            <p className='text-gray-500 sm:hidden'>The Box</p>
          </NavLink>

          <NavLink
            className={isNotActiveStyle}
            onClick={(e) => {
              e.preventDefault();
              setShowSideBar(false);
            }}>
            <img
              className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300'
              src={Discount}
              alt='discount'
            />
            <p className='text-gray-500 sm:hidden'>Discounts</p>
          </NavLink>

          <NavLink
            className={isNotActiveStyle}
            onClick={(e) => {
              e.preventDefault();
              setShowSideBar(false);
            }}>
            <img
              className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300'
              src={Info}
              alt='info'
            />
            <p className='text-gray-500 sm:hidden'>Info</p>
          </NavLink>

          <div className='hidden sm:flex flex-col gap-4 bg-white rounded-[100px] p-2 w-fit dark:bg-transparent mb-5'>
            <button onClick={() => toggleDarkMode(false)}>
              <img
                className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300 bg-customTurquoise rounded-full dark:bg-transparent dark:border'
                src={LightMode}
                alt='lightmode'
              />
            </button>
            <button onClick={() => toggleDarkMode(true)}>
              <img
                className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300 rounded-full dark:bg-customTurquoise'
                src={DarkMode}
                alt='darkmode'
              />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-auto'>
          <div
            className='flex gap-2 items-center'
            onClick={() => {
              setShowSideBar(false);
            }}>
            <img
              className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300'
              src={ArrowRight}
              alt='arrow-right'
            />
            <p className='text-gray-500 sm:hidden'>Change</p>
          </div>
          <div
            className='flex gap-2 items-center'
            onClick={() => {
              setShowSideBar(false);
            }}>
            <img
              className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300'
              src={Settings}
              alt='settings'
            />
            <p className='text-gray-500 sm:hidden'>Settings</p>
          </div>

          <div
            className='flex gap-2 items-center'
            onClick={() => {
              setShowSideBar(false);
            }}>
            <img
              className='sm:size-6 size-8 hover:scale-[1.2] transition duration-300'
              src={LogOut}
              alt='logout'
            />
            <p className='text-gray-500 sm:hidden'>Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
