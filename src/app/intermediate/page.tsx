import { BsThreeDotsVertical, BsEye } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";

export default function Home() {
    return (
        <div className="flex flex-col justify-between pt-8 pl-8   h-screen w-full">
            <div className="w-fit p-5 gap-6 h-2/3 mb-3  flex">
                <div className="w-96   mb-3  border-1 border border-[#313131] rounded-md bg-[#1C1C1C]">
                    <div className="flex justify-between p-5">
                        <h1 className="text-xl">Robosoccer</h1>
                        <BsThreeDotsVertical size={20} className="text-gray-400" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <AiOutlineCalendar className="text-green-600" />
                        <span>04/03/2022</span>
                        <BsEye className="text-green-600" />
                        <span>400</span>
                        <GoShareAndroid className="text-green-600" />
                        <span>50</span>
                    </div>
                </div>
                <div className="w-96   mb-3  border-1 border border-[#313131] rounded-md bg-[#1C1C1C]"></div>
            </div>
            <div className="flex gap-10">
                <div className="w-2/5 mb-10 rounded-md  h-64  border-1 border border-[#313131] bg-[#1C1C1C]"></div>
                <div className="w-44  h-28  border-dashed border-2 border-cyan-300"></div>
            </div>
        </div>
    );
}
