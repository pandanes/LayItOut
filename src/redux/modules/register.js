//ACTION TYPE
export const REGISTER_ACTIONS = Object.freeze({
    SAVE_USERNAME: '../../screens/saveUsername',
    SAVE_EMAIL: '../../screens/saveEmail'
})

//ACTIONS TYPE
export const mainActions = Object.freeze({
    //nama fungsi
    saveUsername: (text) => ({ type: REGISTER_ACTIONS.SAVE_USERNAME , text}),
    saveEmail: (text) => ({ type: REGISTER_ACTIONS.SAVE_EMAIL, text })
  })

//REDUCER 
  const initState = {
    username: '',
    email: ''
  }
  
  //REDUCER
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case REGISTER_ACTIONS.SAVE_USERNAME:
        return { ...state, username: action.text }
      case REGISTER_ACTIONS.SAVE_EMAIL :
        return { ...state, email: action.text }
      default:
        return state
    }
  }
  
  export default reducer