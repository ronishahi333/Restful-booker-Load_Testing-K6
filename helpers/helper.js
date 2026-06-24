import http from 'k6/http';

function buildHeader(token){
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    if(token) headers['Cookie'] = `token=${token}`
    return headers;
}   

export function post (url, body, token = null, tags = {}) {
    return http.post(url, JSON.stringify(body), {
        headers: buildHeader(token),
        tags,
    });
}

export  function get (url, token = null, tags ={}) {
    return http.get(url, {
        headers: buildHeader(token),
        tags,
    })
}

export function put (url, body, token = null, tags = {}) {
    return http.put(url, JSON.stringify(body), {
        headers: buildHeader(token),
        tags
    })
}

export function del(url, body = null, token = null, tags = {}) {
    return http.del(url, body, {
        headers: buildHeader(token),
        tags
    })
}