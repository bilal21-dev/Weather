let image = document.querySelector(".back2");
let humid = document.querySelector(".humidity-info");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".discription");
let wind = document.querySelector(".wind-info");



//------------------------------------ AIDAR CHANGING HOYI AE
const spinner=document.getElementById('spinner');
const content=document.getElementById('image2');
spinner.style.display='block'; 
content.style.display='none';  





window.addEventListener("load", async () => {


  const city = localStorage.getItem("selectedCity");
  if (!city) {
    alert("No city selected");
    window.location.href = "index.html";
    return;
  }



  const key = "5585f54d291401022217385080c84aef";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  console.log("Fetching data for:", city);

  try {
    let response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    console.log("API response:", data);

    switch (data.weather[0].main) {
      case "Clear":
        image.src = "clear.jpg";
        break;
      case "Rain":
        image.src = "rain.webp";
        break;
      case "Mist":
        image.src = "mist.jpg";
        break;
      case "Clouds":
        image.src = "clouds.jpg";
        break;
      default:
        image.src = "2.jpg";
        break;
    }

    humid.textContent = `${data.main.humidity}%`;
    temp.textContent = `${data.main.temp}°C`;
    desc.textContent = data.weather[0].description;
    wind.textContent = `${data.wind.speed} km/h`;


    
//------------------------------------ AIDAR CHANGING HOYI AE
    spinner.style.display='none'; 
    content.style.display='block';  
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

