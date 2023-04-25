// // wywołanie funkcji fetch, która pobiera dane z serwera
// fetch('/dane')
//   .then(response => response.json())
//   .then(data => {
//     // dane zostaną przekonwertowane na format JSON i będą dostępne jako obiekt
//     // tutaj można wykonać dowolną operację na danych - np. wyświetlić je na stronie

//     const container = document.querySelector('#dane-container'); // pobieramy kontener, do którego chcemy wstawić dane

//     // tworzymy elementy HTML na podstawie pobranych danych
//     data.forEach(item => {
//       const div = document.createElement('div');
//       div.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
//       container.appendChild(div);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });


fetch('/dane')
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById('dane-container');
    data.forEach((item) => {
      const element = document.createElement('div');
      element.innerHTML = `${item.startTrip} - ${item.numberOfKilometers} km`;
      container.appendChild(element);
    });
  });
