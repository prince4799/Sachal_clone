import { CONSTANTS } from "../../utils/constants/Constants"

const loadTodayAttend = (emp_id,date) => ({
    type: CONSTANTS.GET_TODAY_ATTENDENCE,
    emp_id,date

})

const getTodayAttendError = payload => ({
    type: CONSTANTS.GET_TODAY_ATTENDENCE_ERROR,
    payload
})

const getTodayAttendResponse = payload => ({
    type: CONSTANTS.GET_TODAY_ATTENDENCE_SUCCESS,
    payload
})



export {
    getTodayAttendResponse,
    getTodayAttendError,
    loadTodayAttend
}