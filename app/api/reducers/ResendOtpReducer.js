import { CONSTANTS } from "../../utils/constants/Constants"

const ResendOtpReducer = (state = '', action) => {


    if (action.type == CONSTANTS.GET_RESEND_OTP_SUCCESS) {
        return action.payload
    }
    if (action.type == CONSTANTS.GET_RESEND_OTP_ERROR) {
        return action.payload
    } else {
        return state

    }
}
//must be imported in the root reducer

export default ResendOtpReducer