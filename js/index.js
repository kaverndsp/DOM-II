
//1
const textOne = document.querySelector('.intro');

textOne.addEventListener('click', function(event){
    textOne.style.backgroundColor = 'slategrey';
    event.stopPropagation();

})

//2
const headerOne = document.querySelector('.intro h2');

headerOne.addEventListener('click', (event) => {
    headerOne.style.fontSize = '5.0rem';
    event.stopPropagation();
})

//3
const newImg = document.querySelector('.intro img');

window.addEventListener("resize", function(){
  newImg.src = 'https://images.pexels.com/photos/2216498/pexels-photo-2216498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
})

//4
const full = document.querySelector('body');

full.addEventListener('wheel', function(){
    full.style.backgroundColor = 'rgb(237, 255, 255)';
})



//5
const funBus = document.querySelectorAll('.text-content h2');

for (let i = 0; i < funBus.length; i++){
funBus[i].addEventListener('dblclick', function(){
    funBus[i].style.fontSize = '4.0rem';
   
    })
}


//6
const imageRise = document.querySelectorAll('.img-content');

for (let i = 0; i < imageRise.length; i++){
    imageRise[i].addEventListener('click', function(){
        imageRise[i].style.height = '50vh';
    })

//7
    imageRise[i].addEventListener('mouseleave', function(){
        imageRise[i].style.height = '30vh';
    })
}

//8
const para = document.querySelectorAll('p');

for(let i = 0; i < para.length; i++){
    para[i].addEventListener('mouseenter', function(){
        para[i].style.wordSpacing = '2.0rem';
    })
}

//9
const headerTwo = document.querySelectorAll('.destination h4');

for(let i = 0; i < headerTwo.length; i++){
headerTwo[i].addEventListener('mouseover', function(){
     headerTwo[i].style.color = 'blue';
     headerTwo[i].style.fontSize = '3.0rem';

    
})
// console.log(i);
}

//10

const buttons = document.querySelectorAll('.btn');

for(let i = 0; i < buttons.length; i++){
buttons[i].addEventListener('mousemove', runEvent);    
function runEvent(e){
 buttons[i].style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",1000)";
}
}

// using preventsDefault
const navs = document.querySelectorAll('.nav-link');

for(let i = 0; i < navs.length; i++){
    navs[i].addEventListener('click', function(event){
        event.preventDefault();
    })
}

//removing element with DOM

newImg.addEventListener('click', function(){
    newImg.parentNode.removeChild(newImg);
})