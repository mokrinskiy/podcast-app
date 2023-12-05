import React from "react";
import ItemCol from "../components/ItemCol";
import { useData } from "../hooks/useData";
import { Link } from "react-router-dom";
import ItemColSkeleton from "../components/Skeletons/ItemColSkeleton";
import Marquee from "../components/Marquee";

const Home = () => {
    const { data, loading } = useData("random_podcasts/");

    return (
        <div className="px-4 m-auto max-w-[1600px] max-sm:mt-[80px]">
            <div>
                <div className="my-[100px] mb-[150px] flex justify-center items-center w-full h-[500px] max-md:h-[300px] flex-col">
                    <h1 className="text-center uppercase font-bold text-[160px] max-lg:text-[100px] max-md:text-[40px]">
                        Your daily
                    </h1>
                    <h1>
                        <img src="https://assets-global.website-files.com/6240546a639324621fd71bf2/6240c6a2823e4bb5cc0213ce_headinline-podcast.svg" />
                    </h1>
                    <div className="flex mt-[70px] flex-col w-[300px] justify-center items-center">
                        <p className="font-light text-center">
                            We cover all kinds of categories and a weekly
                            special guest.
                        </p>
                        <Link
                            to={"/podcasts"}
                            className="btn btn-neutral btn-sm w-[100px] my-4"
                        >
                            Catalog...
                        </Link>
                    </div>
                </div>
                <Marquee>
                    <span className="mx-4 text-xl text-base-100">
                        Explore intriguing podcasts on EchoEnclave. Dive into
                        diverse topics for quick, enjoyable listens
                    </span>
                </Marquee>
                <div className="my-2 flex justify-between items-center mt-[50px]">
                    <h1 className=" text-[25px]">Let's listen</h1>
                    <Link to={"/podcasts"} className="btn">
                        More...
                    </Link>
                </div>
                {loading ? (
                    <ItemColSkeleton />
                ) : (
                    <div className="flex justify-center max-lg:flex-wrap items-stretch max-lg:space-y-4">
                        {data.map((item) => (
                            <ItemCol
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                category={item.category}
                                release_date={item.release_date}
                                duration={item.duration}
                                image={item.image}
                                description={item.description}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
