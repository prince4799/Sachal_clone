import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANTS } from '../../utils/constants/Constants'
import * as API_CALL from '../Apicalling'
import { getTodayAttendResponse,getTodayAttendError } from '../actions/TodayAttendenceAction'



//worker saga

function* handleTodayAttendDataResponse(action) {
    try {
        const data = yield call(API_CALL.todayAttend,action.offset)
        console.log('TODAY ATTENDENCE SAGA',data);
        yield put(getTodayAttendResponse(data))
    } catch (error) {
        yield put(getTodayAttendError(error.toString()))
    }
}

//watcher saga
export default function* handleTodayAttendenceWatcher() {

    yield takeEvery(CONSTANTS.GET_TODAY_ATTENDENCE, handleTodayAttendDataResponse)

}