"use strict";

// prettier-ignore

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
    date = new Date();
    // date = `Running on ${new Date().toLocaleString("en-US", { month: "long" })} ${new Date().getDate()}`;
    id = String(Date.now()).slice(-10);
    clicks = 0;
    constructor(coords, distance, duration) {
        this.distance = distance; // km
        this.duration = duration; // min
        this.coords = coords; // [lat, lng]
    }
    click() {
        this.clicks++;
    }
    _setDescription() {
        return `${this.date.toLocaleString("en-US", { month: "long" })} ${this.date.getDate()}`;
    }
}

// let wk = new Workout();
// console.log(wk.date);

class Running extends Workout {
    type = "running";
    name = "";
    description = "";
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this.description = "Running on " + this._setDescription();
    }
    calcPace() {
        this.pace = (this.duration / this.distance).toFixed(1);
        return this.pace;
    }
}

class Cycling extends Workout {
    type = "cycling";
    name = "";
    description = "";
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this.description = "Cycling on " + this._setDescription();
    }
    calcSpeed() {
        this.speed = (this.distance / (this.duration / 60)).toFixed(1);
        return this.speed;
    }
}

// let run1 = new Running([39.2, 54.5], 5.2, 24, 78);
// let cyr1 = new Cycling([39.2, 54.5], 27, 95, 523);
// console.log("run1", run1);
// console.log("cyr1", cyr1);

// ///////////////////////////////////////////////////////////////////////////////////
// APP

class App {
    #map;
    #mapEvent;
    #mapZoomLevel = 13;
    #workoutArr = [];
    #markers = new Map();
    constructor() {
        this._getPosition();

        this._getLocalStorage();

        form.addEventListener("submit", this._newWorkout.bind(this));
        inputType.addEventListener("change", this._toggleElevationField.bind(this));

        containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
    }
    // заппросить текущее местоположение
    _getPosition() {
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), err => console.log(err));
    }

    _loadMap(position) {
        this.#map = L.map("map").setView([position.coords.latitude, position.coords.longitude], this.#mapZoomLevel);
        // инициализация карты
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap",
        }).addTo(this.#map);

        // let marker = L.marker([latitude, longitude]).addTo(#map).bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
        this.#map.on("click", this._showForm.bind(this));

        this.#workoutArr.forEach(el => {
            this.#mapEvent = { latlng: {} };
            this.#mapEvent.latlng.lat = el.coords[0];
            this.#mapEvent.latlng.lng = el.coords[1];

            this._renderWorkoutMarker(el);
        });
    }
    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
    }
    _hideForm() {
        // очищаем форму и скрываем ее
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";
        if (inputType.value === "cycling") {
            inputType.value = "running";
            this._toggleElevationField();
        }
        form.style.display = "none";
        form.classList.add("hidden");
        setTimeout(() => {
            form.style.display = "grid";
        }, 1000);
    }

    // переключение поля в форме
    _toggleElevationField(e) {
        inputCadence.parentElement.classList.toggle("form__row--hidden");
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    }
    _validateForm(value1, value2, value3) {
        if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
            // console.log("isNaN");
            return true;
        } else if (value1 < 1 || value2 < 1 || value3 < 1) {
            // console.log("value < 1");
            return true;
        }
        return false;
    }
    _newWorkout(e) {
        e.preventDefault();
        // получить данные из форм
        let popupContent;
        let type = inputType.value;
        let distance = +inputDistance.value;
        let duration = +inputDuration.value;
        let { lat, lng } = this.#mapEvent.latlng;
        let workout;

        if (type === "running") {
            // console.log("Running");
            let cadence = +inputCadence.value;
            if (this._validateForm(distance, duration, cadence)) {
                return alert("Inputs have to be positive numbers!");
            }

            // добавить объект в массив.
            workout = new Running([lat, lng], distance, duration, cadence);
            this.#workoutArr.push(workout);
            // console.log("this", this);
            // let tempDate = this.#workoutArr[this.#workoutArr.length - 1].date;
            // popupContent = `Running on ${tempDate.toLocaleString("en-US", { month: "long" })} ${tempDate.getDate()}`;
        } else {
            // console.log("Cycling");
            let elevation = +inputElevation.value;
            if (this._validateForm(distance, duration, elevation)) {
                return alert("Inputs have to be positive numbers!");
            }

            // добавить объект в массив.
            workout = new Cycling([lat, lng], distance, duration, elevation);
            this.#workoutArr.push(workout);
            // let tempDate = this.#workoutArr[this.#workoutArr.length - 1].date;
            // popupContent = `Cycling on ${tempDate.toLocaleString("en-US", { month: "long" })} ${tempDate.getDate()}`;
        }

        // проверить валидность данных

        // по условию создать объект

        // логика валидации формы и добавления ее в массив

        // отобразить эллемент
        this._renderWorkout(workout);

        // отобразить маркер на карте
        this._renderWorkoutMarker(workout);

        // очищаем форму и скрываем ее
        this._hideForm();
        // отобразить объект в списке слева

        // добавляем объект в local storage
        this._setLocalStorage();
    }

    _renderWorkoutMarker(WorkoutObj) {
        console.log("_renderWorkoutMarker", WorkoutObj);

        // console.log("отобразить маркер");
        let marker = L.marker([this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng])
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    autoClose: false,
                    closeOnClick: false,
                    maxWidth: 250,
                    minWidth: 100,
                    className: `${WorkoutObj.type}-popup`,
                })
            )
            // .setPopupContent(`${markerContent}`)
            .setPopupContent(`${WorkoutObj.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${WorkoutObj.description}`)
            .openPopup();

        this.#markers.set(WorkoutObj.id, marker);
        // WorkoutObj.markr = marker;
    }

    _renderWorkout(workout) {
        // console.log("_renderWorkout", workout);
        if (workout === undefined) {
            console.log("отобразить все эллементы в начале загрузки страницы");
            // localStorage.forEach(el => {
            //    this._renderWorkout(el);
            // });
        } else {
            // console.log("отобразить один эллемент");
            let htmlStr;
            if (workout.type === "running") {
                htmlStr = `<li class="workout workout--running" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">🏃‍♂️</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
            } else {
                htmlStr = `<li class="workout workout--cycling" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">🚴‍♀️</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
            }
            form.insertAdjacentHTML("afterend", htmlStr);
        }
    }
    _moveToPopup(e) {
        // if (e.target.classList.value == "workouts" || e.target.classList.value == "form" || e.target.parentElement.closest(".form") !== null) return 0;
        // let el = e.target.parentElement.closest(".workout") === null ? e.target : e.target.parentElement.closest(".workout");

        let el = e.target.closest(".workout");
        if (!el) return;
        // находим эллемент с этим айди
        let workout = this.#workoutArr.find(elem => elem.id == el.dataset.id);
        console.log(workout);

        workout.click();

        // перемещаем карту
        // this.#map.panTo(workout.coords);
        this.#map.setView(workout.coords, this.#mapZoomLevel, { animate: true, pan: { duration: 1 } });
    }

    _setLocalStorage() {
        localStorage.setItem("workouts", JSON.stringify(this.#workoutArr));
    }
    _getLocalStorage() {
        let workoutsArr = JSON.parse(localStorage.getItem("workouts"));
        if (!workoutsArr) return;

        workoutsArr.forEach(el => {
            if (el.type === "running") {
                el.__proto__ = Object.create(Running.prototype);
            } else {
                el.__proto__ = Object.create(Cycling.prototype);
            }
        });

        this.#workoutArr = workoutsArr;

        this.#workoutArr.forEach(el => {
            this._renderWorkout(el);
        });
    }
    reset() {
        localStorage.clear();
        location.reload();
    }
    _deleteAllWorkouts() {
        while (this.#workoutArr.length >= 1) {
            this._deleteWorkout(this.#workoutArr[0].id);
        }
        this.#markers = new Map();
    }
    _deleteWorkout(id) {
        let deleteElem;
        this.#workoutArr.find((elem, i) => {
            if (elem.id == id) {
                deleteElem = elem;
                this.#workoutArr.splice(i, 1);
                return true;
            }
        });
        // console.log("deleteElem", deleteElem);

        let htmlElem = document.querySelector(`.workout[data-id="${id}"]`);
        // удаляем эллемент
        htmlElem.remove();

        // удаляем маркер
        this.#markers.get(deleteElem.id).remove();
        this.#markers.delete(id);
        // обновляем local storage
        this._setLocalStorage();
    }
    _changeWorkout(id, distance, duration, thirdParam) {
        let el = this.#workoutArr.find(elem => elem.id == id);

        el.distance = distance;
        el.duration = duration;
        if (el.type === "running") {
            el.cadence = thirdParam;
            el.calcPace();
        } else {
            el.elevationGain = thirdParam;
            el.calcSpeed();
        }

        this._setLocalStorage();
        // на этом месте удалить блок слева и отрисовать его еще раз
        this._deleteWorkout(id);
        this._renderWorkout(el);
    }
}
let app0 = new App();

