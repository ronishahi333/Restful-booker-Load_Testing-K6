const ENV_CONFIG = {
    local: 'https://restful-booker.herokuapp.com'
}

export const config = ENV_CONFIG.local

export const options = {

    stages:[
        { duration: '2s', target: 2 },
        { duration: '2s', target: 2 },
        { duration: '2s', target: 0 }
    ],

    thresholds: {
        'http_req_duration{flow:login}': ['p(50) < 400'],
        'http_req_duration{flow:getBooking}': ['p(50) < 1000'],
        'http_req_duration{flow:createBooking}': ['p(50) < 1000'],
        'http_req_duration{flow:updateBooking}': ['p(50) < 1000'],
        'http_req_duration{flow:delBooking}': ['p(50) < 500']
    }
}