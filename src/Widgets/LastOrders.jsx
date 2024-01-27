import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import TableData from "../components/TableData";
import DataList from "../components/DataList";

const LastOrders = () => {
  const [dataTable, setDataTable] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getDataTable = async () => {
    try {
      const response = await fetch("sales.json");

      const data = await response.json();

      setDataTable(data.invoices);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataTable();
  }, []);

  return (
    <div className='bg-white custom-shadow dark:custom-shadow-dark dark:bg-black/70 dark:custom-backdrop shadow-lg p-3 rounded-lg relative '>
      <div className='hidden lg:block'>
        <div className='flex justify-between items-center '>
          <h2 className='text-customDarkSlate font-semibold dark:text-white/80'>
            Last Orders
          </h2>
          <button className='text-customTurquoise font-semibold text-base hover:scale-90 transition ease-in duration-200'>
            See all
          </button>
        </div>
        {isLoading && <Loader />}
        {dataTable && dataTable.length > 0 && (
          <table className='w-full table-auto'>
            <thead className='text-left'>
              <tr className='border-b text-customLightGray '>
                <th className='py-3 font-[500]'>Name</th>
                <th className='py-3 font-[500]'>Date</th>
                <th className='py-3 font-[500]'>Amount</th>
                <th className='py-3 font-[500]'>Status</th>
                <th className='py-3 font-[500]'>Invoice</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              {dataTable.map((item, index) => (
                <TableData key={index} data={item} />
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className='py-3 lg:hidden'>
        <div className='flex justify-between items-center'>
          <h2 className='py-3 text-customDarkSlate font-semibold dark:text-white/80'>
            Last Orders
          </h2>
          <div className='flex gap-2 dark:text-white/80'>
            <div className='flex gap-1 items-center '>
              <p className='text-sm'>Paid</p>
              <div className='size-2 rounded-full bg-customTurquoise'></div>
            </div>
            <div className='flex gap-1 items-center'>
              <p className='text-sm'>Refund</p>
              <div className='size-2 rounded-full bg-customRed'></div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          {dataTable &&
            dataTable.length > 0 &&
            dataTable.map((item, index) => (
              <DataList key={index} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LastOrders;
