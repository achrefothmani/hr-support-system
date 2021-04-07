import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    CLEAR_ERRORS

} from '../constants/userConstants'


export const authReducer = (state = { user: {} }, action) => {

    switch (action.type) {

        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }
        case UPDATE_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: true,
                user: action.payload
                
            }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case LOAD_USER_SUCCESS:
        
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

            case UPDATE_USER_SUCCESS:
                return {
                    
                    loading: false,
                    isAuthenticated: true,
                    user: action.payload
                }

        case LOAD_USER_FAIL:
        case UPDATE_USER_FAIL:

            return {

                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }


        case LOGIN_FAIL:
        case REGISTER_FAIL:

            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }


        case LOGOUT_REQUEST:
            return {

                loading: true,
                isAuthenticated: true,

            }

        case LOGOUT_SUCCESS:
            return {

                loading: false,
                isAuthenticated: false,
                user: null,

            }

        case LOGOUT_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }


        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }


        default:
            return state
    }
}