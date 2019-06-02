import history from '../history';
import streams from '../apis/streams';

import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';

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
    const response = await streams.post('/streams', values);
    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push('/');
}
