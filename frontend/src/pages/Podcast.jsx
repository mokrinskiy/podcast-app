import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useData } from "../hooks/useData";
import { useNavigate, useParams } from "react-router";
import { Divider } from "@mui/material";
import PodcastPlayer from "../components/PodcastPlayer.jsx";
import PodcastSkeleton from "../components/Skeletons/PodcastSkeleton.jsx";

const Podcast = () => {
    const { id } = useParams();
    const { data, loading } = useData(`podcasts/${id}/`);
    const navigate = useNavigate();

    return (
        <>
            {loading ? (
                <PodcastSkeleton />
            ) : (
                <div className="px-4 min-h-screen max-sm:mt-[80px]">
                    <div className="m-auto max-w-[1600px] mt-8 flex justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-sm"
                        >
                            <ArrowBackIcon />
                            Back
                        </button>
                        <p className="uppercase bold text-[25px]">Podcast</p>
                    </div>
                    <div className="m-auto max-w-[1400px] flex justify-between pt-4 max-xl:flex-col max-xl:items-center xl:space-x-5">
                        <div className="flex flex-col">
                            <img
                                className="w-[600px] h-[600px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[350px] max-sm:h-[350px]"
                                src={data.image}
                            />
                            <div className="flex justify-between flex-col mt-4 mb-8">
                                <div className="flex justify-between items-center">
                                    <p className="text-[20px]">
                                        Date: {data.release_date}
                                    </p>
                                    <div className="text-[20px] font-bold">
                                        {data?.category?.map((cat) => (
                                            <p key={cat.id}>{cat.name}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="my-2">
                                    <Divider className="bg-black" />
                                </div>
                                <p className="text-[20px]">
                                    Duration: {data.duration} min
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="uppercase text-[80px] font-bold w-[750px] max-lg:text-[60px] max-lg:w-[600px] max-md:w-[400px] max-md:text-[40px] max-sm:w-[350px] max-sm:text-[35px]">
                                {data.title}
                            </h1>
                            <div className="w-full h-[300px] flex justify-center items-center max-lg:w-[600px] max-md:w-[400px] max-sm:w-[350px]">
                                <PodcastPlayer audio={data.url} />
                            </div>
                            <div>
                                <p className="flex max-lg:w-[600px] max-w-[750px] max-md:w-[400px] max-sm:w-[350px]">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Podcast;
