fetch("https://restcountries.eu/rest/v2/name/{name}")
.then(function(res){
    console.log(res.json())
})