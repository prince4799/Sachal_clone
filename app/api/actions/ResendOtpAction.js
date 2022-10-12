import { CONSTANTS } from "../../utils/constants/Constants"

const loadResendOtp = (emp_id) => ({
    type: CONSTANTS.GET_RESEND_OTP,
    emp_id,

})

const getResendOtpError = payload => ({
    type: CONSTANTS.GET_RESEND_OTP_ERROR,
    payload
})

const getResendOtpResponse = payload => ({
    type: CONSTANTS.GET_RESEND_OTP_SUCCESS,
    payload
})



export {
    getResendOtpResponse,
    getResendOtpError,
    loadResendOtp
}