 const button=document.querySelector(".btn")
 const input=document.querySelector(".input")
 const temp=document.querySelector(".temp")
 const place=document.querySelector(".city")
 const date=document.querySelector(".date")
 const icon=document.querySelector(".icon")
 const weather=document.querySelector(".weather")
 const commonCity=document.querySelectorAll(".common-city")
 const tempf=document.querySelector(".cloudy-result")
 const humidity=document.querySelector(".humidity-result")
 const wind=document.querySelector(".wind-result")

   function changeScreenDetails(){

	function update(){    
		button.addEventListener("click",()=>{
//		     document.body.style.backgroundImage="url(https://source.unsplash.com/random?weather)"
           const city=input.value
          const url=`https://api.weatherapi.com/v1/current.json?key=e20defb1deff4942adc182320223012&q=
           ${city}&aqi=yes`
            fetch(url)
            .then(response=>response.json())
            .then(data=>{      
        
          	 temp.textContent=data.current.temp_c+"°"
             place.textContent=data.location.name
             date.textContent=data.current.last_updated
             icon.src=data.current.condition.icon
             weather.textContent=data.current.condition.text
             tempf.textContent=data.current.temp_f
             humidity.textContent=data.current.humidity+"%"
             wind.textContent=data.current.wind_kph+" km/h"
                 
             
         
          })
            .catch((err)=>{
            	if(city.length===0){
            		alert("Input field can not be empty...")
            	}
            	else{
            		alert("Enter a valid city name or make sure your spell is correct...")
            	}
      }) 
        })
               }update()
     // COMMON CITY
  commonCity.forEach(city=>{

            
      city.addEventListener("click",()=>{
   //    document.body.style.backgroundImage="url(https://source.unsplash.com/random?weather)"
          const cityName=city.innerText
          const url=`https://api.weatherapi.com/v1/current.json?key=e20defb1deff4942adc182320223012&q=
           ${cityName}&aqi=yes`
            fetch(url)
            .then(response=>response.json())
            .then(data=>{     
          	 temp.textContent=data.current.temp_c+"°"
             place.textContent=data.location.name
             date.textContent=data.current.last_updated
             icon.src=data.current.condition.icon
             weather.textContent=data.current.condition.text
              tempf.textContent=data.current.temp_f
             humidity.textContent=data.current.humidity+"%"
             wind.textContent=data.current.wind_kph+" km/h"
                 
             


                       })
})
})
  
  }changeScreenDetails()
  const url=`https://api.weatherapi.com/v1/current.json?key=e20defb1deff4942adc182320223012&q=
           $erbil&aqi=yes`
  fetch(url)
            .then(response=>response.json())
            .then(data=>{      
          	 temp.textContent=data.current.temp_c+"°"
             place.textContent=data.location.name
             date.textContent=data.current.last_updated
             icon.src=data.current.condition.icon
             weather.textContent=data.current.condition.text
             tempf.textContent=data.current.temp_f
             humidity.textContent=data.current.humidity+"%"
             wind.textContent=data.current.wind_kph+" km/h"
             })