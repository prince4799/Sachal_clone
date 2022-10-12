import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANTS } from '../../utils/constants/Constants'
import * as API_CALL from '../Apicalling'
import { getVerifyOtpResponse,getVerifyOtpError } from '../actions/VerifyOtpAction'



//worker saga

function* handleVerifyOtpDataResponse(action) {
    try {
        const data = yield call(API_CALL.verifyOTP,action.offset)
        console.log('VERIFY OTP SAGA',data);
        yield put(getVerifyOtpResponse(data))
    } catch (error) {
        yield put(getVerifyOtpError(error.toString()))
    }
}

//watcher saga
export default function* handleVerifyOtpWatcher() {

    yield takeEvery(CONSTANTS.GET_OTP_VERIFY, handleVerifyOtpDataResponse)

}