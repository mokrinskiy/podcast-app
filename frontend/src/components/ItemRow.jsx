import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const ItemRow = ({ id, title, duration, release_date, image, index }) => {
    return (
        <div className="py-10 flex justify-between max-lg:flex-col">
            <div className="flex">
                <p className="items-center flex pr-16 text-[20px] font-bold max-md:pr-8 max-sm:pr-4 max-md:text-[10px]">
                    {index < 10 ? `0${index}` : index}
                </p>
                <img
                    className="w-[240px] h-[240px] max-md:w-[180px] max-md:h-[180px] max-sm:w-[130px] max-sm:h-[130px]"
                    src={image}
                />
                <h1 className="flex items-center px-10 max-md:px-5 font-bold text-[30px] w-[400px] max-md:text-[25px] max-md:w-auto max-sm:text-[15px]">
                    {title}
                </h1>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-between flex-col max-lg:mt-3 lg:items-center lg:mx-4 max-lg:pl-[87px] max-md:pl-11 max-sm:pl-7">
                    <div className="flex items-center">
                        <p className="font-bold pr-4 text-[15px] max-md:text-[12px]">
                            Date
                        </p>
                        <p className="text-[15px] max-md:text-[12px]">
                            {release_date}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <p className="font-bold pr-4 text-[15px] max-md:text-[12px]">
                            Duration
                        </p>
                        <p className="text-[15px] max-md:text-[12px]">
                            {duration} min
                        </p>
                    </div>
                </div>
                <Link
                    to={`/podcast/${id}`}
                    className="btn text-[18px] max-md:btn-sm"
                >
                    Listen <ArrowForwardIcon />
                </Link>
            </div>
        </div>
    );
};

export default ItemRow;
