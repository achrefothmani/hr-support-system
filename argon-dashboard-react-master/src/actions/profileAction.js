
import { PROFILE_LIST_FAIL, PROFILE_LIST_REQUEST, PROFILE_LIST_SUCCESS, SAME_PROFILE_SUCCESS,SAME_PROFILE_REQUEST,SAME_PROFILE_FAIL } from '../constants/profileConstants'
import axios from 'axios'



export const listProfiles = () => async (dispatch) => {
    try {
        dispatch({ type: PROFILE_LIST_REQUEST })
        const { data } = await axios.get('/api/profiles')

        dispatch({ type: PROFILE_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PROFILE_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message }
        )
    }
}


//version testing

export const SameProfiles = (name) => async (dispatch) => {
    try {
        dispatch({ type: SAME_PROFILE_REQUEST })
        const { data } = await axios.get(`/admin/usersByName?name=${name}`)

        dispatch({ type: SAME_PROFILE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SAME_PROFILE_FAIL,payload: error.response.data.errMessage}
        )
    }
}








