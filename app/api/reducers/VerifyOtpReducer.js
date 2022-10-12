import { CONSTANTS } from "../../utils/constants/Constants"

const VerifyOtpReducer = (state = '', action) => {


    if (action.type == CONSTANTS.GET_OTP_VERIFY_SUCCESS) {
        return action.payload
    }
    if (action.type == CONSTANTS.GET_OTP_VERIFY_ERROR) {
        return action.payload
    } else {
        return state

    }
}
//must be imported in the root reducer

export default VerifyOtpReducer