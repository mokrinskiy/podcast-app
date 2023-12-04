import { useEffect, useState } from "react";
import axios from "axios";

export function useData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(
                `${import.meta.env.VITE_REACT_URL}${url}`
            );
            setData(response.data);
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading };
}
