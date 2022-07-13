let getTime = () => {
  let city = document.querySelector("#city").value;
  let subdiv = document.querySelector(`.sub`);

  // Calling getTime using Axios library to fetch aladhan API information
  axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=""&method=8`).then(function (response) {

  subdiv.style.display = "block";

      const api = response.data;
      console.log(api);

        // Calling Fajr time
        document.querySelector(`#Fajr`).innerText = `Fajr: ${api.data.timings.Fajr}`;

        // Calling Dhuhr time
        document.querySelector(`#Dhuhr`).innerText = `Dhuhr: ${api.data.timings.Dhuhr}`;

        // Calling Asr time
        document.querySelector(`#Asr`).innerText = `Asr: ${api.data.timings.Asr}`;

        // Calling Maghrib time
        document.querySelector(`#Maghrib`).innerText = `Maghrib: ${api.data.timings.Maghrib}`;

        // Calling Isha time
        document.querySelector(`#Isha`).innerText = `Isha: ${api.data.timings.Isha}`;

        // Calling Sunrise time
        // document.querySelector(`#Sunrise`).innerText = `Sunrise: ${api.data.timings.Sunrise}`;

        // Calling Sunset time
        // document.querySelector(`#Sunset`).innerText = `Sunset: ${api.data.timings.Sunset}`;

        // Calling Midnight time
        // document.querySelector(`#Midnight`).innerText = `Midnight: ${api.data.timings.Midnight}`;

        // Calling Hijri Date
        // document.querySelector(`#HijriDate`).innerText = `Hijri Date: ${api.data.date.hijri.date}`;

        // Calling Time Zone
        // document.querySelector(`#TimeZone`).innerText = `TimeZone: ${api.data.meta.timezone}`;
    });
}
