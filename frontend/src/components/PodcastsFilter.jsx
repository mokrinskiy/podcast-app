import React from "react";
import { useData } from "../hooks/useData";
import PodcastFilterSkeleton from "./Skeletons/PodcastFilterSkeleton";
import { motion } from "framer-motion";

const PodcastsFilter = ({ currentCat, setCat }) => {
    const { data, loading } = useData("categories/");

    return (
        <div className="flex flex-wrap p-4 w-full rounded-box">
            {loading ? (
                <PodcastFilterSkeleton />
            ) : (
                <>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.3 }}
                        onClick={() => setCat("")}
                        className={`btn carousel-item max-md:btn-sm mr-4 mt-2 ${
                            currentCat == "" ? "btn-active" : "btn-outline"
                        }`}
                    >
                        Recent
                    </motion.button>
                    {data.map((cat) => (
                        <motion.button
                            key={cat.id}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.3 }}
                            value={cat.id}
                            onClick={(e) => setCat(e.target.value)}
                            disabled={cat.id == currentCat}
                            className={`btn carousel-item max-md:btn-sm mr-4 mt-2 ${
                                cat.id == currentCat
                                    ? "btn-active"
                                    : "btn-outline"
                            }`}
                        >
                            {cat.name}
                        </motion.button>
                    ))}
                </>
            )}
        </div>
    );
};

export default PodcastsFilter;
