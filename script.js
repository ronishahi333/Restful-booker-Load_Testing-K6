import { SharedArray } from 'k6/data'
import { loginUser } from './flows/loginFlow.js';
import { sleep } from 'k6';
import { options } from './config/options.js';
import { bookingFlow } from './flows/bookingFlow.js';

export {options}

const users = new SharedArray('users', () => JSON.parse(open('./data/users.json')))


export default function () {
    const user = users[__VU % users.length];

    const token = loginUser(user)
    if (!token) return
    sleep(1);

    bookingFlow(token);
    sleep(1);


}


