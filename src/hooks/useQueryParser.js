import {useLocation} from 'react-router-dom';
import {useEffect, useState} from "react";

const useQueryParser = () => {
    const location = useLocation();
    const [queries, setQueries] = useState(null);
    useEffect(() => {
        // location search ?key=value&key=value
        // ?redirect_url=/register?redirect_url=/restaurants/4&key=value&key=value
        // redirect_url=/register&key=value
        if (location.search) {
            // const [useless, redirectQuery, nestedRedirectQuery] = location.search.split('?');
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