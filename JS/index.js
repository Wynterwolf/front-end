fetch('http://localhost:3000/users/') 
 .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })