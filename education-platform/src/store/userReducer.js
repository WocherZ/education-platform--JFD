const defaultState = {isAuth: false,
                      userId : 0,
                      userName: null,
                      notification: 0,
                      jwt: null};

// action = {type: "", payload: ""};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT"

export function reducer(state=defaultState, action) {
  let isAuth = false;
  switch (action.type) {
    case LOGIN:
      if (action.payload.userId) {
        isAuth = true;
      }
      return {...state, isAuth: isAuth, userId: action.payload.userId, jwt: action.payload.jwt};
    case LOGOUT:  
      return {...state, isAuth: false, userId: 0, jwt: null};
    default:
      return state;
  }
}

export const loginUserAction = (payload) => ({type: LOGIN, payload: payload});
export const logoutUserAction = (payload) => ({type: LOGOUT, payload: payload});
