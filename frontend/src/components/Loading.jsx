import React from "react";

const Loading = (props) => {
    const data = Array.from(Array(props.count).keys());

    return data.map((item, index) => <div key={index}>{props.children}</div>);
};

export default Loading;
