import { Divider } from "@mui/material";
import React from "react";
import PodcastPlayer from "../PodcastPlayer.jsx";

const PodcastSkeleton = () => {
    return (
        <div className="px-4 min-h-screen max-sm:mt-[80px]">
            <div className="m-auto max-w-[1600px] mt-8 flex justify-between">
                <div className="skeleton w-[100px] h-[30px]"></div>
                <div className="skeleton w-[100px] h-[30px]"></div>
            </div>
            <div className="m-auto max-w-[1400px] flex justify-between pt-4 max-xl:flex-col max-xl:items-center space-x-5">
                <div className="flex flex-col">
                    <div className="skeleton w-[600px] h-[600px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[350px] max-sm:h-[350px]"></div>
                    <div className="flex justify-between flex-col mt-4 mb-8">
                        <div className="flex justify-between items-center w-full skeleton h-[40px]"></div>
                        <div className="my-2 skeleton">
                            <Divider className="skeleton" />
                        </div>
                        <div className="text-[20px] w-[250px] skeleton h-[30px]"></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="w-[750px] max-lg:w-[600px] max-md:w-[400px] max-sm:w-[350px] skeleton h-[200px]"></div>
                    <div className="w-full h-[300px] flex justify-center items-center max-lg:w-[600px] max-md:w-[400px] max-sm:w-[350px]">
                        <PodcastPlayer audio={""} />
                    </div>
                    <div>
                        <div className="flex max-lg:w-[600px] max-w-[750px] max-md:w-[400px] max-sm:w-[350px] h-[50px] skeleton"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PodcastSkeleton;
