const apiKey= "cd96ad813fc46cd31b66b6700035c266";
        const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        const weathericon = document.querySelector(".weather weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiurl+ city +`&appid=${apiKey}`);
            var data = await response.json();

            
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

            if (data.weather[0].main == "Coulds"){
                weathericon.src ="images/clouds.png";
            }

            else if(data.weather[0].main == "Clear"){
                weathericon.src= "images/clear.png";
            }

            else if(data.weather[0].main == "Drizzle"){
                weathericon.src="images/drizzle.png";
            }


            else if(data.weather[0].main == "Mist"){
                weathericon.src= "images/mist.png";
            }

            else if(data.weather[0].main == "Rain"){
                weathericon.src="images/rain.png";
            }

            else if(data.weather[0].main == "Snow"){
                weathericon.src="images/snow.png";
            }

        }
        
        searchbtn.addEventListener("click", ()=>{
            checkWeather(searchbox.value);
        });