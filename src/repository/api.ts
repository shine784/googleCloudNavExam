import axios from "axios";

const BASE_URL = "public"


const requestDetail = (path:String) => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/`)
        .then(res => {
            return res.data
        })
        .catch((error) => {
            console.log(error);
        })
}

const ExecuteApi = () => {
    return {
        requestDetail
    }
}


export default ExecuteApi;