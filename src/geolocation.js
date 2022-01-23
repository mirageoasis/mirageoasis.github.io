const tag = document.getElementById("locWhe");
const key = "aa1fbb985405573eee11c410ddfa82b0"

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let city;
    let country;
    let weather;

    console.log(latitude);
    console.log(longitude);
    //tag.innerText =
    //status.textContent = '';
    fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${key}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            city = data[0]["name"];
            country = data[0]["country"]
            console.log(city);
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data["weather"][0]["main"]);
                    weather = data["weather"][0]["main"]
                    tag.innerText = `${weather} ${city} ${country}`
                })
        })



    //console.log(api)
}

function error() {
    alert("cannot get location!")
    tag.innerText = "cannot get location!"
}

navigator.geolocation.getCurrentPosition(success, error);
