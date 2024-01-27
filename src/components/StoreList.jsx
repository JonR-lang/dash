import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const StoreList = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const amount = ref.current;
      const controls = animate(0, data.amount, {
        duration: 2,
        onUpdate: (value) => {
          const roundedValue = Math.round(value);
          amount.textContent = `$${roundedValue.toLocaleString()}`;
        },
      });
      return () => [controls.stop()];
    }
  }, [isInView, data.amount]);

  return (
    <div className='flex flex-col gap-3'>
      <h3 className='dark:text-white/80 dark:font-semibold'>{data.name}</h3>
      <div className='h-3 w-full bg-gray-200 dark:bg-gray-200/10 rounded-2xl overflow-hidden'>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${(data.amount / data.maxValue) * 100}%`,
            transition: { duration: 4 },
          }}
          viewport={{ once: true }}
          className={`h-full ${data.name === "Book Bazaar" && "bg-[#6160DC]"} ${
            data.name === "Artisan Aisle" && "bg-[#54C5EB]"
          } ${data.name === "Toy Troop" && "bg-[#FFB74A]"} ${
            data.name === "X-store" && "bg-[#FF4A55]"
          }`}></motion.div>
      </div>
      <div className='flex justify-between items-center'>
        <motion.p ref={ref} className='text-sm dark:text-white/80'></motion.p>
        <small className='dark:text-white/80'>{data.percent}</small>
      </div>
    </div>
  );
};

export default StoreList;
