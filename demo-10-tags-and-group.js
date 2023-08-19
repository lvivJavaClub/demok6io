import http from 'k6/http';
import exec from 'k6/execution';
import {Trend} from 'k6/metrics';
import {check, group} from 'k6';

const trend = new Trend('trend');

export const options = {
    vus: 10,
    duration: '30s',
    // k6 status
    // k6 rest api
    thresholds: {
        'http_req_duration{my_tag:_GET1}': ['p(90)<100'],
        'http_req_duration{my_tag:_GET2}': ['p(90)<120'],
    },
};

export default function () {
    exec.vu.tags.containerGroup = 'MAIN';
    group('MAIN', function () {
        const res = http.get('http://test.k6.io', {
            tags: {
                my_tag: "_GET1",
            },
        });

        check(res, {'status is 200': (r) => r.status === 200}, {my_tag: "_CHECK"});

        trend.add(res.timings.connecting, {my_tag: "_TREND"});

        group('SUB', function () {
            http.get('https://httpbin.test.k6.io/anything', {
                tags: {
                    my_tag: "_GET2",
                }
            });
        });
    });
}
