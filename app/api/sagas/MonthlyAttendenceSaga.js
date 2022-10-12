import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANTS } from '../../utils/constants/Constants'
import * as API_CALL from '../Apicalling'
import { getMonthlyAttendResponse,getMonthlyAttendError } from '../actions/MonthlyAttendenceAction'



//worker saga

function* handleMonthlyAttendenceDataResponse(action) {
    try {
        const data = yield call(API_CALL.monthAttend,action.offset)
        console.log('MONTHLY ATTENDENCE SAGA',data);
        yield put(getMonthlyAttendResponse(data))
    } catch (error) {
        yield put(getMonthlyAttendError(error.toString()))
    }
}

//watcher saga
export default function* handleMonthlyAttendenceWatcher() {

    yield takeEvery(CONSTANTS.GET_MONTHLY_ATTENDENCE, handleMonthlyAttendenceDataResponse)

}