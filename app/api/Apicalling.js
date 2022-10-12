import { CONSTANTS } from "../utils/constants/Constants"



export const userReg = async (emp_id, imei_no) => {
    var userRegRes =''
    // console.log("User registration URL -=================>",CONSTANTS.BASE_URL + '/userreg' )
    // console.log("User registration PARAMETER -=================>",emp_id, imei_no )
    try {

         await fetch(CONSTANTS.BASE_URL + '/userreg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "emp_id": emp_id,
                    "imei_no": imei_no
                }),
        }).then((response) => response.json())
        .then((response)=>userRegRes=response)
        return userRegRes;
    }
    catch (error) {
        console.error('Error from user Registration :', error);
    }
}







export const verifyOTP = async (emp_id, imei_no, simNo, otp) => {


    date = new Date.now()
    console.log("I'm trying.................");
    try {
        const verifyOTPRes = await fetch(CONSTANTS.BASE_URL + '/verifyotp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "emp_id": emp_id,
                    "otp_date": date,
                    "imei_no": imei_no,
                    "sim_no": simNo,
                    "otp": otp
                }),
        }).then(response => response.json())
        // .then(data => console.log(";;;;;;;;;;;;;;;;;", data));
        return verifyOTPRes;
    }
    catch (e) {
        console.error("Error From verifyOTP", e);
    }

}


export const resendOTP = async (emp_id) => {
    try {
        const resendOTPRes = await fetch(CONSTANTS.BASE_URL + '/resendOtp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'emp_id': emp_id
            })
        }).then(response => response.json())
        return resendOTPRes;
    }
    catch (e) {
        console.error("Error From resendOTP", e);
    }

}

export const savePunch = async ({
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
}) => {

    try {
        const savePunchRes = await fetch(CONSTANTS.BASE_URL + '/savepunch', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "emp_id": emp_id,
                "punch_date": punch_date,
                'punch_time': punch_time,
                'mob_no': mob_no,
                'ip_add': ip_add,
                'mobile_os_type': mobile_os_type,
                'wifi_Mac_address': wifi_Mac_address,
                'lng': lng,
                'lat': lat,
                'imeino': imeino,
                'simno': simno,
            })
        }).then((response) => response.json())
        return savePunchRes;
    }
    catch (e) {
        console.error("Error from save Punch", e);
    }
}



export const todayAttend = async (emp_id, date) => {

    try {
        const todayAttendRes = fetch(CONSTANTS.BASE_URL + '/todayAttend', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                "emp_id": emp_id,
                "date": date
            }
        }).then((response) => response.json())
        return todayAttendRes;
    }
    catch (e) {
        console.error("Error from today attend", e);
    }

}

export const monthAttend = async (emp_id,month,year) => {
    try {
        const monthAttendRes = fetch(CONSTANTS.BASE_URL + '/monthAttend', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                "emp_id": emp_id,
                "month": month,
                "year": year
            }
        }).then((response)=>response.json())
        return monthAttendRes
    }
    catch (e) {
        console.error("Error from monthAttend", e);
    }
}