import Axios from "axios";

export const axios = Axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});
