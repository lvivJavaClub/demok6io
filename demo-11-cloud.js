import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  ext: {
    loadimpact: {
      projectID: 3654181,
      name: 'YOUR TEST NAME'
    }
  }
};

export default function() {
  http.get('http://test.k6.io');
  sleep(1);
}