'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const logo = document.querySelector('.logo');

class Workouts {
  date = new Date();
  // id = (this.date.getTime() + '').slice(-10); or
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, long]
    this.distance = distance;
    this.duration = duration;
  }
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workouts {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workouts {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / this.duration / 60;
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);

// const cycling1 = new Cycling([39, -11], 5.2, 24, 100);

////////////////////////section tow //////////////////////////////
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    this._getLocalStorage();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    // get user position from browser
    if (navigator.geolocation) {
      //  the argument position will be passed by java script it is like event on addeventlistener(e);
      // console.log(this);
      // we have add bind to the function call because geolocation who calls the loadMap method
      // this is regular function calling and thats set this to undefined.
      // so i can bind it with this keyword before calling the function because this keyword is pointing to the
      // object until this point.
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('sorry I could not get your current position');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords || 31.9633;
    const { longitude } = position.coords || 35.9299;
    this.#map = L.map('map').setView([latitude, longitude], this.#mapZoomLevel);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    this.#workouts.forEach(workout => this.renderWorkoutMarker(workout));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const checkInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const validateNegative = (...inputs) => inputs.every(input => input > 0);

    e.preventDefault();
    const { lat, lng } = this.#mapEvent.latlng;
    // console.log(lat, lng);

    /// steps to implement new workout
    // 1- get data from form
    //coords, distance, duration
    const type = inputType.value;
    const coords = [lat, lng];
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    // 2- check data validation

    // 3- if activity running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !checkInputs(distance, duration, cadence) ||
        !validateNegative(distance, duration, cadence)
      ) {
        return alert('please input a valid values!');
      }
      workout = new Running(coords, distance, duration, cadence);
    }

    // 4- if activity cycling, create cycling object

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !checkInputs(distance, duration, elevation) ||
        !validateNegative(distance, duration)
      ) {
        return alert('please input a valid values!');
      }
      // 5- add new object to workout array
      workout = new Cycling(coords, distance, duration, elevation);
    }
    this.#workouts.push(workout);

    // 6- render workout array on map as marker
    this.renderWorkoutMarker(workout);
    this._renderWorkout(workout);

    // 7- set local storage
    this._setLocalStorage();
  }

  renderWorkoutMarker(workout) {
    //clear inputs
    this._hideForm();

    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      ) //accepts strings only
      .openPopup();
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputElevation.value =
      inputCadence.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;
    if (workout.type === 'running') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
    `;
    }
    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
    }
    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    const selectedWorkout = e.target.closest('.workout');

    if (!selectedWorkout) return;
    const workout = this.#workouts.find(
      ele => ele.id === selectedWorkout.dataset.id
    );
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    // workout.click();
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach(workout => this._renderWorkout(workout));
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();

/**
 * the old code version 1 before classes
 */

/*
let map, mapEvent;
if (navigator.geolocation) {
  document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    let http = 'https://www.google.com/maps/@31.9685027,35.8825136,15z';
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        //   console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);
        map = L.map('map').setView([latitude, longitude], 13);
        //openstreem map
        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //another design
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        //google map
        //   L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        //     maxZoom: 20,
        //     subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        //   }).addTo(map);

        map.on('click', function (mapE) {
          mapEvent = mapE;
          form.classList.remove('hidden');
          inputDistance.focus();
        });
      },
      function () {
        alert('not able to have your location!');
      }
    );
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const { lat, lng } = mapEvent.latlng;
  // console.log(lat, lng);

  //clear inputs
  inputDistance.value =
    inputDuration.value =
    inputElevation.value =
    inputCadence.value =
      '';

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('workout')
    .openPopup();

  console.log(type);
});
// let cur = true;
inputType.addEventListener('change', function () {
  // this method can be replaced by adding toggle methods for both
  // toggle method make sure that if the item have the class it will remove it
  // or if not it will add it. so we get the same result.

  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');

  //   if (cur) {
  //     inputCadence.parentElement.classList.add('form__row--hidden');
  //     inputElevation.parentElement.classList.remove('form__row--hidden');
  //     cur = false;
  //   } else {
  //     inputCadence.parentElement.classList.remove('form__row--hidden');
  //     inputElevation.parentElement.classList.add('form__row--hidden');
  //     cur = true;
  //   }
});
*/
