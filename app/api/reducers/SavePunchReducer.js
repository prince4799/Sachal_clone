import { CONSTANTS } from "../../utils/constants/Constants"

const SavePunchReducer = (state = '', action) => {


    if (action.type == CONSTANTS.GET_SAVE_PUNCH_SUCCESS) {
        return action.payload
    }
    if (action.type == CONSTANTS.GET_SAVE_PUNCH_ERROR) {
        return action.payload
    } else {
        return state

    }
}
//must be imported in the root reducer

export default SavePunchReducer