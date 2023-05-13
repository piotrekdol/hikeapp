/* SPRAWDZANIE LOKALIZACJI UŻYTKOWNIKA */
/* KLUCZ API POGODA Z RAPIDAPI */

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "db60434695mshed9900c26b14af2p181808jsn1ed686cbf7cd",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

/* NAJPIERW, DEFAULTOWO WYŚWIETLAM POGODĘ DLA WARSZAWY, ŻEBY NIE BYŁO PUSTO */
  fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=Warsaw", options)

  .then((resp) => resp.json())
  .then((data) => {
    const city = Object.keys(data.location)[0]; // pobieramy klucz PIERWSZEGO ELEMENTU Z LOCATION
    const country = Object.keys(data.location)[2];
    const datetime = Object.keys(data.location)[7];
    const temperature = Object.keys(data.current)[2]; // pobieramy klucz trzeciego elementu Z CURRENT
    const iconDesc = Object.keys(data.current.condition)[0];
    const icon = Object.keys(data.current.condition)[1];         
    const namecity = data.location[city]; // TWORZYMY ZMIENNĄ NAMECITY, KTÓRA WYŚWIETLI NAZWĘ MIASTA NA STRONIE
    const namecountry = data.location[country]; //TWORZYMY ZMIENNĄ NAMECOUNRTY, KTÓRA WYŚWIETLI NAZWĘ PAŃSTWA NA STRONIE
    const date_time = data.location[datetime]; //TWORZYMY ZMIENNĄ NAMECOUNRTY, KTÓRA WYŚWIETLI NAZWĘ PAŃSTWA NA STRONIE        
    const temp_value = data.current[temperature]; // TWORZYMY ZMIENNĄ TEMP_VALUE, KTÓRA WYŚWIETLI TEMPERATURĘ NA STRONIE
    const icon_description = data.current.condition[iconDesc]; // TWORZYMY ZMIENNĄ WEATHER_ICON, KTÓRA WYŚWIETLI IKONĘ NA STRONIE        
    const weather_icon = data.current.condition[icon]; // TWORZYMY ZMIENNĄ WEATHER_ICON, KTÓRA WYŚWIETLI IKONĘ NA STRONIE
    const outputDiv = document.getElementById("weatherwarsaw");
    outputDiv.innerHTML = `<div class="city">${namecity}</div>,&nbsp;<div>${namecountry}</div>&nbsp;<div id="temp">
    <span class="material-symbols-outlined font-med">device_thermostat</span>${temp_value}°C</div>&nbsp;<div>${icon_description}</div>&nbsp;
    <div class="iconcondition"><img src="http:${weather_icon}" /></div><div class="datetime">${date_time}</div>`; // CO MA SIĘ WYŚWIETLAĆ NA STRONIE
    if (temp_value >= 20) {
      //INSTRUKCJA WARUNKOWA JAK MA ZMIENIAĆ SIĘ KOLOR TEKSTU W ZALEŻNOŚCI OD WYSOKOŚCI TEMPERATURY
      let v = document.getElementById("temp");
      v.className += "addred";
    } else if (temp_value <= 19 && temp_value > 11) {
      let w = document.getElementById("temp");
      w.className += "addorange";
    } else {
      let ww = document.getElementById("temp");
      ww.className += "addblue";      
    }
  })
  .catch((error) => console.error(error));


