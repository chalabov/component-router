import test from 'tape';
import {locationHistory} from '../src/locationHistory';


test('locationHistory', t => {
  t.ok(locationHistory instanceof Function, 'should be function');
  t.end();
});
