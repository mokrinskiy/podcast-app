import React from "react";
import Loading from "../Loading";

const PodcastFilterSkeleton = () => {
    return (
        <div className="carousel carousel-center space-x-4 w-full rounded-box flex justify-start">
            <Loading count={5}>
                <button className="btn carousel-item max-md:btn-sm skeleton max-md:w-[60px] w-[80px]"></button>
            </Loading>
        </div>
    );
};

export default PodcastFilterSkeleton;
