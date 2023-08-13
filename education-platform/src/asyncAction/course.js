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
