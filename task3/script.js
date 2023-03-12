const btn = document.querySelector('.btn-test');
const screen = document.querySelector('#user-screen');
const loc = document.querySelector('#user-location');

const error = () => {
    loc.textContent = 'Невозможно получить местоположение';
}

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    loc.textContent = `Широта ${latitude}, долгота ${longitude}`
}

btn.addEventListener('click', () => {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    screen.textContent = '';
    screen.textContent = `Ширина экрана ${screenWidth}, высота экрана ${screenHeight}`;

    if (!navigator.geolocation) {
        loc.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        loc.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
})
