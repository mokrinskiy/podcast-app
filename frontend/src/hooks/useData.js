import { useEffect, useState } from "react";
import axios from "axios";

export function useData(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/${url}`
            );
            setData(response.data);
        };
        fetchData();
    }, [url]);

    return data;
}
