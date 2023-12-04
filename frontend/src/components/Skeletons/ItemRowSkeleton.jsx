import React from "react";
import Loading from "../Loading";

const ItemRowSkeleton = () => {
    return (
        <Loading count={3}>
            <div className="py-10 flex max-lg:flex-col justify-between lg:items-center max-lg:w-full">
                <div className="flex max-lg:skeleton max-lg:w-full max-lg:h-[300px]">
                    <div className="flex justify-center items-center mr-16 max-md:pr-8 max-sm:pr-4">
                        <div className="skeleton max-lg:hidden w-[20px] h-[20px]"></div>
                    </div>
                    <div className="skeleton max-lg:hidden w-[240px] h-[240px] max-md:w-[180px] max-md:h-[180px] max-sm:w-[130px] max-sm:h-[130px]"></div>
                    <div className="flex flex-col max-lg:hidden justify-center items-center mx-10 max-md:px-5 w-[200px] max-md:w-auto space-y-4">
                        <div className="skeleton w-[160px] h-[30px] max-lg:hidden"></div>
                        <div className="skeleton w-[200px] h-[20px] max-lg:hidden"></div>
                    </div>
                </div>
                <div className="max-lg:w-full flex max-lg:hidden justify-between max-lg:mt-5">
                    <div className="w-[200px] max-md:w-[100px] max-md:h-[30px] lg:skeleton h-[60px]"></div>
                </div>
            </div>
        </Loading>
    );
};

export default ItemRowSkeleton;
