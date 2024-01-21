import axios from "axios";

export default axios.create({
    baseURL: "https://msigma.in/",
    headers: {
        'Content-Type': 'application/ json'
    },
});


