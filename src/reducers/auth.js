
const initialState = {
    isAuth: false,
    user: {}
}

const auth = (state = initialState, action)=>
{
    switch(action.type){
        case 'LOGIN': 
        return{
            ...state, isAuth: true
        }

        default: return state
    }
}

export default auth