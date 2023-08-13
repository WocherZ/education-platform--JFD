import { loginUserAction } from "../store/userReducer";

export const fetchLoginUser = ({email, password}) => {
  return function(dispatch) {
    fetch(`http://localhost:3002/api/auth/login`,
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

export const fetchRegisterUser = ({email, password}) => {
    fetch(`http://localhost:3002/api/auth/register`,
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
