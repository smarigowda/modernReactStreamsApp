import streams from '../apis/streams';

import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: { userId }
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = values => async dispatch => {
    console.log(`POST-ing to /streams with values = ${values}`);
    streams.post('/streams', values);
}
