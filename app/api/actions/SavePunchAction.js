import { CONSTANTS } from "../../utils/constants/Constants"

const loadSavePunch = ( emp_id,punch_date,punch_time,mob_no,ip_add,mobile_os_type,wifi_Mac_address,lng,lat,imeino,simno) => ({
    type: CONSTANTS.GET_SAVE_PUNCH,
    emp_id,
    punch_date,
    punch_time,
    mob_no,
    ip_add,
    mobile_os_type,
    wifi_Mac_address,
    lng,
    lat,
    imeino,
    simno

})

const getSavePunchError = payload => ({
    type: CONSTANTS.GET_SAVE_PUNCH_ERROR,
    payload
})

const getSavePunchResponse = payload => ({
    type: CONSTANTS.GET_SAVE_PUNCH_SUCCESS,
    payload
})



export {
    getSavePunchResponse,
    getSavePunchError,
    loadSavePunch
}