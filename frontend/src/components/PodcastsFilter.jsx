import React from "react";
import { useData } from "../hooks/useData";

const PodcastsFilter = ({ currentCat, setCat }) => {
    const categories = useData("categories/");

    return (
        <div className="carousel carousel-center p-4 space-x-4 w-full rounded-box">

            <button
                onClick={() => setCat("")}
                className={`btn carousel-item max-md:btn-sm ${
                    currentCat == "" ? "btn-active" : "btn-outline"
                }`}
            >
                Recent
            </button>
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    value={cat.id}
                    onClick={(e) => setCat(e.target.value)}
                    disabled={cat.id == currentCat}
                    className={`btn carousel-item max-md:btn-sm ${
                        cat.id == currentCat ? "btn-active" : "btn-outline"
                    }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );
};

export default PodcastsFilter;
