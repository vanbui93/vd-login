import * as types from './../constant/alert';

export const alertActions = {
    alertSuccess,
    alertError,
    alertClear
};

export function alertSuccess(message) {
    return {
        type: types.ALERT_SUCCESS,
        message
    }
}

export function alertError(message) {
    return {
        type: types.ALERT_ERROR,
        message
    }
}

export function alertClear(message) {
    return {
        type: types.ALERT_CLEAR
    }
}