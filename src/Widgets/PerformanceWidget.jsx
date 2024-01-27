import PerformanceComponent from "../components/PerformanceComponent";
import { AnimatePresence, motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "../utils/iconImports";
import { IoMdClose } from "react-icons/io";

import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import total from "../data/totals";

const PerformanceWidget = () => {
  const [statistics, setStatistics] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");
  const [display, setDisplay] = useState(null);

  const getStatistics = () => {
    try {
      setStatistics(total);
    } catch (err) {
      setError("An error occured!");
      console.log(err.message);
    }
  };

  useEffect(() => {
    getStatistics();
  }, []);

  const trendingIcon = () => {
    return display.status === "Good" ? TrendingUp : TrendingDown;
  };

  return (
    <div className='flex-[1] col-span-full lg:col-span-1'>
      <div className='flex lg:grid lg:grid-cols-2 sm:gap-2 gap-3 overflow-x-auto lg:overflow-hidden snap-x py-2 sm:py-0 scrollbar-hide h-full lg:portrait:grid-cols-1'>
        {statistics &&
          statistics.length > 0 &&
          statistics.map((item, index) => (
            <PerformanceComponent
              key={index}
              data={item}
              setSelectedId={setSelectedId}
              setDisplay={setDisplay}
            />
          ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            key={selectedId}
            layoutId={selectedId}
            className='fixed inset-0 flex justify-center items-center bg-gray-800 dark:bg-black/50 bg-opacity-75 px-3 z-20 dark:custom-backdrop'>
            <motion.div className='bg-white dark:bg-black/80 dark:custom-backdrop relative p-6 flex flex-col items-center rounded-lg w-full max-w-sm dark:border dark:border-gray-200/20'>
              <motion.h5 className='text-customGrayText font-bold text-xl'>
                {display.title}
              </motion.h5>
              <motion.div className='w-full max-w-md p-4'>
                <LineChart status={display.status} />
              </motion.div>
              <p className='-translate-y-8 font-bold text-3xl text-customDarkSlate dark:text-white'>
                {display.amount}
              </p>
              <small className='text-xs flex items-center gap-1 font-[500] text-customGrayText/90'>
                <span
                  className={`${
                    display.status === "Good"
                      ? " bg-customTurquoise/10"
                      : "bg-customRed/20"
                  } px-2 py-1 rounded-xl flex items-center w-fit gap-[2px]`}>
                  <img className='size-3' src={trendingIcon()} alt='icon' />
                  <span
                    className={`${
                      display.status === "Good"
                        ? "text-customTurquoise"
                        : "text-customRed"
                    } text-[10px] `}>{`${display.percent}%`}</span>
                </span>
                vs previous month
              </small>

              <motion.button
                className='absolute top-2 right-2 dark:text-white/80'
                onClick={() => {
                  setSelectedId(null);
                  setDisplay(null);
                }}>
                <IoMdClose fontSize={26} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PerformanceWidget;
