import { combineReducers } from 'redux'
import MonthlyAttendenceReducer from './MonthlyAttendenceReducer'
import ResendOtpReducer from './ResendOtpReducer'
import SavePunchReducer from './SavePunchReducer'
import TodayAttendenceReducer from './TodayAttendenceReducer'
import UserRegReducer from './UserRegReducer'
import VerifyOtpReducer from './VerifyOtpReducer'

const rootReducers = combineReducers({

    MonthlyAttendenceResponse: MonthlyAttendenceReducer,
    ResendOtpResponse : ResendOtpReducer,
    SavePunchResponse:SavePunchReducer,
    TodayAttendenceResponse:TodayAttendenceReducer,
    UserRegResponse:UserRegReducer,
    VerifyOtpResponse:VerifyOtpReducer


})

export default rootReducers;