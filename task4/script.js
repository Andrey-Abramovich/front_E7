const btn = document.querySelector('.btn-test');
const zone = document.querySelector('#btn-zone');
const ltime = document.querySelector('#btn-time');

// const error = () => {
//     zone.textContent = 'Невозможно получить геоположение';
// }
//
// const success = (position) => {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const url = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`;
//     return url
// }
// fetch(success(position))
//
// btn.addEventListener('click', () => {
//     if (!navigator.geolocation) {
//         zone.textContent = 'Поменяй браузер';
//     } else {
//         zone.textContent = 'Определяю местоположение...';
//         navigator.geolocation.getCurrentPosition(success, error);
//     }
// })