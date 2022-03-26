
import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDPcOhe8xAHVsUDjRM_QKCYLDVfokPZegc'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi


