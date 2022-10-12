import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANTS } from '../../utils/constants/Constants'
import * as API_CALL from '../Apicalling'
import { getSavePunchResponse,getSavePunchError } from '../actions/SavePunchAction'



//worker saga

function* handleSavePunchDataResponse(action) {
    try {
        const data = yield call(API_CALL.savePunch,action.offset)
        console.log('SAVE PUNCH SAGA',data);
        yield put(getSavePunchResponse(data))
    } catch (error) {
        yield put(getSavePunchError(error.toString()))
    }
}

//watcher saga
export default function* handleSavePunchWatcher() {

    yield takeEvery(CONSTANTS.GET_SAVE_PUNCH, handleSavePunchDataResponse)

}