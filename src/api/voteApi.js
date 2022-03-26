import axios from "axios";

const voteAPI = axios.create({
    baseURL:'https://devcitizenparticipation-default-rtdb.firebaseio.com/'
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 



export default voteAPI