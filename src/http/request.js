import axios from 'axios'
import { BASEURL } from './config'
function myAxios(options) {
    return axios(BASEURL+ options.url)
            .then((res=> {
                options.success(res)
            }))
            .catch(err=> options.error(err))
}

export default myAxios