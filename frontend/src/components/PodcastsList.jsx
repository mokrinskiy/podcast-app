import React from "react";
import { useData } from "../hooks/useData";
import ItemRow from "./ItemRow";
import ItemRowSkeleton from "./Skeletons/ItemRowSkeleton";

const PodcastsList = ({ cat }) => {
    const { data, loading } = cat
        ? useData(`podcasts/?category=${cat}`)
        : useData(`podcasts/`);

    return (
        <>
            {loading ? (
                <ItemRowSkeleton />
            ) : (
                data.map((item, index) => (
                    <ItemRow
                        key={item.id}
                        loading={loading}
                        id={item.id}
                        index={index + 1}
                        title={item.title}
                        release_date={item.release_date}
                        duration={item.duration}
                        image={item.image}
                    />
                ))
            )}
        </>
    );
};

export default PodcastsList;