// app0._deleteWorkout(id)
// app0._deleteAllWorkouts()
// app0._changeWorkout(id, distance, duration, thirdParam)

// дополнительный функционал
// 1 изменять объект тренировки +
// 2 удалять объект тренировки +
// 3 удалять все объекты тренировки +

// // tests
// console.log("tests");

// let a = "&";
// console.log("a = 'qwerty'", a);
// console.log("+a", +a);

// prettier - ignore123
// prettier-ignore
// let a = 0
// let b = 7;

// let test = {
//     r:65,
//     65:'qwerty',
//     res:'true',
// }
// localStorage.workouts0 = JSON.stringify(["test", test, { 5: "ww" }, "tert"]);

// console.log(JSON.parse(localStorage.workouts0));

// let a = {};
// console.log(a);

// let c = null
// console.log(typeof c);

// let b = {
//     q: 3,
//     w: 5,
//     plus: function () {
//         return this.q + this.w;
//     },
// };

// console.log(b.plus());
// let d = Object.assign({}, b);
// let e = JSON.parse(JSON.stringify(b));
// console.log(d);
// console.log(e);

// Создайте поле textarea, значение которого будет автоматически сохраняться при каждом его изменении.
// let area = document.querySelector(".code-result__iframe");
// let area = document.getElementById("area");
// area.value = localStorage.getItem("area");
// console.log(area);
// area.addEventListener("keydown", function (e) {
//     console.log(this.value);
//     localStorage.setItem("area", this.value);
// });

//

// let logo = document.querySelector(".logo");
// logo.onclick = function () {
//     console.log("test");
// };
// logo.onclick = "";

//

// let logo = document.querySelector(".logo");
// logo.addEventListener("click", function (e) {
//     console.log("test", e);
//     console.log("logo", logo);
// });
