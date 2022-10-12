import { CONSTANTS } from "../../utils/constants/Constants"

const MonthlyAttendenceReducer = (state = '', action) => {


    if (action.type == CONSTANTS.GET_MONTHLY_ATTENDENCE_SUCCESS) {
        return action.payload
    }
    if (action.type == CONSTANTS.GET_MONTHLY_ATTENDENCE_ERROR) {
        return action.payload
    } else {
        return state

    }
}
//must be imported in the root reducer

export default MonthlyAttendenceReducer