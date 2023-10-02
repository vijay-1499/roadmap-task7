//1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//Get all the countries from Asia continent /region using Filter function
// var request = new XMLHttpRequest();

// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function () {
//     if (request.status === 200) {
//         var result = JSON.parse(request.responseText);
//         var filteredCountries = result.filter(function (country) {
//             return country.region === "Asia";
//         });
//         console.log(filteredCountries);
//     } else {
//         console.error("Failed to fetch data. Status code: " + request.status);
//     }
// };

// 2.Get all the countries with a population of less than 2 lakhs using Filter function
// var request1 = new XMLHttpRequest();
// request1.open("GET","https://restcountries.com/v3.1/all");
// request1.send();
// request1.onload=function(){
//     var result1=JSON.parse(request1.response);
//     const pop = result1.filter((element)=>{
//         return element.population<200000;
//     })
//console.log(pop);}

//3.Print the following details name, capital, flag using forEach function
// var requestt = new XMLHttpRequest();
// requestt.open("GET","https://restcountries.com/v3.1/all");
// requestt.send();
// requestt.onload=function(){
//     var resultt=JSON.parse(requestt.response);
//    resultt.forEach(element => {
//       console.log(element.name);
//         console.log(element.capital);
//         console.log(element.flags.png); 

//    });
// }

//5.Print the total population of countries using reduce function


// var reques = new XMLHttpRequest();
// reques.open("GET","https://restcountries.com/v3.1/all");

// reques.send();
// reques.onload=function(){
//     var resul=JSON.parse(reques.response);
//     var total = resul.reduce((acc,curr) =>{
//         return acc+curr.population;
//     } ,0);

//     console.log(total);
 
// }


//5.Print the country which uses US Dollars as currenc
var req = new XMLHttpRequest();
// req.open("GET","https://restcountries.com/v3.1/all");
// req.send();

// req.onload=function(){
//     var res=JSON.parse(req.response);
//    var currency = res.filter((element) => {
//      for(let key in element.currencies){
//         if(element.currencies.[key].code === "USD"){
//             return element;
//         }
//      }
//    })
//         console.log(currency);
//     }


