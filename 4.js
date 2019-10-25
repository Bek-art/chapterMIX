// let elements = document.querySelectorAll(".element")
// elements[0].style.color = "red";
// elements[1].style.color = "red";
// elements[2].style.color = "green";
// elements[3].style.color = "green";
// elements[4].style.color = "green";
// elements[5].style.color = "green";

// elements.forEach((function(item, index){
//     // item.style.color = "red"
//     if(index <= 2){
//         item.style.color = "red"    
//     }else if(index <= 5){
//         item.style.color = "green"
//     }
// }))

let elements = document.querySelectorAll(".element");
elements.forEach(function(item, index) {
    for(let i = 0; i < index; i++) {
        if(i % 2 !== 0) {
            item.style.color = "red"
        } else {
            item.style.color = "green"
        }
    }
})