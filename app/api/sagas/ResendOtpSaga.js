import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANTS } from '../../utils/constants/Constants'
import * as API_CALL from '../Apicalling'
import { getResendOtpResponse,getResendOtpError } from '../actions/ResendOtpAction'



//worker saga

function* handleResendOtpDataResponse(action) {
    try {
        const data = yield call(API_CALL.resendOTP,action.offset)
        console.log('RESEND OTP SAGA',data);
        yield put(getResendOtpResponse(data))
    } catch (error) {
        yield put(getResendOtpError(error.toString()))
    }
}

//watcher saga
export default function* handleResendOtpWatcher() {

    yield takeEvery(CONSTANTS.GET_RESEND_OTP, handleResendOtpDataResponse)

}