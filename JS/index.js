// fetch('http://localhost:3000/users/') 
//  .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })

window.onload = function () {
  let form = document.getElementById('sheet');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(sheet.elements)
  })
};