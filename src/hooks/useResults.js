import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState([])
    const [errMsg, setError] = useState('')

    const searchApi = async () => {
        console.log('branches')

        try {
            const response = await yelp.get('btech/v2/branches', {
            });
            setResult(response.data.branches)
        } catch (err) {
            setError(err.errMsg)
            console.log(err)
        }
    }

    useEffect(() => {
        searchApi()
    }, []);

    return [searchApi, result, errMsg]
}