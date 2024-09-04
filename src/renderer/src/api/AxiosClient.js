import axios from "axios";

/**
 * initialize the axios
 */
const AxiosClient = axios.create({
    baseURL: `http://localhost:8000/`,
    withCredentials: true,
});

/**
 * intercepte the request when user try to make request
 */
AxiosClient.interceptors.request.use( (config) => {


    config.headers = {
        "Content-Type": 'multipart/form-data'
    };

    return config;
});

/**
 * intercept the response from the server
 */
AxiosClient.interceptors.response.use( (response) => {

    return response;
}, (error)=> {

    const {response} = error;

    // if (response.status === 401) {
    //     localStorage.removeItem('ACCESS_TOKEN');
    // }
    // if (response.status === 422) {
    //     return response
    // }
    // if (response.status === 401 || response.status === 400) {
    //     return response
    // }
});

export default AxiosClient;
