/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

function sum(a, b) {
  return a + b;
}
module.exports = {
  sum: sum
};

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 3 */
/***/ ((module) => {

/* SPRAWDZANIE LOKALIZACJI UŻYTKOWNIKA */
/* KLUCZ API POGODA Z RAPIDAPI */

var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "db60434695mshed9900c26b14af2p181808jsn1ed686cbf7cd",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
  }
};

/* NAJPIERW, DEFAULTOWO WYŚWIETLAM POGODĘ DLA WARSZAWY, ŻEBY NIE BYŁO PUSTO */
fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=Warsaw", options).then(function (resp) {
  return resp.json();
}).then(function (data) {
  var city = Object.keys(data.location)[0]; // pobieramy klucz PIERWSZEGO ELEMENTU Z LOCATION
  var country = Object.keys(data.location)[2];
  var datetime = Object.keys(data.location)[7];
  var temperature = Object.keys(data.current)[2]; // pobieramy klucz trzeciego elementu Z CURRENT
  var iconDesc = Object.keys(data.current.condition)[0];
  var icon = Object.keys(data.current.condition)[1];
  var namecity = data.location[city]; // TWORZYMY ZMIENNĄ NAMECITY, KTÓRA WYŚWIETLI NAZWĘ MIASTA NA STRONIE
  var namecountry = data.location[country]; //TWORZYMY ZMIENNĄ NAMECOUNRTY, KTÓRA WYŚWIETLI NAZWĘ PAŃSTWA NA STRONIE
  var date_time = data.location[datetime]; //TWORZYMY ZMIENNĄ NAMECOUNRTY, KTÓRA WYŚWIETLI NAZWĘ PAŃSTWA NA STRONIE        
  var temp_value = data.current[temperature]; // TWORZYMY ZMIENNĄ TEMP_VALUE, KTÓRA WYŚWIETLI TEMPERATURĘ NA STRONIE
  var icon_description = data.current.condition[iconDesc]; // TWORZYMY ZMIENNĄ WEATHER_ICON, KTÓRA WYŚWIETLI IKONĘ NA STRONIE        
  var weather_icon = data.current.condition[icon]; // TWORZYMY ZMIENNĄ WEATHER_ICON, KTÓRA WYŚWIETLI IKONĘ NA STRONIE
  var outputDiv = document.getElementById("weatherwarsaw");
  outputDiv.innerHTML = "<div class=\"city\">".concat(namecity, "</div>,&nbsp;<div>").concat(namecountry, "</div>&nbsp;<div id=\"temp\">\n    <span class=\"material-symbols-outlined font-med\">device_thermostat</span>").concat(temp_value, "\xB0C</div>&nbsp;<div>").concat(icon_description, "</div>&nbsp;\n    <div class=\"iconcondition\"><img src=\"http:").concat(weather_icon, "\" /></div><div>").concat(date_time, "</div>"); // CO MA SIĘ WYŚWIETLAĆ NA STRONIE
  if (temp_value >= 20) {
    //INSTRUKCJA WARUNKOWA JAK MA ZMIENIAĆ SIĘ KOLOR TEKSTU W ZALEŻNOŚCI OD WYSOKOŚCI TEMPERATURY
    var v = document.getElementById("temp");
    v.className += "addred";
  } else if (temp_value <= 19 && temp_value > 11) {
    var w = document.getElementById("temp");
    w.className += "addorange";
  } else {
    var ww = document.getElementById("temp");
    ww.className += "addblue";
  }
})["catch"](function (error) {
  return console.error(error);
});

