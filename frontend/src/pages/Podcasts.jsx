import React, { useState } from "react";
import PodcastsFilter from "../components/PodcastsFilter";
import PodcastsList from "../components/PodcastsList";

const Podcasts = () => {
    const [cat, setCat] = useState("");

    return (
        <div className="min-h-screen px-4 m-auto max-w-[1600px] max-sm:mt-[80px]">
            <div className="flex justify-center my-6">
                <img src="https://assets-global.website-files.com/6240546a639324621fd71bf2/6240c6a2823e4bb5cc0213ce_headinline-podcast.svg" />
            </div>
            <div className="space-x-5 max-md:space-y-2 mt-20 max-md:flex-wrap">
                <PodcastsFilter currentCat={cat} setCat={setCat} />
            </div>
            <div className="flex flex-col divide-y-[1px] divide-black">
                <PodcastsList cat={cat} />
            </div>
        </div>
    );
};

export default Podcasts;
