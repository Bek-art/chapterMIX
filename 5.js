var container = document.querySelector('#container');
var btn = document.querySelector('.btn');
var form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
});
btn.addEventListener('click', function(){
    var input = document.querySelector('.addTask')
    var mssg = input.value;
    var newDiv = document.createElement('div');
    newDiv.className = 'task_item';
    newDiv.innerText = mssg;
    var newBtn = document.createElement("button");
    newBtn.innerText = "x";
    newDiv.append(newBtn);  
    container.append(newDiv);
    newBtn.addEventListener('click', function(){
        newDiv.remove(this
    );
    })
});
