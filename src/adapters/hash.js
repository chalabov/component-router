import {createHashHistory as createHistory} from 'history';
import {location} from './../location';
import {LOCATION_HASH} from './../constants';


export const locationHash = location(createHistory, LOCATION_HASH);
