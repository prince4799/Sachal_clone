import { CONSTANTS } from "../../utils/constants/Constants"

const UserRegReducer = (state = '', action) => {


    if (action.type == CONSTANTS.GET_USER_REG_SUCCESS) {
        return action.payload
    }
    if (action.type == CONSTANTS.GET_USER_REG_ERROR) {
        return action.payload
    } else {
        return state

    }
}
//must be imported in the root reducer

export default UserRegReducer;