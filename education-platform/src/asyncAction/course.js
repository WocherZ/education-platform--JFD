// import { loginUserAction } from "../store/userReducer";

const domaine = "http://localhost";
const port = 3001;

export  async function fetchCourse(id, token){
    let result = undefined;
    const response = await fetch(
        `${domaine}:${port}/api/course/${id}`,
         {headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": token
        }, }
    );
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      result = await response.json();
    } 
  return result;      
}
// console.log(fetchCourse(1, "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNjg5NDI5NDE0fQ.5iyGE8rVx3kHLC93B0w29h1Ah4lZ1MMA35QAvAFORzU").then(value => {
//   console.log(value);
//   return value;
// }))

// response = await fetch(`http://localhost:3001/api/user/${userId}`,{headers:
// {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNjg5NDI5NDE0fQ.5iyGE8rVx3kHLC93B0w29h1Ah4lZ1MMA35QAvAFORzU'}});
