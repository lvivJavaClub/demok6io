import http from 'k6/http';

export const options = {
    stages: [
        {duration: '10s', target: 20},
        {duration: '10s', target: 30},
        {duration: '10s', target: 5},
    ],
};

export default function () {
    http.get('http://test.k6.io');
}
