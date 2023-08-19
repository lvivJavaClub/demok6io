import http from 'k6/http';

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(50)<100']// 50% of requests should be below 100ms
    },
    summaryTrendStats: ['min', 'max', 'p(50)', 'p(99.99)', 'count'],
};

export default function () {
    http.get('http://test.k6.io');
}
