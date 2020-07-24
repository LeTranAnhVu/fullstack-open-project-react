import {useLocation} from 'react-router-dom';
import {useEffect, useState} from "react";

const useQueryParser = () => {
    const location = useLocation();
    const [queries, setQueries] = useState(null);
    useEffect(() => {
        // location search ?key=value&key=value
        if (location.search) {
            let rawQueries = location.search.substring(1);
            let queriesObject = rawQueries.split('&').reduce((qs, keyValue) => {
                let [k, v] = keyValue.split('=');
                qs[k] = v;
                return qs;
            }, {});
            setQueries(queriesObject);
        }
    }, []);

    return queries;
}

export default useQueryParser;