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
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimezone);
  let citiesElement = document.querySelector("#sydney");
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

updatecurrentLocation();
setInterval(updatecurrentLocation, 1000);

let citiesSelectElement = document.querySelector("#search-bar");
citiesSelectElement.addEventListener("change", updateCity);
