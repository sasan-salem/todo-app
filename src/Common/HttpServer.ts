import axios from 'axios'

export default axios.create({
    baseURL: "https://mocki.io/v1",
    headers: {"Content-type":"application/json; charset=UTF-8"}
});