/* PRZYCISK ABY POBRAĆ LOKALIZACJĘ UŻYTKOWNIKA I WYŚWIETLIĆ W MIEJSCE DEFAULTOWEJ WARSZAWY */
var findMyState = function findMyState() {
  var status = document.querySelector(".status");
  var success = function success(position) {
    console.log(position);
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=" + latitude + "," + longitude, options).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      var city = Object.keys(data.location)[0]; // pobieramy klucz PIERWSZEGO ELEMENTU Z LOCATION
      var country = Object.keys(data.location)[2];
      var datetime = Object.keys(data.location)[7];
      var temperature = Object.keys(data.current)[2]; // pobieramy klucz trzeciego elementu Z CURRENT
      var iconDesc = Object.keys(data.current.condition)[0];
      var icon = Object.keys(data.current.condition)[1];
      var namecity = data.location[city]; // TWORZYMY ZMIENNĄ NAMECITY, KTÓRA WYŚWIETLI NAZWĘ MIASTA NA STRONIE
      var namecountry = data.location[country]; //TWORZYMY ZMIENNĄ NAMECOUNRTY, KTÓRA WYŚWIETLI NAZWĘ PAŃSTWA NA STRONIE
      var date_time = data.location[datetime]; //TWORZYMY ZMIENNĄ NAMECOUNRTY, KTÓRA WYŚWIETLI NAZWĘ PAŃSTWA NA STRONIE        
      var temp_value = data.current[temperature]; // TWORZYMY ZMIENNĄ TEMP_VALUE, KTÓRA WYŚWIETLI TEMPERATURĘ NA STRONIE
      var icon_description = data.current.condition[iconDesc]; // TWORZYMY ZMIENNĄ WEATHER_ICON, KTÓRA WYŚWIETLI IKONĘ NA STRONIE        
      var weather_icon = data.current.condition[icon]; // TWORZYMY ZMIENNĄ WEATHER_ICON, KTÓRA WYŚWIETLI IKONĘ NA STRONIE
      var outputDiv = document.getElementById("weather");
      outputDiv.innerHTML = "<div class=\"city\">".concat(namecity, "</div>,&nbsp;<div>").concat(namecountry, "</div>&nbsp;<div id=\"temp2\">\n        <span class=\"material-symbols-outlined font-med\">device_thermostat</span>").concat(temp_value, "\xB0C</div>&nbsp;<div>").concat(icon_description, "</div>&nbsp;\n        <div class=\"iconcondition\"><img src=\"http:").concat(weather_icon, "\" /></div><div>").concat(date_time, "</div>"); // CO MA SIĘ WYŚWIETLAĆ NA STRONIE
      if (temp_value >= 20) {
        //INSTRUKCJA WARUNKOWA JAK MA ZMIENIAĆ SIĘ KOLOR TEKSTU W ZALEŻNOŚCI OD WYSOKOŚCI TEMPERATURY
        var v = document.getElementById("temp2");
        v.className += "addred";
      } else if (temp_value <= 19 && temp_value > 11) {
        var w = document.getElementById("temp2");
        w.className += "addorange";
      } else {
        var ww = document.getElementById("temp2");
        ww.className += "addblue";
      }
    })["catch"](function (error) {
      return console.error(error);
    });
  };
  var error = function error() {
    status.textContent = "Unable to retrieve your location";
  };
  navigator.geolocation.getCurrentPosition(success, error);
};

/* DEFAULTOWO MA BYĆ POGODA DLA WARSZAWY, PO KLIKNIĘCIU PRZYCISK 
DO LOKALIZACJI W MIEJSCE WARSZAWY PODSTAWIA SIĘ LOKALIZACJA UŻYTKOWNIKA */

var defaultWeather = document.querySelector('#weatherwarsaw'); // div pogody dla Warszawy
var customWeather = document.querySelector('#weather'); // div pogody użytkownika

weather.style.display = 'none'; // pogoda użytkownika jest początkowo ukryta

var replaceWeather = function replaceWeather() {
  //funkcja zastępująca jeden div drugim
  weatherwarsaw.style.left = '100%'; //Ukrywam pierwszy div
  weather.style.display = 'flex'; //pokazuję drugi nadając mu display:flex
};

/* FUNKCJA MA W SOBIE DWIE INNE */
function localizeAndHide() {
  findMyState();
  replaceWeather();
}
module.exports = {
  localizeAndHide: localizeAndHide
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

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* STANDARDOWO WITAMY SIĘ ZE ŚWIATEM */
console.log("Hello World");

/* SPRAWDZAMY CZY ZACZYTUJE SIĘ PLIK SUM.JS, CZY WYKONUJE SIĘ FUNKCJA SUM*/
var sum = (__webpack_require__(1).sum);
console.log("Hello World");
console.log(sum(22, 31));

/* WYŚWIETLENIE TYTUŁY H1 W DIVIE ID DEMO */
// let heading = document.querySelector("#demo");
// let dodawanko = sum(9110,40);
// heading.innerHTML = `Register Your Hike ${dodawanko}`;

/* PODPIĘCIE STYLI */

// require('./css/style.scss'); //na początku import nie działał nie wiadomo dlaczego, 
// tylko działało require. Później import zaczął działać, też nie wiadomo dlaczego i ococho

/* PODPIĘCIE BITMAPY */ //MOŻNA TEŻ UMIEŚCIĆ W SCSS NA BACKGROUND-IMAGE W DIVIE .almaj
// import Icon from "./assets/img/almaj.jpg";
// let myIcon = new Image();
// myIcon.src = Icon;
// document.querySelector(".almaj").appendChild(myIcon);
// document.querySelector(".almaj").classList.add("change");

/* PODPINAM MODUŁ POGODY */
var localizeAndHide = (__webpack_require__(3).localizeAndHide);

/* PRZYCISK DO LOKALIZACJI POGODY, KLIKNIĘCIE UKRYWA DOMYŚLNĄ POGODĘ DLA WARSZAWY 
I W JEJ MIEJSCE WYŚWIETLA POGODĘ W LOKALIZACJI UŻYTKOWNIKA*/
document.querySelector(".find-location").addEventListener("click", localizeAndHide); //findMyState to funkcja z pliku weather
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map