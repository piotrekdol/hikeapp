/* STANDARDOWO WITAMY SIĘ ZE ŚWIATEM */
// console.log("Hello World");

/* SPRAWDZAMY CZY ZACZYTUJE SIĘ PLIK SUM.JS, CZY WYKONUJE SIĘ FUNKCJA SUM*/
// const sum = require('./sum').sum;
// console.log("Hello World");
// console.log(sum(22,31));

/* WYŚWIETLENIE TYTUŁY H1 W DIVIE ID DEMO */
// let heading = document.querySelector("#demo");
// let dodawanko = sum(9110,40);
// heading.innerHTML = `Register Your Hike ${dodawanko}`;

/* PODPIĘCIE STYLI */
import "./css/style.scss"; 
// require('./css/style.scss'); //na początku import nie działał nie wiadomo dlaczego, 
// tylko działało require. Później import zaczął działać, też nie wiadomo dlaczego i ococho

/* PODPIĘCIE BITMAPY */ //MOŻNA TEŻ UMIEŚCIĆ W SCSS NA BACKGROUND-IMAGE W DIVIE .almaj
// import Icon from "./assets/img/almaj.jpg";
// let myIcon = new Image();
// myIcon.src = Icon;
// document.querySelector(".almaj").appendChild(myIcon);
// document.querySelector(".almaj").classList.add("change");

/* PODPINAM MODUŁ POGODY */
const localizeAndHide = require('./weather').localizeAndHide;

/* PRZYCISK DO LOKALIZACJI POGODY, KLIKNIĘCIE UKRYWA DOMYŚLNĄ POGODĘ DLA WARSZAWY 
I W JEJ MIEJSCE WYŚWIETLA POGODĘ W LOKALIZACJI UŻYTKOWNIKA*/
document.querySelector(".find-location").addEventListener("click", localizeAndHide); //findMyState to funkcja z pliku weather

