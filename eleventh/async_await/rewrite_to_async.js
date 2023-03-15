import {random} from "../../fifth/numbers/random_number.js";

export const fetch = async()=>{
    const rand_status = Math.round(random(2,4)) * 100
    return {status: rand_status, json: {message: 'ok'}}
}

const loadJson = async (url) => {
    let response = await fetch(url);
    if (response.status === 200) return response.json
    throw new Error(response.status.toString())

}

loadJson('no-such-user.json')
    .catch(console.log);