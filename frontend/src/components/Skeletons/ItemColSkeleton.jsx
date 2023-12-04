import React from "react";
import Loading from "../Loading";

const ItemColSkeleton = () => {
    return (
        <div className="flex max-lg:flex-col justify-around w-full max-lg:items-center">
            <Loading count={3}><div className="w-[330px] h-[700px] skeleton mx-1"></div></Loading>
        </div>
    );
};

export default ItemColSkeleton;
