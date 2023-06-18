import callBase from "./callBase.js";

export default class HandleCall extends callBase{

    static get(path, queryParams = {}, options = {}){
        
        return HandleCall.apiCall('GET', path, queryParams, options)
    }

    static post(path, queryParams = {}, options = {}){
        return HandleCall.apiCall('POST', path, queryParams, options)
    }
}