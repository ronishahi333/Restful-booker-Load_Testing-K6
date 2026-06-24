import { get, post, put, del } from "../helpers/helper.js"
import { config } from "../config/options.js"
import { check } from "k6"

export function bookingFlow(token) {

    const getBooking = get(
        `${config}/booking`,
        null,
        { flow: 'getBooking' }
    )

    check(getBooking, {
        'get booking status': (r) => r.status == 200,
        'has booking': (r) => r.json().length > 0
    });

    const createBooking = post(
        `${config}/booking`,
        {
            "firstname": "Add",
            "lastname": "Status",
            "totalprice": 115,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2022-01-01",
                "checkout": "2024-01-01"
            },
            "additionalneeds": "Dinner"
        },
        null,
        { flow: 'createBooking' }
    )

    const responseBody = createBooking.json();
    const bookingID = responseBody.bookingid

    check(createBooking, {
        'created booking status': (r) => r.status == 200,
        'created booking': (r) => r.json('bookingid') !== undefined
    })

    const updateBooking = put(
        `${config}/booking/${bookingID}`,
        {
            "firstname": "James",
            "lastname": "Watson",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "High Class Room"
        },
        token,
        { flow: 'updateBooking' }
    )

    check(updateBooking,{
        'updated booking status': (r) => r.status == 200,
        'updated booking': (r)=> r.json('firstname') !== undefined 
    })

    const delBooking = del(
        `${config}/booking/${bookingID}`,
        null,
        token,
        {flow: 'deleteBooking'}
    )

    check(delBooking, {
        'Delete booking status': (r)=> r.status == 201,
        'Delete body message': (r)=> r.body == 'Created'
    })
}