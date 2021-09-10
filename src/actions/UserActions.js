import axios from "axios";

export const registerUserAction = (user) => async dispatch => {
    dispatch({type: 'USER_REGISTER_REQUEST'});
    try{
        const response = await axios.post('/api/users/register', user)        
        dispatch({type: 'USER_REGISTER_SUCCESS'});
    }catch(error){
        dispatch({type: 'USER_REGISTER_FAILED', payload: error});
    }
}

export const loginUserAction = (user) => async dispatch => {    
    dispatch({type: 'USER_LOGIN_REQUEST'});
    try{
        const response = await axios.post('/api/users/login', user)        
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data});
        localStorage.setItem('currentLoggedUser', JSON.stringify(response.data));
        window.location.href = "/";
    }catch(error){
        dispatch({type: 'USER_LOGIN_FAILED', payload: error});
    }
}