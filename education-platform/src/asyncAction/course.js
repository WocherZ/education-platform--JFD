const domaine = process.env.REACT_APP_API_HOST || "http://localhost";
const port = process.env.REACT_APP_API_PORT || 3001;


export  async function fetchCourse(id){
    let result = {id:0, name: null, description:null};
    const response = await fetch(
        `${domaine}:${port}/api/course/${id}`,
         {headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, }
    );
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      result = await response.json();

    } 
  return result;      
}

export  async function fetchModules(id){
  let result = [];
  const response = await fetch(
      `${domaine}:${port}/api/modules/course/${id}`,
       {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, }
  );
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    result = await response.json();
  } 
return result;      
}


export  async function fetchTeachers(id){
  let result = [];
  const response = await fetch(
      `${domaine}:${port}/api/user/course/${id}`,
       {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, }
  );
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    result = await response.json();
  } 
return result;      
}