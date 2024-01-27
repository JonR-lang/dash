import { useEffect, useState } from "react";
import StoreList from "../components/StoreList";
import mySales from "../data/sales";

const TopPlatform = () => {
  const [stores, setStores] = useState([]);

  const getStores = () => {
    try {
      setStores(mySales.stores);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      setError(error.message);
    }
  };

  useEffect(() => {
    getStores();
  }, []);

  return (
    <div className='bg-white custom-shadow dark:custom-shadow-dark dark:bg-black/70 dark:custom-backdrop shadow-lg p-3 rounded-lg relative '>
      <div className='flex justify-between items-center '>
        <h2 className='text-customDarkSlate font-semibold dark:font-bold dark:text-white/80'>
          Top Platform
        </h2>
        <button className='text-customTurquoise font-semibold text-base hover:scale-90 transition ease-in duration-200'>
          See all
        </button>
      </div>
      <div className='mt-3 flex flex-col gap-3'>
        {stores &&
          stores.length > 0 &&
          stores.map((item, index) => <StoreList data={item} key={index} />)}
      </div>
    </div>
  );
};

export default TopPlatform;
