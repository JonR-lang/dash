import { DocumentDownload } from "../utils/iconImports";
import {
  Marcus,
  Jayden,
  Justin,
  Philip,
  Cooper,
  Corey,
} from "../utils/imageImports";
import { format } from "date-fns";

const DataList = ({ data }) => {
  const getProfileImage = (name) => {
    if (name.includes("Marcus")) return Marcus;
    if (name.includes("Jaydon")) return Jayden;
    if (name.includes("Justin")) return Justin;
    if (name.includes("Philip")) return Philip;
    if (name.includes("Cooper")) return Cooper;
    if (name.includes("Corey")) return Corey;
  };
  return (
    <div className='flex w-full border-b-[0.5px] gap-2 py-2 items-center relative'>
      <div className='flex items-center gap-2'>
        <img
          src={getProfileImage(data.name)}
          className='size-12 shrink-0'
          alt='profile-image'
        />
        <p className='text-customDarkSlate dark:text-white/80'>{data.name}</p>
      </div>
      <div className='flex items-center gap-3 ml-auto text-xs'>
        <p className='text-[rgb(115,115,115)]'>
          {" "}
          {format(new Date(data.date), "PP")}
        </p>
        <p className='text-customDarkPurple dark:text-white/80'>
          ${data.amount.toLocaleString()}
        </p>
        <div
          className={`${
            data.status === "Paid" ? "bg-customTurquoise" : "bg-customRed"
          } absolute top-2 right-1 size-2 rounded-full`}></div>
        <img
          src={DocumentDownload}
          alt='download-invoice'
          className='cursor-pointer'
        />
      </div>
    </div>
  );
};

export default DataList;
