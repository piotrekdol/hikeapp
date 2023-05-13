
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
