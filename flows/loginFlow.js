import { check } from 'k6';
import { post } from '../helpers/helper.js';
import { loginSuccessRate, loginDuration } from '../metrics/custom.js';
import { config } from '../config/options.js';

export function loginUser(user) {

    const res = post(
        `${config}/auth`, 
        {username: user.username, password: user.password},
        null,
        {flow: 'login'}
    )

    loginDuration.add(res.timings.duration)

    const ok = check(res, {
        'get login status': (r)=> r.status == 200
    })

    loginSuccessRate.add(ok);
    
    return res.json('token')
}


