import { useEffect, useState } from "react";
import testYelp from "../api/testYelp";
import yelp from "../api/yelp";

export default () => {
    const [resultsFeaturedList, setResult] = useState([])
    const [errMsg, setError] = useState('')

    const featuredList = async () => {
        console.log('featured list')
        try {
            const response = await testYelp.get('featured.json', {
            });
            setResult(response.data)
        } catch (err) {
            setError(err.errMsg)
            console.log(err)
        }
    }

    useEffect(() => {
        featuredList()
    }, []);

    return [featuredList, resultsFeaturedList, errMsg]
}