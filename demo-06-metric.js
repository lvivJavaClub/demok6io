import http from 'k6/http';
import {Trend} from 'k6/metrics';

const trend = new Trend('waiting_time', true);

export const options = {
    vus: 10,
    duration: '10s',
};

export default function () {
    const r = http.get('http://test.k6.io');
    trend.add(r.timings.waiting);
}
