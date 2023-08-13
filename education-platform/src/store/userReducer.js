const defaultState = {isAuth: false,
                      userId : 0,
                      userName: null,
                      notification: 0};

// action = {type: "", payload: ""};
export function reducer(state=defaultState, action) {
  let isAuth = false;
  switch (action.type) {
    case "LOGIN":
      if (action.payload) {
        isAuth = true;
      }
      return {...state, isAuth: isAuth, userId: action.payload};
    case "EXIT":  
      return {...state, isAuth: false, userId: 0};
    default:
      return state;
  }
}

// console.log(reducer(defaultState, {type: "LOGIN", payload: "f"}))