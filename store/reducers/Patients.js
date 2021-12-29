import { PATIENT_EVENT } from "../constants/Patients";

const initialState = {
    patients: [],
    fetching: false,
    fetched: false,
    error: null
};

export default function patientsReducer(state = initialState, action) {
    switch (action.type) {
        case PATIENT_EVENT.GET_PATIENT_PENDING:
            return { ...state, fetching: true, fetched: false, error: null };
        case PATIENT_EVENT.GET_PATIENT_FULFILLED:
            console.log('reduced payload');
            console.log(JSON.stringify(action));
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                patients: action.payload
            };
        case PATIENT_EVENT.GET_PATIENT_REJECTED:
            return { ...state, fetching: false, fetched: false, error: action.payload };
        default:
            return state;
    }
};