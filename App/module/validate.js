import {fetch} from 'whatwg-fetch';
const Validate = {
    fetch,
    objectToQueryString(obj) {
        let str = "";
        for (let key in obj) {
            str += `${escape(key)}=${escape(obj[key])}&`;
        }
        return str.trim("&");
    },
    checkLiveTokenAndExistID(token,id) {
        return this.fetch(`https://graph.facebook.com/${escape(id)}/?access_token=${token}`)
            .then((body) => body.json())
            .then(data => data.error ? Promise.resolve(data.error.code) : Promise.resolve(data.from ? 200 : 300))
            .catch((e) => Promise.resolve(e))
    }
}
export default Validate;