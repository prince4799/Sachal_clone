import { CONSTANTS } from "../../utils/constants/Constants"

const loadMonthlyAttend = (emp_id,month,year) => ({
    type: CONSTANTS.GET_MONTHLY_ATTENDENCE,
    emp_id,month,year

})

const getMonthlyAttendError = payload => ({
    type: CONSTANTS.GET_MONTHLY_ATTENDENCE_ERROR,
    payload
})

const getMonthlyAttendResponse = payload => ({
    type: CONSTANTS.GET_MONTHLY_ATTENDENCE_SUCCESS,
    payload
})



export {
    getMonthlyAttendResponse,
    getMonthlyAttendError,
    loadMonthlyAttend
}