import { all } from 'redux-saga/effects';

import handleMonthlyAttendenceWatcher from './MonthlyAttendenceSaga';
import handleResendOtpWatcher from './ResendOtpSaga';
import handleSavePunchWatcher from './SavePunchSaga';
import handleTodayAttendenceWatcher from './TodayAttendenceSaga';
import handleUserRegWatcher from './UserRegSaga';
import handleVerifyOtpWatcher from './VerifyOtpSaga';

export default function* rootSaga() {
    yield all([
        handleMonthlyAttendenceWatcher(),
        handleResendOtpWatcher(),
        handleSavePunchWatcher(),
        handleTodayAttendenceWatcher(),
        handleUserRegWatcher(),
        handleVerifyOtpWatcher(),
    ]);
}
