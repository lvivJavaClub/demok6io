import http from 'k6/http';
import {Counter} from 'k6/metrics';

const counter = new Counter('wrong_name');

export const options = {
    vus: 10,
    duration: '10s'
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function () {
    const res = http.get('https://test-api.k6.io/public/crocodiles/' + getRandomInt(3));
    const contentOK = res.json('name') === 'Bert';
    counter.add(!contentOK);
}
