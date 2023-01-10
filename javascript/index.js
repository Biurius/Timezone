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
  currentcityCityElement.innerHTML = currenttimezone;

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyfunc = moment().tz("Australia/Sydney");
  let sydneycity = sydneyElement.querySelector("h2");
  let sydneyTime = sydneyElement.querySelector(".time");
  sydneyDate.innerHTML = sydneyfunc.format("dddd Do of MMMM");
  sydneyTime.innerHTML = sydneyfunc.format("h:mm:ss [<small>]A[</small>]");
  sydneycity.innerHTML = "Australia/Sydney";
}

updatecurrentLocation();
setInterval(updatecurrentLocation, 1000);
