import axios from 'axios'
//https://mocki.io/v1
//https://jsonplaceholder.typicode.com

export default axios.create({
    baseURL: "https://mocki.io/v1",
    headers: {"Content-type":"application/json; charset=UTF-8"}
});
