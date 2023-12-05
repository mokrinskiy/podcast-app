import React from "react";

const Marquee = (props) => {
    return (
        <div className="relative flex overflow-x-hidden bg-neutral">
            <div className="py-6 animate-marquee whitespace-nowrap">
                {props.children}
                {props.children}
            </div>
            <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap">
                {props.children}
                {props.children}
            </div>
        </div>
    );
};

export default Marquee;
