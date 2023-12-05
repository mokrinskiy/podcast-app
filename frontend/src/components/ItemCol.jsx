import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ItemCol = ({
    id,
    title,
    duration,
    release_date,
    image,
    description,
    author,
}) => {
    return (
        <motion.div
            whileHover={{ opacity: 1, scale: 0.9 }}
            className="flex flex-col max-lg:w-[600px] lg:w-1/3 p-8 border-[1px] ring-black ring-offset-0 ring-1"
        >
            <Link to={`podcast/${id}`}>
                <div className="flex justify-between pb-4">
                    <p className="">{release_date}</p>
                    <div className="rounded-2xl px-4 border-[1px] border-black font-light">
                        some
                    </div>
                </div>
                <div className="w-full h-0 pb-[100%] relative">
                    <img
                        className="object-cover w-full h-full absolute inset-0"
                        src={image}
                        alt="Podcast Cover"
                    />
                </div>
                <div className="flex justify-between flex-col">
                    <div className="py-8">
                        <p className="font-bold text-[25px]">{title}</p>
                        <p className="mt-6">{description}</p>
                    </div>
                    <p className="py-4">Author 12312 Duration {duration} Min</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default ItemCol;
