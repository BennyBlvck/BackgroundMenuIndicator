// adding active class to item when it is hovered on 

let list = document.querySelectorAll('li')

for (let i=0; i<list.length; i++) {
    list[i].onmouseover = function(){
       let j = 0;
       while (j<list.length){
        list[j++].className = 'list';
       }
        list[i].className = 'list active';
    }
}


// changing background of the body based on the colour of the indicator 

list.forEach (elements => {
    elements.addEventListener ('mouseenter', function(event){
        let bg = document.querySelector('body');
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    })
})