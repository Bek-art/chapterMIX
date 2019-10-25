var btn = document.querySelector('#show')
    btn.addEventListener('click', function(){
        var name = document.querySelector('#country-name').value
        console.log(name);
    })
function htmlRequest(){
    const url = 'https://restcountries.eu/rest/v2/name/eesti';
    const xmr = new XMLHttpRequest();
    xmr.open('GET', url, true);
    
    xmr.onload = (data) => {
        data = JSON.parse(data,srcElement.response);
        
    }
}
