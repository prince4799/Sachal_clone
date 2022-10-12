import { CONSTANTS } from "../../utils/constants/Constants"


const loadVerifyOtp = (emp_id, imei_no, simNo, otp) => ({
    type: CONSTANTS.GET_OTP_VERIFY,
    emp_id, imei_no, simNo, otp
})

const getVerifyOtpError = payload => ({
    type: CONSTANTS.GET_OTP_VERIFY_ERROR,
    payload
})

const getVerifyOtpResponse = payload => ({
    type: CONSTANTS.GET_OTP_VERIFY_SUCCESS,
    payload
})



export {
    getVerifyOtpResponse,
    getVerifyOtpError,
    loadVerifyOtp
}