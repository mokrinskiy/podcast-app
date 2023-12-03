import React from "react";
import { useData } from "../hooks/useData";
import ItemRow from "./ItemRow";

const PodcastsList = ({ cat }) => {
    const data = cat
        ? useData(`podcasts/?category=${cat}`)
        : useData(`podcasts/`);

    return (
        <>
            {data.map((item, index) => (
                <ItemRow
                    key={item.id}
                    id={item.id}
                    index={index + 1}
                    title={item.title}
                    release_date={item.release_date}
                    duration={item.duration}
                    image={item.image}
                />
            ))}
        </>
    );
};

export default PodcastsList;