/* PRZYCISK ABY POBRAĆ LOKALIZACJĘ UŻYTKOWNIKA I WYŚWIETLIĆ W MIEJSCE DEFAULTOWEJ WARSZAWY */
function findMyState() {
  const status = document.querySelector(".status");
  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);

    fetch(
      "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" +
      latitude +
      "," +
      longitude,
      options
    )
      .then((resp) => resp.json())
      .then((data) => {
        const city = Object.keys(data.location)[0]; // pobieramy klucz PIERWSZEGO ELEMENTU Z LOCATION
        const country = Object.keys(data.location)[2];
        const datetime = Object.keys(data.location)[7];
        const temperature = Object.keys(data.current)[2]; // pobieramy klucz trzeciego elementu Z CURRENT
        const iconDesc = Object.keys(data.current.condition)[0];
        const icon = Object.keys(data.current.condition)[1];
        const namecity = data.location[city]; // TWORZYMY ZMIENNĄ NAMECITY, KTÓRA WYŚWIETLI NAZWĘ MIASTA NA STRONIE
        const namecountry = data.location[country]; //TWORZYMY ZMIENNĄ NAMECOUNRTY, KTÓRA WYŚWIETLI NAZWĘ PAŃSTWA NA STRONIE
        const date_time = data.location[datetime]; //TWORZYMY ZMIENNĄ NAMECOUNRTY, KTÓRA WYŚWIETLI NAZWĘ PAŃSTWA NA STRONIE        
        const temp_value = data.current[temperature]; // TWORZYMY ZMIENNĄ TEMP_VALUE, KTÓRA WYŚWIETLI TEMPERATURĘ NA STRONIE
        const icon_description = data.current.condition[iconDesc]; // TWORZYMY ZMIENNĄ WEATHER_ICON, KTÓRA WYŚWIETLI IKONĘ NA STRONIE        
        const weather_icon = data.current.condition[icon]; // TWORZYMY ZMIENNĄ WEATHER_ICON, KTÓRA WYŚWIETLI IKONĘ NA STRONIE
        const outputDiv = document.getElementById("weather");
        outputDiv.innerHTML = `<div class="city">${namecity}</div>,&nbsp;<div>${namecountry}</div>&nbsp;<div id="temp2">
        <span class="material-symbols-outlined font-med">device_thermostat</span>${temp_value}°C</div>&nbsp;<div>${icon_description}</div>&nbsp;
        <div class="iconcondition"><img src="http:${weather_icon}" /></div><div>${date_time}</div>`; // CO MA SIĘ WYŚWIETLAĆ NA STRONIE
        if (temp_value >= 20) {
          //INSTRUKCJA WARUNKOWA JAK MA ZMIENIAĆ SIĘ KOLOR TEKSTU W ZALEŻNOŚCI OD WYSOKOŚCI TEMPERATURY
          let v = document.getElementById("temp2");
          v.className += "addred";
        } else if (temp_value <= 19 && temp_value > 11) {
          let w = document.getElementById("temp2");
          w.className += "addorange";
        } else {
          let ww = document.getElementById("temp2");
          ww.className += "addblue";
        }
      })
      .catch((error) => console.error(error));
  };
  const error = () => {
    status.textContent = "Unable to retrieve your location";
  };
  navigator.geolocation.getCurrentPosition(success, error);
}

/* DEFAULTOWO MA BYĆ POGODA DLA WARSZAWY, PO KLIKNIĘCIU PRZYCISK 
DO LOKALIZACJI W MIEJSCE WARSZAWY PODSTAWIA SIĘ LOKALIZACJA UŻYTKOWNIKA */

const defaultWeather = document.querySelector('#weatherwarsaw'); // div pogody dla Warszawy
const customWeather = document.querySelector('#weather'); // div pogody użytkownika

weather.style.display = 'none'; // pogoda użytkownika jest początkowo ukryta

const replaceWeather = () => { //funkcja zastępująca jeden div drugim
    weatherwarsaw.style.left = '100%'; //Ukrywam pierwszy div
    weather.style.display = 'flex'; //pokazuję drugi nadając mu display:flex
}

/* FUNKCJA MA W SOBIE DWIE INNE */
function localizeAndHide() {
  findMyState();
  replaceWeather();
}


module.exports = {
    localizeAndHide
  };

/* PODPIĘCIE ZEWNĘTRZNEJ BAZY WEATHER Z UŻYCIEM KLUCZA API 
ORAZ WYŚWIETLENIE NAZWY MIASTA I TEMPERATURY NA STRONIE */

// let place = `${longitude},${latitude}`;

/* WYŚWIELTENIE CAŁOŚCI INFORMACJI Z PLIKU JSON */

// let place = 'Liverpool';
// fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + place, options)
// .then(resp => resp.json())
// .then(data => {
//   // iteruj po właściwościach obiektu JSON za pomocą Object.keys()

//   Object.keys(data.location).forEach(key => {
//     // utwórz elementy HTML dla każdej właściwości i dodaj je do listy
//     let divItem = document.createElement('div');
//     divItem.textContent = `${key}: ${data.location[key]}`;
//     document.getElementById('jsonlist').appendChild(divItem);
//   });
// });
