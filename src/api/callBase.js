export default class callBase{

    static apiCall(method, url, queryParams = {}, options = {}){

        const headersBaseOptions = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        const headers = new Headers()

        const optionsRequest = {
            method: method,
        }

        if(!options.headers){
            for (const key in headersBaseOptions) {
                headers.append([key], headersBaseOptions[key])
            }
            Object.assign(optionsRequest, {headers: headers})
        }
        else{
           const headersOptions = options.headers;
            for (const key in headersOptions) {
                headers.append([key], headersOptions[key])
            }
            Object.assign(optionsRequest, {headers: headers})
        }

        if(options.body){
            const bodyRequest = JSON.stringify(options.body); 
            Object.assign(optionsRequest, {body: bodyRequest})
        }

        const urlBase = new URL(url);
        Object.keys(queryParams).forEach(key => urlBase.searchParams.append(key, queryParams[key]));
        const objectRequest = new Request(urlBase, optionsRequest)

        return fetch(objectRequest)
        .then(response => {
            if(!response.ok){
                throw new Error(response)
            }

            return response.json()
        })
        .catch((error) => {
            throw error
        })
    }
}