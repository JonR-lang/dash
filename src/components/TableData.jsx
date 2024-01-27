import { format } from "date-fns";
import { DocumentDownload } from "../utils/iconImports";
import {
  Marcus,
  Jayden,
  Justin,
  Philip,
  Cooper,
  Corey,
} from "../utils/imageImports";

const TableData = ({ data }) => {
  const getProfileImage = (name) => {
    if (name.includes("Marcus")) return Marcus;
    if (name.includes("Jaydon")) return Jayden;
    if (name.includes("Justin")) return Justin;
    if (name.includes("Philip")) return Philip;
    if (name.includes("Cooper")) return Cooper;
    if (name.includes("Corey")) return Corey;
  };
  return (
    <tr className='border-b '>
      <td>
        <div className='flex items-center gap-2'>
          <img
            src={getProfileImage(data.name)}
            className='size-10'
            alt='profile-image'
          />
          <p className='py-5 text-customDarkSlate dark:text-white/80 text-sm'>
            {data.name}
          </p>
        </div>
      </td>
      <td className='py-5 text-[rgb(115,115,115)] text-sm dark:text-white/80'>
        {format(new Date(data.date), "PP")}
      </td>
      <td className='py-5 text-customDarkPurple dark:text-white/80 text-sm'>
        ${data.amount.toLocaleString()}
      </td>
      <td
        className={`py-5 text-sm ${
          data.status === "Paid" ? "text-customTurquoise" : "text-customRed"
        }`}>
        {data.status}
      </td>
      <td className='py-5 '>
        <button className='text-customDarkPurple dark:text-white/80 text-sm flex gap-1 items-center hover:font-semibold'>
          <img
            src={DocumentDownload}
            alt='download-invoice'
            className='cursor-pointer'
          />
          View
        </button>
      </td>
    </tr>
  );
};

export default TableData;
