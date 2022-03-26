import axios from "axios";

const proposalAPI = axios.create({
    baseURL:'https://devcitizenparticipation-default-rtdb.firebaseio.com/'
})


proposalAPI.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 



export default proposalAPI