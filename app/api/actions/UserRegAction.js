import { CONSTANTS } from "../../utils/constants/Constants"

const loadUserReg = (emp_id,imei_no) => ({
    type: CONSTANTS.GET_USER_REG,
    imei_no,
    emp_id
})

const getUserRegError = payload => ({
    type: CONSTANTS.GET_USER_REG_ERROR,
    payload
})

const getUserRegResponse = payload => ({
    type: CONSTANTS.GET_USER_REG_SUCCESS,
    payload
})



export {
    getUserRegResponse,
    getUserRegError,
    loadUserReg
}