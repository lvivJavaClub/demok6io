import http from 'k6/http';

export const options = {
//    vus: 10,
//    duration: '10s',
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function setup() {
    const data = {crocodiles: getRandomInt(4)}

    console.info(data);
    return data;
}

export default function (data) {
    const res = http.get('https://test-api.k6.io/public/crocodiles/' + data.constructor);
    console.error(res);
}

export function teardown(data) {
    console.warn(data);
}
