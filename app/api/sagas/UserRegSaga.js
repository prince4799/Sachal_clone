import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANTS } from '../../utils/constants/Constants'
import * as API_CALL from '../Apicalling'
import { getUserRegResponse,getUserRegError } from '../actions/UserRegAction'



//worker saga

function* handleUserRegDataResponse(action) {
    try {
        const data = yield call(API_CALL.userReg,action.emp_id,action.imei_no)
        console.log('USER REGISTRATION SAGA SUCCESS',data);
        yield put(getUserRegResponse(data))
    } catch (error) {
        console.log('USER REGISTRATION SAGA ERROR',error);
        yield put(getUserRegError(error.toString()))
    }
}

//watcher saga
export default function* handleUserRegWatcher() {

    yield takeEvery(CONSTANTS.GET_USER_REG, handleUserRegDataResponse)

}