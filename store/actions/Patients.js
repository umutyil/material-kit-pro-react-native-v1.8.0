import {PATIENT_EVENT} from "../constants/Patients";
import axios from "axios";

export const getPatients = (userId) => {
    try {
        return async dispatch => {
            
            const url = 'https://getsmart.premedix.sk​/Patient/?id='+userId;
            console.log('requesting patients data:' + url);
            const res = await axios.get(url).catch(error => console.log(JSON.stringify(error)));
            if(res.data){
                console.log(res.data.myObject);
                dispatch({
                    type: PATIENT_EVENT.GET_PATIENT_FULFILLED,
                    payload:res.data.myObject
                });
            } else {
                console.log("Unable to fetch");
            }
        }
    } catch (error) {
        console.log(error);
    }
    
};