function updatecurrentLocation() {
  let currentcity = document.querySelector("#current-city");
  let currentcityCityElement = currentcity.querySelector("h2");
  let currentcityDateElement = currentcity.querySelector(".date");
  let currentcityTimeElement = currentcity.querySelector(".time");
  let timefunc = moment();

  currentcityDateElement.innerHTML = timefunc.format("dddd Do of MMMM");
  currentcityTimeElement.innerHTML = timefunc.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  currenttimezone = moment.tz.guess();
  currentlocation = currenttimezone.replace("_", " ").split("/")[1];
  currentcityCityElement.innerHTML = currentlocation;

  let sydneycity = document.querySelector("#sydney");
  let sydneycityElement = sydneycity.querySelector("h2");
  let sydneyDate = sydneycity.querySelector(".date");
  let sydneyTime = sydneycity.querySelector(".time");
  let sydneyfunc = moment().tz("Australia/Sydney");
  sydneycityElement.innerHTML = "Sydney";
  sydneyDate.innerHTML = sydneyfunc.format("dddd Do of MMMM");
  sydneyTime.innerHTML = sydneyfunc.format("h:mm:ss [<small>]A[</small>]");

  let dubaicity = document.querySelector("#dubai");
  let dubaicityElement = dubaicity.querySelector("h2");
  let dubaiDate = dubaicity.querySelector(".date");
  let dubaiTime = dubaicity.querySelector(".time");
  let dubaifunc = moment().tz("Asia/Dubai");
  dubaicityElement.innerHTML = "Dubai";
  dubaiDate.innerHTML = dubaifunc.format("dddd Do of MMMM");
  dubaiTime.innerHTML = dubaifunc.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone.length > 0) {
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimezone);
    let citiesElement = document.querySelector("#citycontainer");
    citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do of MMMM")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        </div>`;
  }
}

updatecurrentLocation();
setInterval(updatecurrentLocation, 1000);

let citiesSelectElement = document.querySelector("#search-bar");
citiesSelectElement.addEventListener("change", updateCity);
