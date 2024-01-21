import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default (id) => {
    const [result, setResult] = useState([])
    const [errMsg, setError] = useState('')

    const getSubjects = async () => {
        console.log('subjects')

        try {
            const response = await yelp.get(`btech/v2/subjects/branch/${id}`);
            console.log(response.data.subjects)
            setResult(response.data.subjects)
        } catch (err) {
            setError(err.errMsg)
            console.log(err)
        }
    }

    useEffect(() => {
        getSubjects()
    }, []);

    return [result, errMsg]
}