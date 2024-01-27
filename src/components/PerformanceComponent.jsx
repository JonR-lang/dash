import {
  BoxTick,
  ThreeDRotate,
  Coin,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
} from "../utils/iconImports";
import LineChart from "./LineChart";
import { motion } from "framer-motion";

const PerformanceComponent = ({ data, setSelectedId, setDisplay }) => {
  const performanceIcon = () => {
    if (data.title === "Total Order") return BoxTick;
    if (data.title === "Total Refund") return ThreeDRotate;
    if (data.title === "Average Sales") return ShoppingCart;
    if (data.title === "Total Income") return Coin;
  };

  const trendingIcon = () => {
    return data.status === "Good" ? TrendingUp : TrendingDown;
  };

  return (
    <motion.div
      layoutId={data.id}
      onClick={() => {
        setSelectedId(data.id);
        setDisplay(data);
      }}
      className='bg-white dark:bg-black/70 custom-shadow dark:custom-shadow-dark  dark:custom-backdrop p-3 cursor-pointer rounded-xl flex flex-col justify-between gap-2 hover:scale-[1.03] transition duration-500 min-w-[300px] lg:min-w-[auto] snap-start'>
      <div className='flex justify-between items-center'>
        <figure className='p-2 border dark:border-white/20 rounded-full '>
          <img className='size-8' src={performanceIcon()} alt='icon' />
        </figure>
        <div className='flex-1 max-w-24 -mt-1'>
          <LineChart status={data.status} />
        </div>
      </div>
      <h3 className='text-customGrayText font-[500] dark:text-white/80'>
        {data.title}
      </h3>
      <p className='font-bold text-lg text-customDarkSlate dark:text-white'>
        {data.amount}
      </p>
      <small className='text-xs flex items-center gap-1 font-[500] text-customGrayText/90 dark:text-white/80'>
        <span
          className={`${
            data.status === "Good"
              ? " bg-customTurquoise/10"
              : "bg-customRed/20"
          } px-2 py-1 rounded-xl flex items-center w-fit gap-[2px]`}>
          <img className='size-3' src={trendingIcon()} alt='icon' />
          <span
            className={`${
              data.status === "Good" ? "text-customTurquoise" : "text-customRed"
            } text-[10px] `}>{`${data.percent}%`}</span>
        </span>
        vs previous month
      </small>
    </motion.div>
  );
};

export default PerformanceComponent;
