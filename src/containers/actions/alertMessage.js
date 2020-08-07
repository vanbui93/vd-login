import * as types from './../../constant/alert';

export function alertMessages(message) {
    return {
        type: types.ALERT_MESSAGE,
        message
    }
}