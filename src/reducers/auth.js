import { getDetail } from "../components/utils"

const localUser = getDetail('detail')

const initialState = {
    isAuth: localUser ? true : false,
    user: localUser || {}
}

const auth = (state = initialState, action)=>
{
    switch(action.type){
        case 'LOGIN': 
        return{
            ...state, isAuth: true, user: action.payload
        }

        case 'LOGOUT': 
        return {
         ...initialState, isAuth: false
        }

        default: return state
    }
} 

export default auth