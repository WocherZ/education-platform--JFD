import { loginUserAction } from "../store/userReducer";

const domaine = "http://localhost";
const port = 3001;

export const fetchLoginUser = ({email, password}) => {
  return function(dispatch) {
    fetch(`${domaine}:${port}/api/auth/login`,
      {method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})  
      })
      .then(response=>response.json())
      .then(json => dispatch(loginUserAction(json)))
  }
}

export const fetchRegisterUser = (email, password) => {
  // console.log("fetchRegisterUser", email, password );  
  fetch(`${domaine}:${port}/api/auth/register`,
      {method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})  
      })
      .then(response=>response.json())
      .then(json => console.log(json))
}


// response = await fetch(`http://localhost:3001/api/user/${userId}`,{headers:
// {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNjg5NDI5NDE0fQ.5iyGE8rVx3kHLC93B0w29h1Ah4lZ1MMA35QAvAFORzU'}});
