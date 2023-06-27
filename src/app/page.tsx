import { VscAdd } from "react-icons/vsc";
import { PiBellThin } from "react-icons/pi";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import Reactangle from "../assets/Rectangle1.png";

export default function Home() {
    return (
        <div className="flex flex-col justify-between p-16  h-screen w-full">
            <div className="flex justify-between w-96 h-52   border-2 border-dashed  border-black">
                <div className=" w-40 h-52 border-2 border-dashed  border-black flex flex-col justify-evenly items-center">
                    <button className="bg-green-600 rounded-lg w-32 h-12 btn-primary flex items-center justify-center ">
                        <VscAdd size={25} className="text-black font-light " />
                        <span className="text-md text-black font-bold mx-2">POST</span>
                    </button>
                    <button className=" rounded-lg w-32 h-12 btn-primary flex items-center justify-center ">
                        <VscAdd size={25} className="text-green-600  " />
                        <span className="text-md text-green-600 font-bold mx-2">POST</span>
                    </button>
                    <button className=" rounded-lg w-32 h-12 btn-primary flex items-center justify-center  border-green-600 border-2">
                        <VscAdd size={25} className="text-green-600" />
                        <span className="text-md text-green-600 font-bold mx-2">POST</span>
                    </button>
                </div>
                <div className="w-44 h-32 border-2 border-dashed  border-black flex flex-col items-center justify-evenly">
                    <button className=" rounded-full w-36 h-10  btn-primary flex items-center justify-center  bg-gray-900/50 border border-gray-700">
                        <span className="text-sm  font-light mx-2">Yesterday</span>
                    </button>
                    <button className=" rounded-full w-36 h-10 btn-primary flex items-center justify-center  bg-green-900/25 border border-green-600">
                        <span className="text-sm  font-light mx-2">Yesterday</span>
                    </button>
                </div>
            </div>
            <div className=" w-full h-3/4 mt-16 flex flex-col justify-start    border-2 border-dashed  border-black">
                <div className="w-full h-32 mt-5 bg-gray-900/50 border border-gray-700 rounded-md flex items-center justify-between px-7">
                    <div className="flex">
                        <Image src={Reactangle} alt="Picture" />
                        <div className="flex flex-col pl-2">
                            <p className="text-xl  font-extralight mb-1">
                Lorem, ipsum dolor
                            </p>
                            <p className="text-sm  font-thin mb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
                            </p>
                            <div className="flex">
                                <AiOutlineCalendar size={20} className="text-gray-600 " />
                                <span className="font-thin text-gray-500 text-sm mx-1">
                  Date
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <PiBellThin size={30} className="text-gray-600" />
                    </div>
                </div>
                <div className="w-full h-28 mt-5 bg-gray-900/50 border border-gray-700 rounded-md flex items-center justify-between px-7">
                    <div className="flex">
                        <Image src={Reactangle} alt="Picture" className="h-20 w-20" />
                        <div className="flex flex-col pl-4">
                            <p className="text-xl  font-extralight mb-1">
                Lorem, ipsum dolor
                            </p>
                            <p className="text-sm  font-thin mb-1">
                Lorem ipsum dolor sit amet consectetur
                            </p>
                            <div className="flex">
                                <AiOutlineCalendar size={20} className="text-gray-600 " />
                                <span className="font-thin text-gray-500 text-sm mx-1">
                  Date
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <PiBellThin size={30} className="text-green-600" />
                    </div>
                </div>
                <div className="w-full h-24 mt-5 bg-gray-900/50 border border-gray-700 rounded-md flex items-center justify-between px-7">
                    <div className="flex">
                        <Image src={Reactangle} alt="Picture" className="h-16 w-16" />
                        <div className="flex flex-col pl-6">
                            <p className="text-xl  font-extralight mb-1">
                Lorem, ipsum dolor
                            </p>
                            <div className="flex">
                                <AiOutlineCalendar size={20} className="text-gray-600 " />
                                <span className="font-thin text-gray-500 text-sm mx-1">
                  Date
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <PiBellThin size={30} className="text-gray-600" />
                    </div>
                </div>
            </div>
        </div>
    );
}
